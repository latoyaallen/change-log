const formatDate = (date) => {
  var cleanDate = date;
  cleanDate = cleanDate.replace(/#/g, " ");
  cleanDate = cleanDate.replace(/-/g, " ");
  cleanDate = cleanDate.toUpperCase();
  return cleanDate;
}

export default formatDate;
