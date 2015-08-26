//this version differs from the non-JS shapes one in that the animations are trigged when there is a class 'active' for a div. here, I toggle the class active by adding an event listener to each of the divs -- I learned that in order to add an event listener on the divs collection returned from a query, I had to make use of .hasOwnProperty

document.addEventListener("DOMContentLoaded", function(){
	console.log('hi')

	// var fadeIn = document.getElementsByClassName('fade-in')[0]
	// fadeIn.addEventListener('click', setActive)


	var divs = document.getElementsByTagName('div');

//not exactly sure why I have to use hasOwnProperty here.
//my guess is that the query returns an object where each individual div is actually a property..
	for(div in divs){
		if(divs.hasOwnProperty(div)){
			console.log(typeof divs[div])
		divs[div].addEventListener('click', setActive)
		}
	}

})

function setActive(){
	this.classList.toggle('active')
}