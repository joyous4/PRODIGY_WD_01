function imgSlider(x){
    document.querySelector('.starbucks').src = x;
}
function changeColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function chngColor(colr){
    const sq = document.querySelector('.sci');
    sq.style.background = colr;
}
function expColor(clr){
    const sqr = document.querySelector('.explr');
    sqr.style.background = clr;
}
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}