import { Component, Input, Inject, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import { Options } from "fullcalendar-scheduler";

@Component({
  template: '<div></div>',
  selector: 'angular2-fullcalendar'
})
export class CalendarComponent implements AfterViewInit {
  @Input() options : Options;
  el : ElementRef;

  constructor(@Inject(ElementRef) el : ElementRef) {
    this.el = el;
  }

  ngAfterViewInit() {
    $(this.el.nativeElement).fullCalendar(this.options);
  }
}
