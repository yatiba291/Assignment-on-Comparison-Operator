// Solution 1

function confirm(number) {
  if (number > 0) return " postive";
  else if (number === 0) {
    return " Zero ";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "undefined";
  }
}

// Outcome
confirm(1);
(" postive");
confirm(0);
(" Zero ");
confirm(-1);
("Negative");
confirm(0.05);
(" postive");
confirm(-0.6);
("Negative");
confirm(1 / 2);
(" postive");

// Solution 2
function time(hour) {
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
// Outcome
time(11);
("Good morning");
time(12);
("Good afternoon");
time(18);
("Good evening");

// Solution 3
function confirm2(Grade) {
  if (Grade >= 90) {
    return "Excellent";
  } else if (Grade >= 70) {
    return " Good";
  } else if (Grade >= 50) {
    return " Pass";
  } else {
    return "fail";
  }
}

// Outcome
confirm2(95);
("Excellent");
confirm2(89);
(" Good");
confirm2(69);
(" Pass");
confirm2(40);
("fail");

// Solution 4
function weatherAdvice(weather) {
  if (weather === "rainy") {
    return "Take an umbrella";
  } else if (weather === "sunny") {
    return "Wear sunscreen";
  } else if (weather === "cold") {
    return "Dress warm";
  } else {
    return "Unknown weather condition";
  }
}

// Outcome
weatherAdvice("rainy");
("Take an umbrella");
weatherAdvice("sunny");
("Wear sunscreen");
weatherAdvice("cold");
("Dress warm");
weatherAdvice("summer");
("Unknown weather condition");

// Solution 5
function checkAge(age) {
  if (age < 13) {
    return "Child";
  } else if (age <= 19) {
    return "Teenager";
  } else if (age <= 64) {
    return "Adult";
  } else {
    return "Senior";
  }
}

// Outcome
checkAge(12);
("Child");
checkAge(13);
("Teenager");
checkAge(67);
("Senior");
checkAge(56);
("Adult");

// Solution 6
function checkWeekend(day) {
  if (day === "saturday" || day === "sunday") {
    return "It's the weekend";
  } else {
    return "It's a weekday";
  }
}

// Outcome
checkWeekend("saturday");
("It's the weekend");
checkWeekend("monday");
("It's a weekday");
checkWeekend("sunday");
("It's the weekend");
checkWeekend("wednesday");
("It's a weekday");

// Solution 7
function trafficLightAction(color) {
  if (color === "green") {
    return "Go";
  } else if (color === "yellow") {
    return "Slow down";
  } else if (color === "red") {
    return "Stop";
  } else {
    return "Invalid traffic light color";
  }
}

// Output
trafficLightAction("red");
("Stop");
trafficLightAction("green");
("Go");
trafficLightAction("yellow");
("Slow down");

// Solution 8
function checkRole(role) {
  if (role === "admin") {
    return "Welcome Admin";
  } else if (role === "editor") {
    return "Welcome Editor";
  } else if (role === "viewer") {
    return "Welcome Viewer";
  } else {
    return "Role not recognized";
  }
}
// Outcome
checkRole("admin");
("Welcome Admin");
checkRole("editor");
("Welcome Editor");
checkRole("viewer");
("Welcome Viewer");
checkRole("streamer");
("Role not recognized");

// Solution 9
function checkAttendance(percentage) {
  if (percentage === 100) {
    return "Perfect Attendance";
  } else if (percentage >= 75) {
    return "Good Attendance";
  } else {
    return "Low Attendance";
  }
}
//Outcome
checkAttendance(100);
("Perfect Attendance");
checkAttendance(99);
("Good Attendance");
checkAttendance(30);
("Low Attendance");
