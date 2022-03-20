const nav = document.querySelector(".nav");
const frame = document.querySelector(".frame");
const container = document.querySelector(".container");
const days = document.querySelectorAll(".aday");
const daysText = [
  "Day 01 - Expanding Cards",
  "Day 02 - Progress Steps",
  "Day 03 - Rotating Navigation",
  "Day 04 - Hidden Search",
  "Day 05 - Blurry Loading",
  "Day 06 - Scroll Animation",
  "Day 07 - Split Landing Page",
  "Day 08 - Form Input Wave",
  "Day 09 - Sound Board",
  "Day 10 - Dad Jokes",
  "Day 11 - Event KeyCodes",
  "Day 12 - Frequently Asked Questions",
  "Day 13 - Random Choice Picker",
  "Day 14 - Animated Navigation",
  "Day 15 - Increment Counter",
  "Day 16 - Drink Water",
  "Day 17 - Movie App",
  "Day 18 - Background Slider",
  "Day 19 - Theme Clock",
  "Day 20 - Button Ripple Effect",
  "Day 21 - Drag N Drop",
  "Day 22 - Drawing App",
  "Day 23 - Kinetic CSS Loader",
  "Day 24 - Content Placeholder",
  "Day 25 - Sticky Navbar",
  "Day 26 - Double Vertical Slider",
  "Day 27 - Toast Notification",
  "Day 28 - Github Profiles",
  "Day 29 - Double Heart Click",
  "Day 30 - Auto Text Effect",
  "Day 31 - Password Generator",
  "Day 32 - Good Cheap Fast Checkboxes",
  "Day 33 - Notes App",
  "Day 34 - Animated Countdown",
  "Day 35 - Image Carousel",
  "Day 36 - Hoverboard",
  "Day 37 - Pokedex",
  "Day 38 - Mobile Tab Navigation",
  "Day 39 - Password Strength Background",
  "Day 40 - Background Boxes",
  "Day 41 - Verify Account_UI",
  "Day 42 - Live user Filter",
  "Day 43 - Feedback_UI_Design",
  "Day 44 - Custom Range Slider",
  "Day 45 - Netflix Navigation",
  "Day 46 - Quiz App",
  "Day 47 - Testimonial Box Switcher",
  "Day 48 - Random Image Feed",
  "Day 49 - Todo List",
  "Day 50 - Insect Catch Game",
];
let dayIdx = 0;
let textIdx = Array.from({ length: days.length }, () => 6);

const text = () => {
  for (let i = 0; i < days.length; i++) {
    days[i].innerText = daysText[i].slice(0, 6);
  }
};

text();

function longText(element, index, array) {
  days[index].innerText = array[index].toString().slice(0, textIdx[index]++);
  if (textIdx[index] < element.length) {
    setTimeout(function () {
      longText(element, index, array);
    }, 800 / (element.length - 6));
  } else {
    days[index].innerText = element;
  }
}

function shortText(element, index, array) {
  days[index].innerText = array[index].toString().slice(0, textIdx[index]--);
  if (textIdx[index] > 6) {
    setTimeout(function () {
      shortText(element, index, array);
    }, 800 / (element.length - 6));
  } else {
    textIdx[index] = 6;
    days[index].innerText = array[index].toString().slice(0, textIdx[index]);
  }
}

const writeLongText = () => {
  daysText.forEach(longText);
};

const writeShortText = () => {
  daysText.forEach(shortText);
};

nav.addEventListener("mouseenter", () => {
  nav.classList.add("active");
  writeLongText();
});

nav.addEventListener("mouseleave", () => {
  nav.classList.remove("active");
  writeShortText();
});
