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
  
  function printRatings() {
    var src = '<img src="https://github.com/RameezY/lab04site/blob/main/star.png?raw=true">';
    var messedUp = "You messed up, try again!";
    var bad = true;
  
    while (bad){
      var starRating = prompt("Please give a rating 1-5");
  
      if (starRating < 1) {
        document.write(messedUp);
      }
      else if (starRating > 5) {
        document.write(messedUp);
      }
      else {
        bad = false;
      } 
    }
  
    for (var i = 0; i < starRating; i++)
    {
      document.write(src);
    }
    
  }