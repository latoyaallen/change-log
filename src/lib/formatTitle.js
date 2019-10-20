const formatTitle = (title) => {
  var cleanTitle = title;
  cleanTitle = cleanTitle.replace(/#/g, " ");
  cleanTitle = cleanTitle.replace(/-/g, " ");
  cleanTitle = cleanTitle.toUpperCase();
  return cleanTitle;
}

export default formatTitle;
