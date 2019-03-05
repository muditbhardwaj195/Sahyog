document.querySelector('.nbtn').onclick = function() {
    document.querySelector('.nbtn').setAttribute('style','display:none;')
    document.querySelector('.dbtn').classList.add('hideme');
    document.querySelector('.abc').classList.remove('hideme');
}