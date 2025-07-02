function clearDisplay() {
  const display = document.querySelector('#display');
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
}
export {clearDisplay};