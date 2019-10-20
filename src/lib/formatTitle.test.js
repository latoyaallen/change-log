import formatTitle from './formatTitle'

it('replaces dashes with an empty string', () => {
  const content = "-HBO-" ;
  expect(formatTitle(content)).toEqual(" HBO ");
});

it('replaces # with an empty string', () => {
  const content = "#SHOWTIME" ;
  expect(formatTitle(content)).toEqual(" SHOWTIME");
});

it('gives uppercase string', () => {
  const content = "Showtime" ;
  expect(formatTitle(content)).toEqual("SHOWTIME");
});
