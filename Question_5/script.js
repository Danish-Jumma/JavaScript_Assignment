function mainFunc(bgColor,refer){
    let heading = document.getElementById('h1');
    heading.innerHTML = refer;
    heading.style.color = 'white';
    heading.style.fontSize = 60 + 'px';
    heading.style.background = bgColor;
};