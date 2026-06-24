const heroVideos = Array.from(document.querySelectorAll('.hero-video'));

if (heroVideos.length) {
    let activeVideo = heroVideos[0];

    heroVideos.forEach((video, index) => {
        video.muted = true;
        video.playsInline = true;

        if (index !== 0) {
            video.classList.remove('is-active');
            video.style.opacity = '0';
        } else {
            video.classList.add('is-active');
            video.style.opacity = '1';
        }

        video.addEventListener('ended', () => {
            const nextVideo = heroVideos[(index + 1) % heroVideos.length];

            activeVideo.classList.remove('is-active');
            activeVideo.style.opacity = '0';

            nextVideo.currentTime = 0;
            nextVideo.play().catch(() => {});
            nextVideo.classList.add('is-active');
            nextVideo.style.opacity = '1';

            activeVideo = nextVideo;
        });
    });

    activeVideo.play().catch(() => {});
}
