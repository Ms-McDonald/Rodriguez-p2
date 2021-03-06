// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();


// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

animate();

var mLastFrameTime = 0;
var mWaitTime = 5000; //time in ms
function animate() {
    requestAnimFrame( animate );
	var currentTime = new Date().getTime();
	if (mLastFrameTime === 0) {
		mLastFrameTime = currentTime;
	}

	if ((currentTime - mLastFrameTime) > mWaitTime) {
		swapPhoto();
		mLastFrameTime = currentTime;
	}
}

/************* DO NOT TOUCH CODE ABOVE THIS LINE ***************/

function swapPhoto() {
	//Add code here to access the #slideShow element.
if (mCurrentIndex >= mImages.length) {
  mCurrentIndex = 0;
} else (mCurrentIndex < 0) {
mCurrentIndex= mImages[mImages.length-1];
}
var mLastFrameTime=0
mCurrentIndex +=1
	//Access the img element and replace its source
  document.getElementById('photo').src=mImages[mCurrentIndex].imgPath;
document.getElementByClassName('location').innerHTML = "Location: " + mImages[mCurrentIndex].location;
document.getElementByClassName('description').innerHTML = "Description: " + mImages[mCurrentIndex].description;
document.getElementByClassName('date').innerHTML = "Date: " + mImages[mCurrentIndex].Date;
	//with a new image from your images array which is loaded
	//from the JSON string

	console.log('swap photo');
}

// Counter for the mImages array
var mCurrentIndex = 0;

// XMLHttpRequest variable
var mRequest = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    console.log(data);
  } else if (request.readyState === 4) {
    console.log("could not fetch the data");
  }
});
request.open("GET", "../images.json");
request.send();
// Array holding GalleryImage objects (see below).
var mImages = [];
var Location = document.getElementByClassName('location').innerHTML;
var Description = document.getElementByClassName('description').innerHTML;
var Date = document.getElementByClassName('date').innerHTML;
// Holds the retrived JSON information
var mJson;

// URL for the JSON to load by default
// Some options for you are: images.json, images.short.json; you will need to create your own extra.json later
var mUrl = 'insert_url_here_to_image_json';


//You can optionally use the following function as your event callback for loading the source of Images from your json data (for HTMLImageObject).
//@param A GalleryImage object. Use this method for an event handler for loading a gallery Image object (optional).
function makeGalleryImageOnloadCallback(galleryImage) {
	return function(e) {
		galleryImage.img = e.target;
		mImages.push(galleryImage);
	}
}

$(document).ready( function() {

	// This initially hides the p hotos' metadata information
	$('.details').eq(0).hide();

});

window.addEventListener('load', function() {

	console.log('window loaded');

}, false);

function GalleryImage() {
	// implement me as an object to hold the following data about an image:
	//1. location where photo was taken
  this.location;
	//2. description of photo
  this.description;
	//3. the date when the photo was taken
  this.date;
	//4. either a String (src URL) or an an HTMLImageObject (bitmap of the photo. https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
  this.img;
}

//for 2.4//
function iterateJSON(mJson){
    for (let x=0; x < mJson.images.length; x++)
    mImages[x] = newGalleryObject
    =imgmJson.images[x].imgLocation;
    =imgmJson.images[x].imgLocation;
    =imgmJson.images[x].imgLocation;
    =imgmJson.images[x].imgLocation;
}
