function printRatings() {
  var src = '<img src="/star.png">';
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