function timestampTransaction () {
  var today = new Date();
  var dd = today.getDay();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd='0'+dd
  }
  if(mm<10) {
      mm='0'+mm
  }
  today = mm+'/'+dd+'/'+yyyy;
  return today;
}
