document.querySelector('.box').onclick = handleClick();

function handleClick() {
    // console.log('clicked')
    return function () {
        console.log('clicked')
    }
}