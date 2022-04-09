import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  @Input() title: string = "";
  @Input() linkLabel: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
