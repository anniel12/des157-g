'use strict';
console.log('reading js');

var banner = document.querySelector('#banner');
var laptop = document.querySelector('#laptop');
var bench = document.querySelector('#bench');

var phone = document.querySelector('#phone');
var charger = document.querySelector('#charger');
var deer = document.querySelector('#deer');
var paragraph = document.querySelector('#paragraph');

banner.addEventListener('click',function(){
  paragraph.innerHTML = 'I like to travel!';
});

laptop.addEventListener('click',function(){
  paragraph.innerHTML = 'I always use my laptop to do research on places to go to!';
});

bench.addEventListener('click',function(){
  paragraph.innerHTML = 'Sit with me (:';
});

phone.addEventListener('click',function(){
  paragraph.innerHTML = 'I used my phone to navigate where I go cause I am bad with directions.';
});

charger.addEventListener('click',function(){
  paragraph.innerHTML = 'Just in case my phone is out of battery. Anker chargers are reliable!';
});

deer.addEventListener('click',function(){
  paragraph.innerHTML = 'First time I encountered a deer!';
});
