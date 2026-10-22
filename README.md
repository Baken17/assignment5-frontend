# Assignment 5 — JavaScript Basics

Student: **Mirzatayev Bagdaulet**  
Group: **SE-2528**

A four-page website demonstrating JavaScript fundamentals, DOM manipulation and events. Built with plain HTML, CSS and JavaScript, with no frameworks or external dependencies.

## Run locally

1. Download and extract the project.
2. Open `index.html` in a browser. The welcome alert appears automatically; close it to continue.
3. Use the navigation to open the other three pages.
4. Open Developer Tools → Console to inspect the output for Tasks 0 and 1.

Alternatively, run `python3 -m http.server 8000` inside this folder, then visit `http://localhost:8000`.

## Assignment coverage

| Page | Tasks | Features |
| --- | --- | --- |
| `index.html` | 0–1 | External script, name/group console output, exact welcome alert, string/number/boolean variables, arithmetic, concatenation |
| `dom.html` | 2–4 | Replace paragraph text, change background and font size, add/remove the last list item |
| `events.html` | 5–7 | Mouseover/mouseout, live input via keyup, addition/subtraction/multiplication/division |
| `todo.html` | 8 | Add tasks, optional descriptions, completion checkboxes with strike-through, individual deletion, temporary array |

Every page has a navbar linking all four parts. Layout adapts to small screens. All form fields have labels and controls work with a keyboard.

## Source files

- `styles.css`: shared layout, visual design and responsive rules.
- `student.js`: student name and group, shared by all pages.
- `basics.js`: Tasks 0 and 1.
- `dom.js`: Tasks 2–4.
- `events.js`: Tasks 5–7.
- `todo.js`: Task 8; the `tasks` array is the source of task data.
- `DEFENSE_RU.md`: a Russian walkthrough for preparing the oral defense.

Edit the name and group in `student.js` and the first lines of this README if corrections are needed.

## Behavior and edge cases

- Removing from an empty list is disabled; a guard also checks for a last item.
- Empty or invalid calculator inputs show a message. Division by zero and non-finite results are rejected. Results display up to 12 significant digits.
- Empty and whitespace-only task titles are rejected. Title length is limited to 120 characters and description length to 500 characters.
- Task text is inserted with `textContent`, so markup is shown as text.
- Duplicate titles are allowed; unique numeric IDs ensure the correct task is deleted.
- Completed tasks can be reopened by unchecking the checkbox.
- Tasks are stored only in an array. Reloading or leaving the page clears them; there is no database or local storage.

## Publication

Live website: https://baken17.github.io/assignment5-frontend/

Repository: https://github.com/Baken17/assignment5-frontend

The website is configured for GitHub Pages deployment from the `main` branch and the repository root.

### GitHub Pages

1. Create a GitHub repository, for example `assignment5-frontend`.
2. Add this folder's contents to the repository root. `index.html` must be at the root.
3. In repository Settings → Pages, choose deployment from the `main` branch and the root folder.
4. Wait for deployment and use the URL displayed by GitHub Pages.
5. Add the actual website and repository URLs to this README, and submit the repository link in Moodle.

### Netlify alternative

Deploy this folder as a static website with no build command. Still store the source in a GitHub repository, because the assignment asks for a repository link.

## Before submission

Check the name and group, publish the site, add verified links here, and submit before the Moodle deadline. Prepare to demonstrate and explain the code at the practice lesson and complete the live coding challenge yourself.
