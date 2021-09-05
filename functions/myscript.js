    let person = prompt("Please enter your name", "Bob Bobster");
    if (person != null) {
    document.getElementById("prompt").innerHTML =
    "Hello " + person + "! How are you?" ;
}

let text;
    switch (new Date().getDay()) {
    case 6:
    text = "Today is Saturday.";
    break;
    case 0:
    text = "Today is Sunday.";
    break;
    default:
    text = "Looking forward to the Weekend.";
}
document.getElementById("day").innerHTML = text;

let x = myFunction(10, 10); 

function myFunction(a, b) {
  return a * b;   
}  
document.getElementById("return").innerHTML = x;