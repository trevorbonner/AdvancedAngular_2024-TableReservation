import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import { TestService } from '../core/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService)
  {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onClick()
  {
    this.testService.myObservable().subscribe(
      value => alert(value)
    );
  }
}
