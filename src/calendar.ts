import { Component, Input, Inject, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import { Options } from "fullcalendar-scheduler";

@Component({
  template: '<div></div>',
  selector: 'ng2-fullcalendar-scheduler'
})
export class CalendarComponent implements AfterViewInit {
  @Input() options : Options;
  public el : ElementRef;

  constructor(@Inject(ElementRef) el : ElementRef) {
    this.el = el;
  }

  ngAfterViewInit() {
    $(this.el.nativeElement).fullCalendar(this.options);
  }

  fullCalendar(...args) {
    $(this.el.nativeElement).fullCalendar.apply($(this.el.nativeElement), args) // Passing n-arguments along. 
  }
}
