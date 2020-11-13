var startTimeISOString = "2013-03-10T02:00:00Z";
var startTime = new Date(startTimeISOString);
var tzoffset = (new Date()).getTimezoneOffset() * 60000;
var localISOTime = (new Date(startTime - tzoffset)).toISOString().slice(0, -1);
console.log(localISOTime);