export default () => {
  let year = (new Date).getFullYear(),
      startYear = '2005'
  if (year == startYear) {
    $('.year').text(year)
  }
  else {
    $('.year').text(startYear + '–' + year)
  };
}