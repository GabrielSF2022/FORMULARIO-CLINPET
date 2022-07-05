let input1 = document.getElementById('input-name');

input1.addEventListener("focus", FocusFunction, true);
input1.addEventListener("blur", BlurFunction, true);

function FocusFunction() {
    input1.style.cssText = 
        'transition: all ease 300ms;'+
        'box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;'+
        'border: 2px solid #2daa6d';

}

function BlurFunction() {
    input1.style.cssText = 
    'border:'
}




let input2 = document.getElementById('input-idade');
input2.addEventListener("focus", myFocusFunction, true);
input2.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
    input2.style.cssText = 
        'transition: all ease 300ms;'+
        'box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;'+
        'border: 2px solid #2daa6d';

}

function myBlurFunction() {
    input2.style.cssText = 
    'border:'
}





let input3 = document.getElementById('input-email');
input3.addEventListener("focus", focus, true);
input3.addEventListener("blur", blur, true);

function focus() {
    input3.style.cssText = 
        'transition: all ease 300ms;'+
        'box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;'+
        'border: 2px solid #2daa6d';

}

function blur() {
    input3.style.cssText = 
    'border:'
}