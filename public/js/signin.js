// closes the Sign In modal by setting display = "none"
const closeSignIn = () => {
  document.getElementById("id02").style.display = "none";
};

const signInHandler = async (event) => {
  event.preventDefault();

  const username = $("[name=unamesi]")
    .val()
    .trim();
  const password = $("[name=pswsi]")
    .val()
    .trim();

  if (username && password) {
    const response = await fetch("/api/users/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.cookie = `username=${username}`;
      closeSignIn();
      toggleHeaderLoggedIn(username);
    } else {
      alert("Username or password incorrect.");
    }
  }
};

let usernameCookie = document.cookie;
let cookiedusername = usernameCookie.substr(9);

const toggleHeaderLoggedIn = (username) => {
  let usernameCookie = document.cookie;
  let cookiedusername = usernameCookie.substr(9);
  $(".login").remove();
  $(".joins").remove();
  $(".ul-user-section").append(`<li class="logout">Logout</li>`);
  $(".ul-user-section").append(`<li class="username">${cookiedusername}</li>`);
  $(".ul-user-section").append(
    `<li class="userIconE"><img class="userIcon" src="images/nav/top/userIcon.png" alt="User Icon" /></li>`
  );
};

const toggleHeaderLogout = () => {
  $(".logout").remove();
  $(".username").remove();
  $(".ul-user-section").append(`<li class="login">Sign In</li>`);
  $(".ul-user-section").append(`<li class="joins">Join Us</li>`);
  $(".userIcon").remove();
};

$(".ul-user-section").on("click", ".logout", function() {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    toggleHeaderLogout();
});

$(".modal-section").on("submit", ".sign-in-form", signInHandler);

$(document).ready(function() {
  if (usernameCookie === usernameCookie && usernameCookie !== "") {
    toggleHeaderLoggedIn();
  }
});
