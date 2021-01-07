function askUserName() {
  var userName = prompt("Please Enter Your Name");

  if (userName == "") {
    document.write("You messed up!");
  } else {
    alert("Hello " + userName);
    document.write("Welcome to the site " + userName + "!");
  }
}

function refresh() {
  var refreshquestion = confirm("Would you like to refresh the page?");
  if (refreshquestion == true) {
    window.location.reload();
  }
}
