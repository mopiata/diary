import { Component, OnInit, ViewChild } from '@angular/core';
import { Diary } from "../diary";

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  
  @ViewChild('diaryForm') formValues;

  newEntry= new Diary(0,"","",new Date());
  entries=[];
  
  constructor() { }

  ngOnInit() {
  }

  entryAdd(){
    let entriesLength = this.entries.length;

    var id = entriesLength + 1;
    var heading = this.newEntry.heading;
    var entry = this.newEntry.entry ;
    var date = this.newEntry.date;
    
    this.entries.push(new Diary(id, heading, entry, date));

    this.formValues.resetForm();
    
  }

}
