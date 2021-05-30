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
                <label for="uname"><i class="fas fa-user"></i></label>
                <input type="text" placeholder="Username" name="uname" required>

                <label for="psw"><i class="fas fa-lock"></i></label>
                <input type="password" placeholder="Password" name="psw" required>

                <label for="email"><i class="far fa-envelope"></i></label>
                <input type="email" placeholder="Email" name="email" required>
                
                <label for="street"><i class="fas fa-address-card"></i></i></label>
                <input type="street" placeholder="Street" name="street" required>

                <label for="city"></label>
                <input type="city" placeholder="City" name="city" required>

                <label for="state"></label>
                <input type="state" placeholder="State" maxlength="2" name="state" required>

                <label for="zip-code"></label>
                <input type="zip-code" placeholder="Zip Code" name="zip-code" maxlength="10" required>
                
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
                <label for="unamesi"><i class="fas fa-user"></i></label>
                <input type="text" placeholder="Username" name="unamesi" required>

                <label for="pswsi"><i class="fas fa-lock"></i></label>
                <input type="password" placeholder="Password" name="pswsi" required>
                
                <button class="submit-btn" type="submit">Join Us</button>
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
