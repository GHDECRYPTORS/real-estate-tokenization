export function ellipsify(str: any, maxLength: any) {
  maxLength = maxLength || 10;
  if (maxLength % 2 !== 0) {
    maxLength++;
  }
  if (str.length <= maxLength) {
    return str;
  }
  // Get first four and last four characters
  const first = str.substring(0, Math.floor(maxLength / 2));
  const last = str.substring(str.length - Math.ceil(maxLength / 2));
  return `${first}...${last}`;
}
