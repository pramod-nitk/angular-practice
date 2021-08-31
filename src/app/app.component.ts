import {
  AfterViewInit,
  Component,
  OnInit,
  VERSION,
  ViewChild
} from '@angular/core';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  // other way to connect to communication
  @ViewChild('ref') firstChild: FirstchildComponent;
  childName: String = '';

  // for pipe transformation
  str = 'Trucate this string to fixed length given';

  name = 'Angular ' + VERSION.major;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.updateData();
  }
  ngAfterViewInit(): void {
    this.updateName();
  }

  updateData() {
    this.dataService.setData(20);
  }

  updateName() {
    this.childName = this.firstChild.name;
    this.firstChild.name = 'Priyanka';
  }
}
