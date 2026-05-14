let users = JSON.parse(localStorage.getItem("users")) || [];
let mode = "login";

// LOGIN
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    localStorage.setItem("loggedInUser", user);
    window.location.href = "shop.html";
  } else {
    document.getElementById("msg").innerText = "❌ Invalid login";
  }
}

// REGISTER
function register() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (users.find(u => u.username === user)) {
    document.getElementById("msg").innerText = "❌ User already exists";
    return;
  }

  users.push({ username: user, password: pass });
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("msg").innerText = "✅ Registered successfully";
}

// UI SWITCH
function showRegister() {
  document.getElementById("mainBtn").innerText = "Register";
  document.getElementById("mainBtn").onclick = register;
  document.getElementById("subtitle").innerText = "Create new account";
}

function showLogin() {
  document.getElementById("mainBtn").innerText = "Login";
  document.getElementById("mainBtn").onclick = login;
  document.getElementById("subtitle").innerText = "Login to continue";
}