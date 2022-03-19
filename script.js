const nav = document.querySelector(".nav");
const frame = document.querySelector(".frame");
const container = document.querySelector(".container");

const navHTML = `
    <div class="link"><a href="./Day01_Expanding_Cards/" target="_blank">Day1 - Expanding Cards</a></div>
    <div class="link"><a href="./Day02_Progress_Steps/" target="_blank">Day2 - Progress Steps</a></div>
    <div class="link"><a href="./Day03_Rotating_Navigation/" target="_blank">Day3 - Rotating Navigation</a></div>
    <div class="link"><a href="./Day04_Hidden_Search/" target="_blank">Day4 - Hidden Search</a></div>
    <div class="link"><a href="./Day05_Blurry_Loading/"  target="_blank">Day5 - Blurry Loading</a></div>
    <div class="link"><a href="./Day06_Scroll_Animation/"  target="_blank">Day6 - Scroll Animation</a></div>
    <div class="link"><a href="./Day07_Split_Landing_Page/"  target="_blank">Day7 - Split Landing Page</a></div>
    <div class="link"><a href="./Day08_Form_Input_Wave/"  target="_blank">Day8 - Form Input Wave</a></div>
    <div class="link"><a href="./Day09_Sound_Board/"  target="_blank">Day9 - Sound Board</a></div>
    <div class="link"><a href="./Day10_Dad_Jokes/"  target="_blank">Day10 - Dad Jokes</a></div>
    <div class="link"><a href="./Day11_Event_KeyCodes/"  target="_blank">Day11 - Event KeyCodes</a></div>
    <div class="link"><a href="./Day12_Frequently_Asked_Questions/"  target="_blank">Day12 - Frequently Asked Questions</a></div>
    <div class="link"><a href="./Day13_Random_Choice_Picker/"  target="_blank">Day13 - Random Choice Picker</a></div>
    <div class="link"><a href="./Day14_Animated_Navigation/"  target="_blank">Day14 - Animated Navigation</a></div>
    <div class="link"><a href="./Day15_Increment_Counter/"  target="_blank">Day15 - Increment Counter</a></div>
    <div class="link"><a href="./Day16_Drink_Water/"  target="_blank">Day16 - Drink Water</a></div>
    <div class="link"><a href="./Day17_Movie_App/"  target="_blank">Day17 - Movie App</a></div>
    <div class="link"><a href="./Day18_Background_Slider/"  target="_blank">Day18 - Background Slider</a></div>
    <div class="link"><a href="./Day19_Theme_Clock/"  target="_blank">Day19 - Theme Clock</a></div>
    <div class="link"><a href="./Day20_Button_Ripple_Effect/"  target="_blank">Day20 - Button Ripple Effect</a></div>
    <div class="link"><a href="./Day21_Drag_N_Drop/"  target="_blank">Day21 - Drag N Drop</a></div>
    <div class="link"><a href="./Day22_Drawing_App/"  target="_blank">Day22 - Drawing App</a></div>
    <div class="link"><a href="./Day23_Kinetic_CSS_Loader/"  target="_blank">Day23 - Kinetic CSS Loader</a></div>
    <div class="link"><a href="./Day24_Content_Placeholder/"  target="_blank">Day24 - Content Placeholder</a></div>
    <div class="link"><a href="./Day25_Sticky_Navbar/"  target="_blank">Day25 - Sticky Navbar</a></div>
    <div class="link"><a href="./Day26_Double_Vertical_Slider/"  target="_blank">Day26 - Double Vertical Slider</a></div>
    <div class="link"><a href="./Day27_Toast_Notification/"  target="_blank">Day27 - Toast Notification</a></div>
    <div class="link"><a href="./Day28_Github_Profiles/"  target="_blank">Day28 - Github Profiles</a></div>
    <div class="link"><a href="./Day29_Double_Heart_Click/"  target="_blank">Day29 - Double Heart Click</a></div>
    <div class="link"><a href="./Day30_Auto_Text_Effect/"  target="_blank">Day30 - Auto Text Effect</a></div>
    <div class="link"><a href="./Day31_Password_Generator/"  target="_blank">Day31 - Password Generator</a></div>
    <div class="link"><a href="./Day32_Good_Cheap_Fast_Checkboxes/"  target="_blank">Day32 - Good Cheap Fast Checkboxes </a></div>
    <div class="link"><a href="./Day33_Notes_App/"  target="_blank">Day33 - Notes App</a></div>
    <div class="link"><a href="./Day34_Animated_Countdown/"  target="_blank">Day34 - Animated Countdown</a></div>
    <div class="link"><a href="./Day35_Image_Carousel/"  target="_blank">Day35 - Image Carousel</a></div>
    <div class="link"><a href="./Day36_Hoverboard/"  target="_blank">Day36 - Hoverboard</a></div>
    <div class="link"><a href="./Day37_Pokedex/"  target="_blank">Day37 - Pokedex</a></div>
    <div class="link"><a href="./Day38_Mobile_Tab_Navigation/"  target="_blank">Day38 - Mobile Tab Navigation</a></div>
    <div class="link"><a href="./Day39_Password_Strength_Background/"  target="_blank">Day39 - Password Strength Background</a></div>
    <div class="link"><a href="./Day40_3D_Background_Boxes/"  target="_blank">Day40 - Background Boxes</a></div>
`;

nav.addEventListener("mouseenter", () => {
  nav.classList.add("active");
});

nav.addEventListener("mouseleave", () => {
  nav.classList.remove("active");
});
