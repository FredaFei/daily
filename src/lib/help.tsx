export function isNumber(value: string | number) {
  return /[0-9]+/.test(value.toString());
}