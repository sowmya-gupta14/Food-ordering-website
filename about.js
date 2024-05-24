/*// Get references to the buttons and divs by their IDs
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const div1 = document.getElementsById("abt-founders");
const div2 = document.getElementsById("abt-company");
const div3 = document.getElementsById("abt-values");
const div4 = document.getElementsById("abt-team");

// Function to show a specific div and hide others
function showDiv(divToShow) {
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";

  divToShow.style.display = "block";
}

// Add click event listeners to the buttons
btn1.addEventListener("click", () => {
  showDiv(div1);
});

btn2.addEventListener("click", () => {
  showDiv(div2);
});

btn3.addEventListener("click", () => {
  showDiv(div3);
});

btn4.addEventListener("click", () => {
    showDiv(div4);
  });
  */

function
    showDiv(div) {

    var
        allDivs = document.getElementsByClassName('content');

    for (var
        i =
            0; i <
        allDivs.length;
        i++) {

        allDivs[i].style.display =
            'none';

    }

    div.style.display =
        'block';

}
