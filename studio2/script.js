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
  paragraph.innerHTML = 'I like to travel! This image is from a hiking trail in Arcata, CA.';
});

laptop.addEventListener('click',function(){
  paragraph.innerHTML = 'My laptop is a MacBook Pro 2016 edition. I always use it to research places to go to!';
});

bench.addEventListener('click',function(){
  paragraph.innerHTML = 'Sit with me (:';
});

phone.addEventListener('click',function(){
  paragraph.innerHTML = 'My phone is a Samsung Note 5. I used it to navigate where I go because I am bad with directions.';
});

charger.addEventListener('click',function(){
  paragraph.innerHTML = 'Recently my battery has been draining faster than usual. To prevent any unconveniences, Anker chargers are fast charging and reliable!';
});

deer.addEventListener('click',function(){
  paragraph.innerHTML = 'I love animals. This is my first time I encountered a deer! So rare to be so close to wildlife.';
});
