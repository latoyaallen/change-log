const formatContent = (content) => {
  var cleanContent = content;
  cleanContent = cleanContent.replace(/<p>/g, " ");
  cleanContent = cleanContent.replace(/<\/p>/g, " ");
  return cleanContent;
}

export default formatContent;
