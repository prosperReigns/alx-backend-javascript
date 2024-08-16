export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  let result = '';
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      let slicedString = element.slice(startString.length);
      result += `${slicedString}-`;
    }
  });

  // Remove trailing hyphen if present
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
