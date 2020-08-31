const arrow_links = document.getElementsByClassName('arrow-link');

console.log(arrow_links);

for (let i = 0; i < arrow_links.length; i++) {
    arrow_links[i].addEventListener('mouseover', function(e) {
        const arrow_down_circle = arrow_links[i].querySelector('.arrow-down-circle');
        if (arrow_down_circle) {
            arrow_down_circle.classList.add('arrow-down-circle-animation');
        }

        const arrow_down = arrow_links[i].querySelector('.arrow');
        if (arrow_down) {
            arrow_down.classList.add('arrow-down-animation');
        }

        const case_study_circle = arrow_links[i].querySelector('.case-study-circle');
        if (case_study_circle) {
            case_study_circle.classList.add('case-study-circle-animation');
        }

        const right_arrow = arrow_links[i].querySelector('.right-arrow');
        if (right_arrow) {
            right_arrow.classList.add('right-arrow-animation');
        }

        const circle_text = arrow_links[i].querySelector('.circle-text');
        if (circle_text) {
            circle_text.classList.add('circle-text-animation');
        }
    });
};