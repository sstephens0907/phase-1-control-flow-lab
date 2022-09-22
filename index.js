function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
  if (distanceInFeet < 400){
  return 'This one is on me!';
} else if (distanceInFeet < 2000 && distanceInFeet > 400){
  return 'That will be twenty bucks.';
} else if (distanceInFeet < 2500 && distanceInFeet > 2000){
  return 'I will gladly take your thirty bucks.';
}else if (distanceInFeet > 2500) {
  return 'No can do.';
}
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good."
  }  
    else{
      return "No go.";
    }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
    return "Thank you so much."
    break;
    case 'not as generous':
    return "Thank you."
    break;
    default:
    return "Bye."
  }

}