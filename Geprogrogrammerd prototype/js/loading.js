document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enterButton');
    const landingPage = document.getElementById('landingPage');
    const transitionPage = document.getElementById('transitionPage');
    const loadingGif = document.getElementById('loadingGif');
    const loadingAudio = document.getElementById('loadingAudio');
    const mainContent = document.getElementById('mainContent');

    // Reset the display states of the pages on refresh
    landingPage.style.display = 'flex';
    transitionPage.style.display = 'none';
    mainContent.style.display = 'none';

    enterButton.addEventListener('click', () => {
        console.log('SVG button clicked!');
        landingPage.style.display = 'none'; // Hide landing page
        transitionPage.style.display = 'flex'; // Show transition page

        // Play the audio
        loadingAudio.play();

        // Wait for GIF and audio to finish
        setTimeout(() => {
            // Apply fade-out effect to the transition page
            transitionPage.classList.add('fade-out');

            // Wait for the fade-out animation to complete
            setTimeout(() => {
                transitionPage.style.display = 'none'; // Hide transition page

                // Show main content with a slight delay for fade-in
                mainContent.style.display = 'block';
                setTimeout(() => {
                    mainContent.classList.add('show'); // Trigger fade-in effect
                }, 10); // Small delay to ensure display is applied before opacity
            }, 1000); // Match the fade-out duration (1s)
        }, 2000); // Adjust duration to match GIF length in milliseconds
    });
});