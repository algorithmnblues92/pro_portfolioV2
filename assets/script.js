 //////////////////////////////////////////////////////////////////
 //border effect
 //////////////////////////////////////////////////////////////////
 var rgbChanger = document.getElementById("borderContainer");
 var counter = 0;
 var rgb = 0;

 var testArray2 = [];

for (d=0; d<20; d++) {
for (x=0; x<42;x++) {
 // console.log(Math.ceil(8.57 * x));
 testArray2.push(Math.ceil(8.57 * x));
}
}
console.log(testArray2);

 var rgbInterval = setInterval(function() {

 // console.log("rgb looped for border");
 counter++;

 rgbChanger.style.backgroundImage = "conic-gradient(at 105% 5%, red " + testArray2[rgb] +"deg, orange " + testArray2[rgb + 1] +"deg, yellow " + testArray2[rgb + 2] +"deg, green " + testArray2[rgb + 3] +"deg, blue " + testArray2[rgb + 4] +"deg, indigo " + testArray2[rgb + 5] +"deg, violet " + testArray2[rgb +6] +"deg, red " + testArray2[rgb + 7] +"deg, orange " + testArray2[rgb + 8] +"deg, yellow " + testArray2[rgb + 9] +"deg, green " + testArray2[rgb + 10] +"deg, blue " + testArray2[rgb + 11] +"deg, indigo " + testArray2[rgb + 12] +"deg, violet " + testArray2[rgb +13] +"deg, red " + testArray2[rgb + 14] +"deg, orange " + testArray2[rgb + 15] +"deg, yellow " + testArray2[rgb + 16] +"deg, green " + testArray2[rgb + 17] +"deg, blue " + testArray2[rgb + 18] +"deg, indigo " + testArray2[rgb + 19] +"deg, violet " + testArray2[rgb + 20] +"deg, red " + testArray2[rgb + 21] +"deg, orange " + testArray2[rgb + 22] +"deg, yellow " + testArray2[rgb + 23] +"deg, green " + testArray2[rgb + 24] +"deg, blue " + testArray2[rgb + 25] +"deg, indigo " + testArray2[rgb + 26] +"deg, violet " + testArray2[rgb +27] +"deg, red " + testArray2[rgb + 28] +"deg, orange " + testArray2[rgb + 29] +"deg, yellow " + testArray2[rgb + 30] +"deg, green " + testArray2[rgb + 31] +"deg, blue " + testArray2[rgb + 32] +"deg, indigo " + testArray2[rgb + 33] +"deg, violet " + testArray2[rgb + 34] +"deg, red " + testArray2[rgb + 35] +"deg, orange " + testArray2[rgb + 36] +"deg, yellow " + testArray2[rgb + 37] +"deg, green " + testArray2[rgb + 38] +"deg, blue " + testArray2[rgb + 39] +"deg, indigo " + testArray2[rgb + 40] +"deg, violet " + testArray2[rgb + 41] +"deg, red " + testArray2[rgb + 42] +"deg)"

 rgb++;
 

 if (rgb == 9) {
  rgb = 0;
  counter =0;
 }

}, 200);

/////////////////////////////////////////////////////////////////
// for the B Logo
/////////////////////////////////////////////////////////////////

var rgbChanger2 = document.getElementById("rgbLogo");
 var counter2 = 0;
 var rgb2 = 0;

 var rgbArray2 = []

for (d=0; d<20; d++) {
for (x=0; x<42;x++) {
 // console.log(Math.ceil(8.57 * x));
 rgbArray2.push(Math.ceil(8.57 * x));
}
}
// console.log(rgbArray2);

 var rgbInterval = setInterval(function() {

 // console.log("rgb looped for logo");
 counter2++;

 rgbChanger2.style.backgroundImage = "conic-gradient(at 105% 5%, red " + rgbArray2[rgb2] +"deg, orange " + rgbArray2[rgb2 + 1] +"deg, yellow " + rgbArray2[rgb2 + 2] +"deg, green " + rgbArray2[rgb2 + 3] +"deg, blue " + rgbArray2[rgb2 + 4] +"deg, indigo " + rgbArray2[rgb2 + 5] +"deg, violet " + rgbArray2[rgb2 +6] +"deg, red " + rgbArray2[rgb2 + 7] +"deg, orange " + rgbArray2[rgb2 + 8] +"deg, yellow " + rgbArray2[rgb2 + 9] +"deg, green " + rgbArray2[rgb2 + 10] +"deg, blue " + rgbArray2[rgb2 + 11] +"deg, indigo " + rgbArray2[rgb2 + 12] +"deg, violet " + rgbArray2[rgb2 +13] +"deg, red " + rgbArray2[rgb2 + 14] +"deg, orange " + rgbArray2[rgb2 + 15] +"deg, yellow " + rgbArray2[rgb2 + 16] +"deg, green " + rgbArray2[rgb2 + 17] +"deg, blue " + rgbArray2[rgb2 + 18] +"deg, indigo " + rgbArray2[rgb2 + 19] +"deg, violet " + rgbArray2[rgb2 + 20] +"deg, red " + rgbArray2[rgb2 + 21] +"deg, orange " + rgbArray2[rgb2 + 22] +"deg, yellow " + rgbArray2[rgb2 + 23] +"deg, green " + rgbArray2[rgb2 + 24] +"deg, blue " + rgbArray2[rgb2 + 25] +"deg, indigo " + rgbArray2[rgb2 + 26] +"deg, violet " + rgbArray2[rgb2 +27] +"deg, red " + rgbArray2[rgb2 + 28] +"deg, orange " + rgbArray2[rgb2 + 29] +"deg, yellow " + rgbArray2[rgb2 + 30] +"deg, green " + rgbArray2[rgb2 + 31] +"deg, blue " + rgbArray2[rgb2 + 32] +"deg, indigo " + rgbArray2[rgb2 + 33] +"deg, violet " + rgbArray2[rgb2 + 34] +"deg, red " + rgbArray2[rgb2 + 35] +"deg, orange " + rgbArray2[rgb2 + 36] +"deg, yellow " + rgbArray2[rgb2 + 37] +"deg, green " + rgbArray2[rgb2 + 38] +"deg, blue " + rgbArray2[rgb2 + 39] +"deg, indigo " + rgbArray2[rgb2 + 40] +"deg, violet " + rgbArray2[rgb2 + 41] +"deg, red " + rgbArray2[rgb2 + 42] +"deg)"

 rgb2++;
 

 if (rgb2 == 9) {
  rgb2 = 0;
  counter2 =0;
 }

}, 200);


//going to make a fast function then learn coords so i can spawn in a travel path and kirby running from portal to portal
var travelArray = [];
var startingV = 10;
var startingVplusMovement = 0;
var counter3 = 0;
for(s=0;s<80;s++) {
startingVplusMovement = s * 10 + startingV;
travelArray.push(startingVplusMovement);
}

// console.log(travelArray)

var tp1 = document.getElementById("portalDiv1").getBoundingClientRect();
var tp2 = document.getElementById("portalDiv2").getBoundingClientRect();

// console.log(JSON.stringify(tp2));

kirbySprite = document.getElementById("kirby");
kirbySpriteCoords = document.getElementById("kirby").getBoundingClientRect();
// kirbySprite.style.top = tp2.top + "px";
// kirbySprite.style.left = tp2.left + "px";

// console.log(tp2.left);
// console.log(tp2.top);


var kirbyRun = setInterval( function() {

// kirbySprite.style.left = travelArray[counter3] + "px";
kirbySprite.style.left = (tp1.left + (counter3 * 8.57)) + "px";
counter3++
kirbySpriteCoords = document.getElementById("kirby").getBoundingClientRect();
tp2 = document.getElementById("portalDiv2").getBoundingClientRect();
 console.log("kirby x coord :" + kirbySpriteCoords.left);
 console.log("tp2 x coord :" + tp2.left)

if (kirbySpriteCoords.left > (tp2.left + 10)) {
 counter3 = 0;
}

}, 200);

// now to make javascript games loool
// im going to make some troll ass games

// var tp2 = document.getElementById("travelPath").getBoundingClientRect();

// console.log(JSON.stringify(tp2));

//*******************************************************************************/
//making javascript game engine
//set interval for all elements on page and reference position every .1 seconds
//create array for all coords within a square for every object and have intervals that
//check whether or not main character is positioned over it every 2 seconds (or whatever) most likely going to be interval full of if statements like a 5 by 5 pixel square would have interval with 25 if statements
//add eventlisteners for movement wasd
//find out how to create a static container that doesn't move any elements around regardless of browser moving or resizing
//projectiles that check every coord as it passes throughto see whether or not they connect
//once i make rough draft ill be able to have a js file that creates a js file with all the positions and setIntervals and if statements being dynamically generated into it with for loops for all the objects to give them functionality
//