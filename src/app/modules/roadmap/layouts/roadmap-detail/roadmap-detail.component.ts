import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { map, Observable } from 'rxjs';
import { FeedbackService } from '@core/http/feedback.service';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from '@core/models/feedback.model';

@Component({
  selector: 'app-roadmap-detail',
  templateUrl: './roadmap-detail.component.html',
  styleUrls: ['./roadmap-detail.component.scss']
})
export class RoadmapDetailComponent implements OnInit {
  category: string | null = 'all';
  feedbacks$!: Observable<Feedback[]>
  constructor(private location: Location, private feedbacks: FeedbackService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.feedbacks$ = this.category !== 'all' ? this.getFeedbacksFiltered(this.category) : this.feedbacks.getFeedbackList();
  }

  goBack() {
    this.location.back();
  }

  feebacksByStatus(status: string) {
      return this.feedbacks$.pipe(map(feedbacks => feedbacks.filter(feedback => feedback.status === status)));
  }

  private getFeedbacksFiltered(category: string | null): Observable<Feedback[]> {
    return this.feedbacks
        .getFeedbackList()
        .pipe(map((feedbacks: Feedback[]) => feedbacks.filter((feedback: Feedback) => feedback.category === category)));
  }
}
