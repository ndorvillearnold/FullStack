function isLeap(year) {
    if (year % 4 === 0 || year % 400 === 0) {
      console.log(' leap year');
    } else if (year % 100 === 0) {
      cosole.log(' not a leap year');
    } else {
      console.log('def not a leap year');
    }
  }
  //test 2024, 2028, 2032, and 2036 are all leap years.
  isLeap(2023);
  