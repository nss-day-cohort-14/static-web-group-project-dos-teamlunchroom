
// JAVASCRIPT

// create array of objects

var hope = [
// add property key here
	{
	 name: "Bravery", 
   image: "<img src='/img/bravery.jpg'>",
   description: "Rebum quando sea at, per nibh antiopam te, tantas aliquid ad sea.", 
   price: "$5"
  },

	{
	 name: "Coolness", 
 	 image: "<img src='/img/coolness.jpg'>", 
   description: "Rebum quando sea at, per nibh antiopam te, tantas aliquid ad sea.", 
   price: "$6"
  },

	{
	 name: "Hindsight", 
	 image: "<img src='/img/hind.jpg'>",
	 description: "Rebum quando sea at, per nibh antiopam te, tantas aliquid ad sea.", 
   price: "$7"
  },
	
	{
	 name: "Motivation",
	 image: "<img src='/img/motivation.jpg'>", 
	 description: "Rebum quando sea at, per nibh antiopam te, tantas aliquid ad sea.", 
	 price: "$8"
	},
	
	{
	 name: "Potential", 
	 image: "<img src='/img/potential.jpg'>",
	 description: "Rebum quando sea at, per nibh antiopam te, tantas aliquid ad sea.",
	 price: "$9"
	},

	{
	 name: "Success",
	 image: "<img src='/img/success.jpg'>",
	 description: "Rebum quando sea at, per nibh antiopam te, tantas aliquid ad sea.", 
	 price: "$10"
	},

	{
	 name: "Sensitivity",
	 image: "<img src='/img/sensitivity.png'>",
	 description: "Rebum quando sea at, per nibh antiopam te, tantas aliquid ad sea.", 
	 price: "$11"
	},

	{
	 name: "Wait",
	 image: "<img src='/img/wait.jpg'>",
	 description: "Rebum quando sea at, per nibh antiopam te, tantas aliquid ad sea.", 
	 price: "$12"
	}
];

// create a variable to hold an empty string where divs will be stored
var hopeWall = "";



// create loop that will iterate through each key and value pair
for (i = 0; i < hope.length; i++) { /*get name value*/
	hopeWall += "<div class='frame'>";
	hopeWall += "<h1 class='hopeName'>" + hope[i].name + "</h1>";
	hopeWall += "<p class='hopeImg'>" + hope[i].image + "</p>";
	hopeWall += "<h2 class='hopeDes'>" + hope[i].description + "</h2>";
	hopeWall += "<h3 class='hopePrice'>" + hope[i].price + "</h3>";
	hopeWall += "</div>"
}
document.write(hopeWall);

