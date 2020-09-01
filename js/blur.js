const images = document.querySelectorAll('.case-study__image > img');

const config = {
    threshold: 0.7
}

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.filter = 'blur(0px)';
        } else {
            entry.target.style.filter = 'blur(5px)';
        }
    });
}, config);

images.forEach(image => {
    observer.observe(image);
});