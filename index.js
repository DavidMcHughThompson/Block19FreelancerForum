/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  ];
  
  const names = ["Waldo", "Tony", "Hubert", "Chipp", "Sol", "Vega", "Jin", "Ky", "Johnny", "May", "Johnny Sack", "Edric"
  ];
  const occupations = ["ML Engineer", "Lawyer", "Electrician", "Pirate", "Garbage Man", "King", "Ninja", "President", "Navigator"];
  const prices = [100, 200, 300, 400, 500, 600, 650];
  const limit = 10;
  
  // remove the interval after 10 added - see the colors project.
  // `setInterval` will call `addShape` every 1000 milliseconds (1 second)
  // and return an interval ID that we can use to stop the interval later.
  // Calling `clearInterval(addShapeIntervalId)` will stop the interval.
  const addFreeLancerIntervalId = setInterval(addFreelancer, 1000);
  
  render(); // We call this function once to render the initial state
  
  /**
   * Update the DOM to reflect the current state.
   * The term "render" is often used to describe this process.
   */
  function render() {
    // Render the squares
    const freelancerList = document.querySelector("#freelancers");
    const listings = freelancers.map((person) => {
      const newListing = document.createElement("li");
      newListing.innerText = `Name:${person.name} Occupation:${person.occupation} Price:$${person.price}`;
      return newListing;
    });
    freelancerList.replaceChildren(...listings);
  }
  
  /**
   * Add a random shape to the `shapes` array
   */
  function addFreelancer() {
    if (freelancers.length >= limit) {
        clearInterval(addFreeLancerIntervalId)
    }
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];

    freelancers.push({name, occupation, price})

    render();
    // TODO: Create arrays for names, occupations and prices Done
    // TODO: Stop adding shapes if we've reached the maximum number of shapes Done

  }
let averagePrice(freelancers)  {
 const totalPrice = freelancers.reduce((accumulator, freelancer) => {
    return accumulator += freelancer.price;
}, 0); // figure out how this works 
return totalPrice/freelancers.length;
}
function averagePrice(freelancers) {
    const totalPrice = freelancers.reduce((accumulator, freelancer) => {
      return accumulator + freelancer.price;
    }, 0);
  
    return totalPrice / freelancers.length;
  }
  
//const avgPrice = totalPrice/freelancers.length; superfluous now 

console.log(avgPrice);

function renderAveragePrice () {
    
    const averagePrice = avgPrice(freelancers);
    const averagePriceElement = document.querySelector("#avg-price")
    averagePriceElement.textContent = averagePrice.toFixed(2);
}

renderAveragePrice();

  // need to figure out how to get average of prices 
    /* maybe make an accumulator and then divide the total by freelancers.length 

    */
