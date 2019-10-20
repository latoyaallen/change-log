import formatContent from './formatContent'

it('replaces both open and closing p tags with an empty string', () => {
  const content = "<p>HBO</p>" ;
  expect(formatContent(content)).toEqual(" HBO ");
});

it('gives string passed as arg when no p tags found', () => {
  const content = "Showtime" ;
  expect(formatContent(content)).toEqual("Showtime");
});
