
// var super_date_controller = moment();
// var new_super_date_controller_calc;
// var event_date = super_date_controller.format("YYYY-MM-DD");
// var event_output;
// var filtered_events_for_current_event_date;

// update_display_ui();
// update_event_ui();

// function move_back_seven_days() {

//   // Calculate previous day relative to super_date_controller
//   new_super_date_controller_calc = super_date_controller.subtract( 7, 'day');

//   update_global_super_date_controller();
//   update_display_ui();
// }

// function move_back_one_day() {

//   // Calculate previous day relative to super_date_controller
//   new_super_date_controller_calc = super_date_controller.subtract( 1, 'day');

//   update_global_super_date_controller();
//   update_display_ui();
// }

// function move_forward_one_day() {

//   // Calculate next day relative to super_date_controller
//   new_super_date_controller_calc = super_date_controller.add( 1, 'day');

//   update_global_super_date_controller();
//   update_display_ui();
// }

// function move_forward_seven_days() {

//   // Calculate next day relative to super_date_controller
//   new_super_date_controller_calc = super_date_controller.add( 7, 'day');

//   update_global_super_date_controller();
//   update_display_ui();
// }

// function update_global_super_date_controller() {

//   // Update super_date_controller with new set day
//   this.super_date_controller = new_super_date_controller_calc;
//   this.event_date = super_date_controller.format("YYYY-MM-DD");
// }

// function update_display_ui() {

//   // Update display
//   document.getElementById("current_day").innerHTML = super_date_controller.format('dddd');
//   document.getElementById("current_date_sub").innerHTML = super_date_controller.format("Do MMM YYYY");

//   update_event_ui();
// }

// function update_event_ui() {

//   var json_events = [{ "date": "2020-04-26", "title": "Doe", "description": "This bla bla bla bla Day" }, { "date": "2020-04-27", "title": "Smith", "description": "This bla bla bla bla Day" }, { "date": "2020-04-28", "title": "Jones", "description": "This bla bla bla bla Day" }];

//   filtered_events_for_current_event_date = $(json_events).filter( function (i,n) { return n.date === event_date } );
//   // console.log( filtered_events_for_current_event_date );

//   if ( filtered_events_for_current_event_date.length > 0 ) {

//     for (var i = 0; i < filtered_events_for_current_event_date.length; i++) {
//       event_output = '<li class="event">' + filtered_events_for_current_event_date[i].title + ':' + filtered_events_for_current_event_date[i].description + '</li>';
//     }
//   } else {
//     event_output = '<li class="event">No event for this day :(</li>';

//   }

//   document.getElementsByClassName('event_wrapper')[0].innerHTML = event_output;
// }
