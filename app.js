// Write our JavaScript in here
var pics = [
	"imgs/cat_1.jpg", //0
	"imgs/cat_2.jpg", //1
	"imgs/cat_3.jpg", //2
	"imgs/cat_4.jpg", //3
	"imgs/cat_5.jpg", //4
	"imgs/cat_6.jpg"  //5
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 6){
		counter = 0;
	}
	img.src = pics[counter];
	counter = counter + 1;
});