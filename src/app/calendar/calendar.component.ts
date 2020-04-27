import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  // tslint:disable: variable-name
  super_date_controller: any;
  new_super_date_controller_calc: any;
  event_date: any;
  event_output: any;
  filtered_events_for_current_event_date: any;

  json_events: any[];

  current_day: any;
  current_date_sub: any;
  event_wrapper: any;

  constructor() { }

  ngOnInit() {

    // On component initialise set the controller time to now.
    this.super_date_controller = moment();
    this.event_date = this.super_date_controller.format('YYYY-MM-DD');

    // Update the display UI & event UI on initialise
    this.update_display_ui();
    this.update_event_ui();
  }

  move_back_seven_days() {

    // Calculate previous day relative to super_date_controller
    this.new_super_date_controller_calc = this.super_date_controller.subtract( 7, 'day');

    this.update_global_super_date_controller();
    this.update_display_ui();
  }

  move_back_one_day() {

    // Calculate previous day relative to super_date_controller
    this.new_super_date_controller_calc = this.super_date_controller.subtract( 1, 'day');

    this.update_global_super_date_controller();
    this.update_display_ui();
  }

  move_forward_one_day() {

    // Calculate next day relative to super_date_controller
    this.new_super_date_controller_calc = this.super_date_controller.add( 1, 'day');

    this.update_global_super_date_controller();
    this.update_display_ui();
  }

  move_forward_seven_days() {

    // Calculate next day relative to super_date_controller
    this.new_super_date_controller_calc = this.super_date_controller.add( 7, 'day');

    this.update_global_super_date_controller();
    this.update_display_ui();
  }

  update_global_super_date_controller() {

    // Update super_date_controller with new set day
    this.super_date_controller = this.new_super_date_controller_calc;
    this.event_date = this.super_date_controller.format('YYYY-MM-DD');
  }

  update_display_ui() {

    // Update display
    this.current_day = this.super_date_controller.format('dddd');
    this.current_date_sub = this.super_date_controller.format('Do MMM YYYY');

    this.update_event_ui();
  }

  update_event_ui() {

    // tslint:disable: object-literal-key-quotes
    // tslint:disable: max-line-length
    this.json_events = [
      { 'date': '2020-04-26', 'title': 'Lockdown Day 4', 'description': 'This bla bla bla bla Day' },
      { 'date': '2020-04-27', 'title': 'Lockdown Day 5', 'description': 'This bla bla bla bla Day' },
      { 'date': '2020-04-28', 'title': 'Lockdown day 6', 'description': 'This bla bla bla bla Day' }
    ];

    // tslint:disable-next-line: space-before-function-paren
    this.filtered_events_for_current_event_date = this.json_events.filter( json_events => json_events.date === this.event_date );
    // console.log( this.filtered_events_for_current_event_date );

    if ( this.filtered_events_for_current_event_date.length > 0 ) {

      this.event_output = this.filtered_events_for_current_event_date;
    } else {

      this.event_output = false;
    }

    this.event_wrapper = this.event_output;
  }

}
