function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while(new Date() < ms) { }
  console.log('Finished function');
}

function clickHandler() {
  console.log('Click event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('Finished execution');

var a = 100 + new Date().getTime();
while(new Date() < a) {
  console.log('running...');
}
