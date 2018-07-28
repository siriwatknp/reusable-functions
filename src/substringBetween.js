export default (string, startPattern, endPattern) => {
  if (!string) {
    return '';
  }
  const startIndex = string.lastIndexOf(startPattern) + startPattern.length;
  const substring = string.substring(startIndex);
  const endIndex = substring.indexOf(endPattern);
  return string.substr(startIndex, endIndex);
};
