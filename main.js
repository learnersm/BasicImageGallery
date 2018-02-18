var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

var basePath = "images/pic";
/* Looping through images */
for(i = 1; i<=5; i++)
{  
	var newImage = document.createElement('img');
	newImage.setAttribute('src', basePath + i + '.jpg');
	newImage.setAttribute('id', i);
	newImage.addEventListener('click', setMainImage);
	thumbBar.appendChild(newImage);
}

/* Function to change main image */
function setMainImage(e) {
	var i = e.target.getAttribute("id");
	newImagePath = basePath + i + '.jpg';
	displayedImage.setAttribute('src', newImagePath);
}

/* Wiring up the Darken/Lighten button */
function toggleState(e){
	var presentState = btn.getAttribute("class");
	if(presentState === "dark") {
		console.log(true);
		e.target.setAttribute('class','light');
		overlay.style.backgroundColor =  "rgba(0,0,0,0.4)";
		e.target.textContent = "Lighten";
	} else {
		e.target.setAttribute('class','dark');
		overlay.style.backgroundColor =  "rgba(0,0,0,0.0)";
		e.target.textContent = "Darken";
	}
}

btn.addEventListener('click',toggleState);