let noClicks = 1;
const maxNoClicks = 4;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1;
const gifElement = document.getElementById("yes-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

const gifs = [
  "assets/images/1.gif",
  "assets/images/2.gif",
  "assets/images/3.gif",
  "assets/images/4.gif",
  "assets/images/5.gif",
];

const buttonMessages = [
  "Are you sure??",
  "Pookie please",
  "Pookie PLEASE",
  "You can't do this to me!",
  "You can't be serious!",
  "Say yes or I cry!",
  "My soul is leaving!",
  "Pookie, have mercy!",
];

noButton.addEventListener("click", () => {
  gifElement.src = gifs[noClicks % gifs.length];

  noButton.textContent = buttonMessages[noClicks % buttonMessages.length];

  noButton.style.width = "auto";
  noButton.style.width = `${noButton.scrollWidth}px`;

  if (noScale > minNoScale) {
    noScale -= 0.1;
    noButton.style.transform = `scale(${noScale})`;
  }

  const baseWidth = parseFloat(yesButtonStyle.width);
  const scaledWidth = baseWidth * yesScale;

  if (scaledWidth < maxYesWidth) {
    yesScale += 0.5;
    yesButton.style.transform = `scale(${yesScale})`;

    const rootStyles = getComputedStyle(document.documentElement);
    const gapScaleFactor =
      parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;
    const currentGap = parseFloat(buttonContainer.style.gap) || 20;
    const newGap = Math.sqrt(currentGap * gapScaleFactor);
    buttonContainer.style.gap = `${newGap}px`;
  }

  noClicks++;
});
