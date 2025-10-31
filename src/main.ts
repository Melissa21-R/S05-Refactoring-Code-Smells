// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
//originally named c lets just call it counter
let counterNum = 0;

// These constants are for button IDs and heading text
//changed button IDs to make more sense
const inc = "increment", count = "counterNum", title = "CMPM 121 Project";

/*
  orginally the inside of this function was in every click, so to remove duplicate code
  I put it into a function
  */
function update(ctrElement: HTMLElement | null) {
  // Update the counterNum display
  if (ctrElement) {
    ctrElement.innerHTML = `${counterNum}`;
  }
  // Update the document title
  document.title = "Clicked " + counterNum;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = counterNum % 2 ? "pink" : "lightblue";
}

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${title}</h1>
    <p>counter: <span id="${count}">0</span></p>
    <button id="${inc}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the increment button element from the document
  //orginally called bI which is confusing just call increment
  const increment = document.getElementById(inc);
  // Get the decrement button element from the document
  //orginally called bD just name decrement
  const decrement = document.getElementById("dec");
  // Get the reset button element from the document
  //orginally called bR name reset instead
  const reset = document.getElementById("reset");
  // Get the counter span element from the document
  //called ctr but renamed to ctrElement
  const ctrElement = document.getElementById(count);

  // Check if any element is missing, then exit the function
  if (!increment || !decrement || !reset || !ctrElement) return;

  // Add click event to the increment button
  increment.addEventListener("click", () => {
    // Increase the counterNum by 1
    counterNum++;
    // Update the counterNum display, title, and background
    update(ctrElement);
  });

  // Add click event to the decrement button
  decrement.addEventListener("click", () => {
    // Decrease the counterNum by 1
    counterNum--;
    // Update the counterNum display, title, and background
    update(ctrElement);
  });

  // Add click event to the reset button
  reset.addEventListener("click", () => {
    // Reset the counterNum to 0
    counterNum = 0;
    // Update the counterNum display, title, and background
    update(ctrElement);
  });
}

// Call setup to initialize the UI
//orginally in a function called start, that was unessecary
setup();

//orginally had start down here we dont need it just call setup()
