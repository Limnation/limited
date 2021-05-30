// Opens Join Modal
$(".ul-user-section").on("click", ".joins-username", function() {
  document.getElementById("id01").style.display = "block";
});

function createJoinHtml() {
  $(".modal-section").append(generateJoinHtml());
}

function generateJoinHtml() {
  return `
    <div id="id01" class="modal">
        <form class="join-us-form modal-content animate">
            <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                <img src="images/nav/top/navLogo.png" alt="Avatar" class="avatar">
            </div>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required>
                
                <label for="street"><b>Street</b></label>
                <input type="text" placeholder="Enter Street" name="street" required>

                <label for="city"><b>City</b></label>
                <input type="text" placeholder="Enter City" name="city" required>

                <label for="state"><b>State</b></label>
                <input type="text" placeholder="Enter State" name="state" required>

                <label for="zip-code"><b>Zip Code</b></label>
                <input type="text" placeholder="Enter Zip Code" name="zip-code" required>
                
                <button class="submit-btn" type="submit">Join Us</button>
            </div>
        </form>
    </div>
`;
}

// Opens Sign In Modal
$(".ul-user-section").on("click", ".login-logout", function() {
  document.getElementById("id02").style.display = "block";
});

function createSignInHtml() {
  $(".modal-section").append(generateSignInHtml());
}

function generateSignInHtml() {
  return `
  <div id="id02" class="modal">
        <form class="sign-in-form modal-content animate">
            <div class="imgcontainer">
                <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
                <img src="images/nav/top/navLogo.png" alt="Avatar" class="avatar">
            </div>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
                
                <button class="submit-btn" type="submit">Sign In</button>
            </div>
        </form>
    </div>
`;
}

// initial functions to populate all products to the store page
function init() {
  createJoinHtml();
  createSignInHtml();
}

init();
