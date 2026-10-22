"use strict";
// Edit the student's details here; all four pages use this file.
const student = {
  name: "Mirzatayev Bagdaulet",
  group: "SE-2528"
};
document.querySelectorAll("[data-student-name]").forEach(function (element) {
  element.textContent = student.name;
});
document.querySelectorAll("[data-student-group]").forEach(function (element) {
  element.textContent = student.group;
});


