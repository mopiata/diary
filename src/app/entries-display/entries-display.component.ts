import { Component, OnInit, Input } from '@angular/core';
import { Diary } from "../diary";

@Component({
  selector: 'app-entries-display',
  templateUrl: './entries-display.component.html',
  styleUrls: ['./entries-display.component.css']
})
export class EntriesDisplayComponent implements OnInit {

  @Input() entry:Diary;

  constructor() { }

  ngOnInit() {
  }

}
