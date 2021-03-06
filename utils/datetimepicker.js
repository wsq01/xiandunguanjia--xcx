function withData(param) {
  return param < 10 ? '0' + param : '' + param;
}
function getLoopArray(start, end) {
  var start = start || 0;
  var end = end || 1;
  var array = [];
  for (var i = start; i <= end; i++) {
    array.push(withData(i));
  }
  return array;
}
function getMonthDay(year, month) {
  var flag = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0), array = null;

  switch (month) {
    case '01':
    case '03':
    case '05':
    case '07':
    case '08':
    case '10':
    case '12':
      array = getLoopArray(1, 31)
      break;
    case '04':
    case '06':
    case '09':
    case '11':
      array = getLoopArray(1, 30)
      break;
    case '02':
      array = flag ? getLoopArray(1, 29) : getLoopArray(1, 28)
      break;
    default:
      array = '月份格式不正确，请重新输入！'
  }
  return array;
}
function getNewDateArry() {
  // 当前时间的处理
  var newDate = new Date();
  var year = withData(newDate.getFullYear()),
    mont = withData(newDate.getMonth() + 1),
    date = withData(newDate.getDate()),
    hour = withData(newDate.getHours()),
    minu = withData(newDate.getMinutes()),
    seco = withData(newDate.getSeconds());
  return [year, mont, date, hour, minu, seco];
}
function getMyDateArry(date) {
  // 当前时间的处理
  var newDate = new Date(date);
  var year = withData(newDate.getFullYear()),
    mont = withData(newDate.getMonth() + 1),
    date = withData(newDate.getDate()),
    hour = withData(newDate.getHours()),
    minu = withData(newDate.getMinutes()),
    seco = withData(newDate.getSeconds());
  return [year, mont, date, hour, minu, seco];
}
function dateTimePicker(startYear, endYear, date, date2) {
  // 返回默认显示的数组和联动数组的声明
  var dateTime1 = [], dateTimeArray1 = [[], [], [], [], []];
  var dateTime2 = [], dateTimeArray2 = [[], [], [], [], []];
  var start = startYear || 2020;
  var end = endYear || 2030;
  // 默认开始显示数据
  var defaultDate = date ? date : getNewDateArry();
  var defaultDate2 = date2 ? date2 : getNewDateArry();
  // 处理联动列表数据
  /*年月日 时分秒*/
  dateTimeArray1[0] = getLoopArray(start, end);
  dateTimeArray1[1] = getLoopArray(1, 12);
  dateTimeArray1[2] = getMonthDay(defaultDate[0], defaultDate[1]);
  dateTimeArray1[3] = getLoopArray(0, 23);
  dateTimeArray1[4] = getLoopArray(0, 59);
  // dateTimeArray1[5] = getLoopArray(0, 59);

  dateTimeArray1.forEach((current, index) => {
    dateTime1.push(current.indexOf(defaultDate[index]));
  });
  dateTimeArray2[0] = getLoopArray(start, end);
  dateTimeArray2[1] = getLoopArray(1, 12);
  dateTimeArray2[2] = getMonthDay(defaultDate[0], defaultDate[1]);
  dateTimeArray2[3] = getLoopArray(0, 23);
  dateTimeArray2[4] = getLoopArray(0, 59);
  // dateTimeArray2[5] = getLoopArray(0, 59);

  dateTimeArray2.forEach((current, index) => {
    dateTime2.push(current.indexOf(defaultDate2[index]));
  });

  return {
    dateTimeArray1: dateTimeArray1,
    dateTime1: dateTime1,
    dateTimeArray2: dateTimeArray2,
    dateTime2: dateTime2
  }
}
function dateTimePickerWithS(startYear, endYear, date, date2) {
  // 返回默认显示的数组和联动数组的声明
  var dateTime1 = [], dateTimeArray1 = [[], [], [], [], [], []];
  var dateTime2 = [], dateTimeArray2 = [[], [], [], [], [], []];
  var start = startYear || 2020;
  var end = endYear || 2030;
  // 默认开始显示数据
  var defaultDate = date ? date : getNewDateArry();
  var defaultDate2 = date2 ? date2 : getNewDateArry();
  // 处理联动列表数据
  /*年月日 时分秒*/
  dateTimeArray1[0] = getLoopArray(start, end);
  dateTimeArray1[1] = getLoopArray(1, 12);
  dateTimeArray1[2] = getMonthDay(defaultDate[0], defaultDate[1]);
  dateTimeArray1[3] = getLoopArray(0, 23);
  dateTimeArray1[4] = getLoopArray(0, 59);
  dateTimeArray1[5] = getLoopArray(0, 59);

  dateTimeArray1.forEach((current, index) => {
    dateTime1.push(current.indexOf(defaultDate[index]));
  });
  dateTimeArray2[0] = getLoopArray(start, end);
  dateTimeArray2[1] = getLoopArray(1, 12);
  dateTimeArray2[2] = getMonthDay(defaultDate[0], defaultDate[1]);
  dateTimeArray2[3] = getLoopArray(0, 23);
  dateTimeArray2[4] = getLoopArray(0, 59);
  dateTimeArray2[5] = getLoopArray(0, 59);

  dateTimeArray2.forEach((current, index) => {
    dateTime2.push(current.indexOf(defaultDate2[index]));
  });

  return {
    dateTimeArray1: dateTimeArray1,
    dateTime1: dateTime1,
    dateTimeArray2: dateTimeArray2,
    dateTime2: dateTime2
  }
}
export {
  dateTimePicker,
  dateTimePickerWithS,
  getMonthDay,
  getMyDateArry
}