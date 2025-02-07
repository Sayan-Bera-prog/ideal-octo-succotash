const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "If living in a delusion is the only way I get to be with you, then I’ll stay lost in this dream forever—because even a beautiful lie is better than a reality without you..";
    gif.src = "./GIF/7D4B45132F3C1F60A993CAAC3DA681B4_video_dashinit.gif";

    // Hide No button
    noBtn.style.display = "none";
});

// Function to move the No button randomly
function moveButton() {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions so button stays inside the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Generate random positions within the wrapper
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply new position
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Event listeners for desktop (hover) and mobile (continuous touch move)
noBtn.addEventListener("mouseover", moveButton); // Works on desktop
noBtn.addEventListener("touchmove", (e) => {
    e.preventDefault(); // Prevent scrolling when moving the button
    moveButton();
}); // Works on mobile
