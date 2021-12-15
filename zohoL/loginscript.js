const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const flexLeft = document.querySelector(".flex-item-left");
const flexRight = document.querySelector(".flex-item-right");
user_id = -1;
const logins = document.querySelector(".login");
const logouts = document.querySelector(".logout");
var check = false;
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  for (var i = 0; users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      check = true;
      users[i].signIn = true;
      user_id = i;
      console.log(users[i]);
      logins.classList.add("hidden");
      flexLeft.classList.remove("hidden");
      flexRight.classList.remove("hidden");

      logouts.classList.remove("hidden");
      console.log("hsfsf");
      displayCart();
      displaycategoryElements();

      filterItems("Mobile");
      alert("You have successfully logged in.");

      break;
    }
  }
});

if (check == false) alert("username / password is wrong");

function logout() {
  user_id = -1;
  logouts.classList.add("hidden");
  flexLeft.classList.add("hidden");
  flexRight.classList.add("hidden");
  logins.classList.remove("hidden");
}
