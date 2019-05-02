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
  entries = [new Diary(0, "Test", "Testing", new Date(2018, 3, 14))];
  
  constructor() { }

  ngOnInit() {
  }

  entryAdd(){
    let entriesLength = this.entries.length;

    var id = entriesLength + 1;
    var heading = this.newEntry.heading;
    var entry = this.newEntry.entry ;
    var date = this.newEntry.date;
    var test=new Diary(id, heading, entry, date)
    
    this.entries.push(new Diary(id, heading, entry, date));
    console.log(this.entries);
    this.formValues.resetForm();
    
  }

}
