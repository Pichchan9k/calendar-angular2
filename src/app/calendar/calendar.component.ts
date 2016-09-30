import { Component, OnInit, Input } from '@angular/core';

import { CalendarEvent } from './calendar-event'

const MONTH = {
  MAX_DATES :[31,29,31,30,31,30,31,30,30,31,30,31],
  MONTH_NAMES:["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ]
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input('day')
  nowDate:Date
  sqlDate:string
  firstDay:number
  date_name:string
  current_day:number
  current_month:number
  current_month_name:string
  current_year:number
  days:Array<number>
  space_days:Array<any>

  events:Array<CalendarEvent>
  constructor() { 
    this.events = [
      new CalendarEvent(new Date("2016-09-21"),new Date("2016-09-23"),"Thailand","stay in thailand"),
      new CalendarEvent(new Date("2016-09-25"),new Date("2016-09-28"),"Maleysia","go to malaysia")
    ]
  }

  ngOnInit() {
    if(!this.nowDate)
      this.nowDate = new Date()

    this.date_name = this.nowDate.toISOString().substring(0,10) //like 2016-09-30
    this.sqlDate =  this.nowDate.toISOString().substring(0, 8) + "01"
    this.firstDay = new Date(this.sqlDate).getDay()
    this.current_day = this.nowDate.getDate()
    this.current_month = this.nowDate.getMonth()
    this.days = []

    for (let i = 1; i <= MONTH.MAX_DATES[this.current_month]; i++)
      this.days.push(i)
      
    this.space_days = []

    for (let i = 1; i <= this.nowDate.getDay(); i++)
      this.space_days.push("")

    this.current_month_name = MONTH.MONTH_NAMES[this.current_month]
    this.current_year = this.nowDate.getFullYear()
    
  }

}
