const formatToPascalCase = (string) => {
  return string.replace(
    /(\w)(\w*)/g,
    (_, g1, g2) => { return g1.toUpperCase() + g2.toLowerCase(); }
  );
}

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);

}

const camelCaseToWords = (string) => {
  const result = string.replace(/([A-Z])/g, ' $1')
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export {
  formatToPascalCase,
  capitalize,
  camelCaseToWords
}
