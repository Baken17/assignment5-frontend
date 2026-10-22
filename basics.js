"use strict";
// Task 0: an external JavaScript file, console output and a welcome alert.
console.log("Student: " + student.name);
console.log("Group: " + student.group);
function showWelcome() {
  alert("Hello, JavaScript World!");
}
document.getElementById("hello-button").addEventListener("click", showWelcome);

// Task 1: string, number and boolean values, arithmetic and concatenation.
function runExamples() {
  const language = "JavaScript";
  const a = 12;
  const b = 4;
  const isLearning = true;
  const introduction = "I am " + student.name + " from " + student.group + ".";
  const results = [
    "Student: " + student.name,
    "Group: " + student.group,
    "language = " + language + " (" + typeof language + ")",
    "a = " + a + ", b = " + b + " (" + typeof a + ")",
    "isLearning = " + isLearning + " (" + typeof isLearning + ")",
    "12 + 4 = " + (a + b),
    "12 - 4 = " + (a - b),
    "12 * 4 = " + (a * b),
    "12 / 4 = " + (a / b),
    "12 % 4 = " + (a % b),
    introduction
  ];
  results.forEach(function (line) { console.log(line); });
  document.getElementById("console-output").textContent = results.join("\n");
}
document.getElementById("run-button").addEventListener("click", runExamples);
runExamples();
showWelcome();
