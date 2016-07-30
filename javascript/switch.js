var today = new Date.getDay();
var wish = "Happy";

switch(today)
{
  case 0:
    wish += "Sunday";
    break;
  case 1:
    wish += "Monday";
    break;
  case 2:
    wish += "Teusday";
    break;
  case 3:
    wish += "Wednesday";
    break;
  case 4:
    wish += "Thursday";
    break;
  case 5:
    wish += "Friday";
    break;
  case 6:
    wish += "Saturday";
    break;
}

document.write(wish);
