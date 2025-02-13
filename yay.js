document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // Gradually change background
    document.body.classList.add("transition-bg");

    // Change GIF with a fade-out effect first
    const gifElement = document.getElementById("yes-gif");
    setTimeout(() => {
      gifElement.style.opacity = "0"; // Start fading out
      setTimeout(() => {
        gifElement.src = "assets/images/friends.gif"; // Change image
        gifElement.style.opacity = "1"; // Fade back in
      }, 1000); // Wait 1 sec after fade-out before changing
    }, 2000); // Start changing GIF after 2 seconds

    // Strike through "Valentine" and then reveal "Friend"
    const valentineText = document.getElementById("valentine");
    const friendText = document.getElementById("friend");

    setTimeout(() => {
      valentineText.classList.add("strike-through");

      setTimeout(() => {
        friendText.style.display = "inline-block"; // Ensure it appears
        friendText.classList.add("reveal-friend"); // Gradually reveal Friend

        // **Change the title of the page once "Friend" appears**
        document.title = "Thanks for being my Friend!";
      }, 1500); // Delay until after "Valentine" is striked
    }, 2500);
  }, 2000);
});
