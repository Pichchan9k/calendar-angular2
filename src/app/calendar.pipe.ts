import { Pipe, PipeTransform } from '@angular/core';

import { CalendarComponent } from './calendar/calendar.component';

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  transform(current_day:any, events?:any): any {
    return current_day
  }

}
