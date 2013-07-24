define(function(require) {
  var DateTime = require('../DateTime')
  var DateFormat = require('../DateFormat')
  return {
    id             : 'DE',
    monthNames     : ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    dayNames       : [ 'Sontag' ,' Montag' ,' Dienstag' ,' Mittwoch' ,' Donnerstag' ,' Freitag' ,' Samstag'],
    shortDayNames  : ['So' ,' Mo' ,' Di' ,' Mi' ,' Do' ,' Fr' ,' Sa'],
    yearsLabel     : function(years) { return years + ' ' + (years == '1' ? 'Year' : 'Years'); },
    monthsLabel    : function(months) { return months + ' ' + (months == '1' ? 'Months' : 'Months') },
    daysLabel      : function(days) { return days + ' ' + (days == '1' ? 'Day' : 'Days') },
    hoursLabel     : function(hours, minutes) {
      var hoursAndMinutes = DateFormat.hoursAndMinutes(hours, minutes)
      return hoursAndMinutes + ' ' + (hoursAndMinutes == '1' ? 'Hour' : 'Hours')
    },
    shortDateFormat: 'j.n.Y',
    weekDateFormat : 'D j.n.Y',
    dateTimeFormat : 'D j.n.Y k\\lo G:i',
    firstWeekday   : DateTime.MONDAY
  }
})
