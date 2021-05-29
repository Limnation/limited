// Opens Join Modal
$(".ul-user-section").on("click", ".joins-username", function() {
  document.getElementById("id01").style.display = "block";
});

function createJoinHtml() {
  $("body").append(generateJoinHtml());
}

function generateJoinHtml() {
  return `
    <div id="id01" class="modal">
        <form class="modal-content animate" action="/action_page.php" method="post">
            <div class="imgcontainer">
                <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                <img src="" alt="Avatar" class="avatar">
            </div>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
                    
                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
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
  $("body").append(generateSignInHtml());
}

function generateSignInHtml() {
  return `
    <div id="id02" class="modal">
        <form class="modal-content animate" action="/action_page.php" method="post">
            <div class="imgcontainer">
                <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
                <img src="" alt="Avatar" class="avatar">
            </div>

            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
                    
                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
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
