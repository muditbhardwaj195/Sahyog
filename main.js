document.querySelector('.nbtn').onclick = function() {
    document.querySelector('.nbtn').setAttribute('style','display:none;')
    document.querySelector('.dbtn').setAttribute('style','display:none;')
    document.querySelector('.abc').classList.remove('hideme');
}
document.querySelector('.dbtn').onclick = function() {
    document.querySelector('.nbtn').setAttribute('style','display:none;')
    document.querySelector('.dbtn').setAttribute('style','display:none;')
    document.querySelector('.def').classList.remove('hideme');
    document.querySelector('.dli').classList.remove('hideme');
}