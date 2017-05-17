import { Component, OnInit, Input } from '@angular/core';

import { Log } from '../shared/models/log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
 @Input() logs: Log[];
  constructor() { }

  ngOnInit() {
  }

}
