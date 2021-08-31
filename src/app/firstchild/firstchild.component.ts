import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css'],
  providers: [DataService]
})
export class FirstchildComponent implements OnInit {
  name = 'Neha';
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.setData(220);
  }
}
