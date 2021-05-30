const closeJoin = () => {
  document.getElementById("id01").style.display = "none";
};

const closeSignIn = () => {
  document.getElementById("id02").style.display = "none";
};

const createProfile = async (event) => {
  event.preventDefault();

  // Collect values from the Sign In form
  const username = $('[name="uname"]')
    .val()
    .trim();
  const password = $('[name="psw"]')
    .val()
    .trim();
  const email = $('[name="email"]')
    .val()
    .trim();
  const street = $('[name="street"]')
    .val()
    .trim();
  const city = $('[name="city"]')
    .val()
    .trim();
  const state = $('[name="state"]')
    .val()
    .trim();
  const zip_code = $('[name="zip-code"]')
    .val()
    .trim();

  if (username && password && email && street && city && state && zip_code) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        email,
        street,
        city,
        state,
        zip_code,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      //   document.location.reload();
      closeJoin();
    } else {
      alert("Please fill out all areas.");
    }
  }
};

$(".modal-section").on("submit", ".join-us-form", createProfile);