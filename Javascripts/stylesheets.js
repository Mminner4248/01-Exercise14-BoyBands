var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "i";

// Keep track of which veggie we're on in the loop
var currentVeggie = "i";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < loopCount; i += 1) {
  
  // Add the band names into the correct <div>
  let currentBand = `<ul>
                    <li>${bands[i]}
                    </li>
                    </ul>`

  bandElement.innerHTML += currentBand;

  // Add the veggie names into the correct <div>
  currentVeggie = `<ul>
                  <li>${vegetables[i]}
                  </li>
                  </ul>`

  veggieElement.innerHTML += currentVeggie;

}
