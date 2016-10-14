export class CalendarEvent{
    from:Date
    to:Date
    subject:string
    detail:string

    constructor(from:Date,to:Date,subject:string,detail:string){
            this.from = from
            this.to = to
            this.subject = subject
            this.detail = detail
    }
}