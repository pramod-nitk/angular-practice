import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.setData(120);
  }
}
