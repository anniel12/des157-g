'use strict';

document.querySelector('#submit').addEventListener('click', processForm);

function processForm(evt) {

  var name = document.querySelector('#name').value;

  var tea = document.querySelector('#tea').value;

  var milk = document.querySelector('#milk').value;

  var toppings = document.querySelector('#toppings').value;

  var sweet = document.querySelector('#sweet').value;

  var ice = document.querySelector('#ice').value;



  var myMsg = document.querySelector('#myMsg');

  myMsg.innerHTML = 'Hello ' + name + '!' + ' You ordered ' + tea + ' tea, with ' + milk + ' and ' + toppings + '. ' + sweet + ' sweetness and ' + ice + ' ice.'

   evt.preventDefault();
}
