let talk = function() {
  console.log(this.sound);
}

let boromir = {
  blabber: talk,
  sound: 'One does not...'
}

let gollum = {
  jabber: boromir.blabber,
  sound: 'My preciousss'
}

boromir.blabber(); // One does not...
gollum.jabber(); // My preciousss