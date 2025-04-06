document.addEventListener('DOMContentLoaded', function() {

	// This script sets the current year in the footer of the page.
	let now = new Date();
	let year = now.getFullYear();
	let element = document.querySelector("#current-year");
	element.innerHTML = year;

	// Lazy load YouTube video
    const youtubeContainer = document.querySelector('.youtube-container');
    if (youtubeContainer) {
        const placeholder = youtubeContainer.querySelector('.youtube-placeholder');
        const videoId = youtubeContainer.getAttribute('data-video-id');

        placeholder.addEventListener('click', function() {
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('title', 'Melbet Ghana Introduction');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('loading', 'lazy');

            // Replace the placeholder with the iframe
            youtubeContainer.innerHTML = '';
            youtubeContainer.appendChild(iframe);
        });
    }

});
