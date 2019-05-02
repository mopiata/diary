import { Component, OnInit, Input } from '@angular/core';
import { Diary } from "../diary";

@Component({
  selector: 'app-entries-display',
  templateUrl: './entries-display.component.html',
  styleUrls: ['./entries-display.component.css']
})
export class EntriesDisplayComponent implements OnInit {

  @Input() entries:Diary[];  

  constructor() { }

  ngOnInit() {
    console.log(this.entries);
  }
  entryDelete(toDelete:boolean, index){
    toDelete=confirm(`Are you sure you want to delete ${this.entries[index].name}`);

    if(toDelete){
      this.entries.splice(index,1);
    }
  }

}
