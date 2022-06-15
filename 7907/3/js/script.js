let ua = navigator.userAgent.toLowerCase();
let isAndroid = ua.indexOf("android") > -1;

function wrapperHeight() {
    if(isAndroid) {
        setTimeout(() => {
            document.querySelector('.wrapper').style.height = window.innerHeight + 'px';
        }, 100);
    }
}


function scrollToInput() {
    let hiddenInput = document.querySelector('.hiddenInput');
    
    hiddenInput.onfocus = () => {
        if (window.orientation === 90 || window.orientation === -90) {
            window.scroll(0, document.querySelector('header').offsetHeight + 20);
        }   
    }
}

function inputFocus() {
    let hiddenInput = document.querySelector('.hiddenInput');
    let input = document.querySelector('input[type=tel]');
    let cursor = document.querySelector('.cursor');

    document.querySelector('.inputBlock').onclick = () => {
        hiddenInput.focus();
        cursor.style.display = 'block';
    }

    hiddenInput.oninput = () => {
        input.value = hiddenInput.value;

        if (input.value === '') {
            cursor.style.display = 'block';
        } else {
            cursor.style.display = 'none';
        }
    }

    hiddenInput.onblur = () => {
        cursor.style.display = 'none';
    }
}

window.onload = () => {
    wrapperHeight()
    inputFocus();
    // scrollToInput()
}

window.onorientationchange = () => {
    if (isAndroid) {
        location.reload();
    }
}