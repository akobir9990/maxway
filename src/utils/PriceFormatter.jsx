export function priceFormatter(num) {
  let res = num
    .toString()
    .slice("")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  return res;
}
