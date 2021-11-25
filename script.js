let btn = document.querySelector('.nav-toggle');
let links = document.querySelector('.links');
btn.addEventListener('click', () => {
    // if (links.classList.contains('link')) {
    //     links.classList.remove('link');
    // } else {
    //     links.classList.add('link');
    // }
    links.classList.toggle('link');
})