$(document).ready(function(){
    // Movement animation to happen
    const card = $('.card');
    const container = $('.container');

    // All items
    const photo = $('.photo img');
    const title = $('.title');
    const social = $('.social');
    const info = $('.info h4');
    const profile = $('.profile');

    // Moving animation event
    container.on('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 20; // rotating the element into x axis
        let yAxis = (window.innerWidth / 2 - e.pageY) / 20; // rotating the element into y axis
        card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
    });

    // Adding animation in
    container.on('mouseenter', e => {
        card.css('transform', "none");
        // Popout animation for all items
        photo.css('transform', "translateZ(50px)");
        title.css('transform', "translateZ(50px)");
        social.css('transform', "translateZ(50px)");
        info.css('transform', "translateZ(50px)");
        profile.css('transform', "translateZ(50px)");
    });

    // Removing animation in
    container.on('mouseleave', e => {
        card.css('transform', "all 0.5s ease");
        card.css('transform', `rotateY(0deg) rotateX(0deg)`);
    });
});