document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enterButton');
    const landingPage = document.getElementById('landingPage');
    const transitionPage = document.getElementById('transitionPage');
    const loadingGif = document.getElementById('loadingGif');
    const loadingAudio = document.getElementById('loadingAudio');
    const mainContent = document.getElementById('mainContent');

    landingPage.style.display = 'flex';
    transitionPage.style.display = 'none';
    mainContent.style.display = 'none';

    enterButton.addEventListener('click', () => {
        console.log('SVG button clicked!');
        landingPage.style.display = 'none'; 
        transitionPage.style.display = 'flex'; 

        loadingAudio.play();

        setTimeout(() => {
            transitionPage.classList.add('fade-out');

            setTimeout(() => {
                transitionPage.style.display = 'none'; 

                mainContent.style.display = 'block';
                setTimeout(() => {
                    mainContent.classList.add('show'); 
                }, 10); 
            }, 1000); 
        }, 2000); 
    });
});