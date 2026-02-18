const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

// navbar media screen toggle
const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

// password protection for family tree page
function checkPassword() {
  var correctPassword = "ABC)(*"; // Congratulations, you found the password! Just trying a fun way to add a layer of protection.
  var enteredPassword = document.getElementById("pswd").value;
  if (enteredPassword === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("protected").style.display = "block";
  } else {
    alert("Incorrect password. Access denied.");
  }
}

// collapsible family tree
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

// Scroll back to top button
let mybutton = document.getElementById("scrollbtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// footer
const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
