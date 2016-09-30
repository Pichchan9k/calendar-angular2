import { Pipe, PipeTransform } from '@angular/core';

import { CalendarComponent } from './calendar/calendar.component';
import { CalendarEvent } from './calendar/calendar-event'

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {
  
  events:Array<CalendarEvent>
  transform(current_day:any, events?: any): any {
    console.log(current_day)
     return current_day
  }

}
