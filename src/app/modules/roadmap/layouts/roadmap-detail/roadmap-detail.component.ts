import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { map } from 'rxjs';
import { FeedbackService } from '@core/http/feedback.service';

@Component({
  selector: 'app-roadmap-detail',
  templateUrl: './roadmap-detail.component.html',
  styleUrls: ['./roadmap-detail.component.scss']
})
export class RoadmapDetailComponent  {

  constructor(private location: Location, private feedbacks: FeedbackService) {}

    back() {
        this.location.back();
    }

    feebacksByStatus(status: string) {
      return this.feedbacks.getFeedbackList().pipe(map(feedbacks => feedbacks.filter(feedback => feedback.status === status)));
  }

}
