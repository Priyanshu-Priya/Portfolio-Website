document.addEventListener("DOMContentLoaded", function () {
    const words = ["Web Developer", "Software Engineer", "AI/ML Enthusiast" ,"UI/UX Designer"]; // Words to cycle through
    const animatedText = document.querySelector(".text-animation");
    const cursor = document.querySelector(".cursor");
    let index = 0; // Current word index
    let letterIndex = 0; // Current letter index
    let isDeleting = false; // Flag to check if we are deleting
    const typingSpeed = 150; // Typing speed in milliseconds
    const pauseDuration = 1000; // Pause after typing the full word

    function type() {
        // Determine the current word to type or delete
        const currentWord = words[index];
        
        // If deleting, remove letters; if typing, add letters
        if (isDeleting) {
            letterIndex--;
        } else {
            letterIndex++;
        }

        // Update the text content
        animatedText.textContent = currentWord.substring(0, letterIndex);

        // Control the typing and deleting flow
        if (isDeleting && letterIndex === 0) {
            // Move to the next word
            isDeleting = false;
            index = (index + 1) % words.length; // Loop through words
            setTimeout(type, typingSpeed); // Start typing the next word
        } else if (!isDeleting && letterIndex === currentWord.length) {
            // Pause before deleting
            setTimeout(() => {
                isDeleting = true;
                type(); // Call type again to delete
            }, pauseDuration);
        } else {
            // Continue typing or deleting
            setTimeout(type, typingSpeed);
        }
    }

    type(); // Start the typing animation
});
