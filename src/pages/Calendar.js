import React from 'react'

const Calendar = () => {
   return (
      <div className="calendarContainar container">
      <h2>CA<span>LE</span>N<span>DA</span>R</h2>
      <iframe className="calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=YmpvbW8yN2RqZjVkMThtaDhpN2R2cDY1ZTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D81B60&amp;showTz=0&amp;showCalendars=0&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0"></iframe>
      </div>
   )
}

export default Calendar
