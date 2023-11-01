var top_nav = document.getElementById("myTopnav");
var iconElement = document.querySelector(".icon i");
var nav = document.querySelector(".navbar-top");
var navbar_open = false;

function myFunction() {
  if (top_nav.className === "navbar-top") {
    top_nav.className += " responsive";
    navbar_open = true;
    iconElement.className = "fa fa-close";
  } else {
    top_nav.className = "navbar-top";
    navbar_open = false;
    iconElement.className = "fa fa-bars";
  }
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= -80 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener(
  "scroll",
  function () {
    if (!isInViewport(nav)) top_nav.className = "navbar-top";
    else if (navbar_open) top_nav.className += " responsive";
  },
  {
    passive: true,
  }
);

function validateForm() {
  let name = document.forms["get-in-touch"]["user-name"].value;
  let email = document.forms["get-in-touch"]["user-email"].value;
  let subject = document.forms["get-in-touch"]["user-subject"].value;
  console.log(name);
  if (name == "" || email == "" || subject == "") {
    alert("Incomplete information!");
    return false;
  }
}
