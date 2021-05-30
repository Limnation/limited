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
      closeSignIn();
      toggleHeaderLoggedIn(username);
    } else {
      alert("Username or password incorrect.");
    }
  }
};

const toggleHeaderLoggedIn = (username) => {
  $(".login-logout").remove();
  $(".joins-username").remove();
  $(".ul-user-section").append(`<li class="login-logout">Logout</li>`);
  $(".ul-user-section").append(`<li class="joins-username">${username}</li>`);
  $(".ul-user-section").append(
    `<li class="userIconE"><img class="userIcon" src="images/nav/top/userIcon.png" alt="User Icon" /></li>`
  );
};

const toggleHeaderLogout = () => {
  $(".login-logout").remove();
  $(".joins-username").remove();
  $(".ul-user-section").append(`<li class="login-logout">Sign In</li>`);
  $(".ul-user-section").append(`<li class="joins-username">Join Us</li>`);
  $(".ul-user-section").remove();
};


$(".ul-user-section").on("click", function(){
    if(cookie) {
        toggleHeaderLogout();
    }
});


$(".modal-section").on("submit", ".sign-in-form", signInHandler);
