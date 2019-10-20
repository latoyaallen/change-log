import formatDate from './formatDate'

it('replaces dashes with an empty string', () => {
  const content = "-HBO-" ;
  expect(formatDate(content)).toEqual(" HBO ");
});

it('replaces # with an empty string', () => {
  const content = "#SHOWTIME" ;
  expect(formatDate(content)).toEqual(" SHOWTIME");
});

it('gives uppercase string', () => {
  const content = "Showtime" ;
  expect(formatDate(content)).toEqual("SHOWTIME");
});
