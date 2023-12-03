const select = document.getElementsByTagName('select');
const disability = document.getElementById('disability');
const textArea = document.getElementById('disability-description');
const submit = document.querySelector('.button');

let selectArray = [];


for (let i=0; i < select.length; i++) {
    selectArray.push(select.item(i));
}


selectArray.forEach((select) => {
    select.addEventListener('change', (e) => {
        if (!e.target.firstElementChild.selected) {
            e.target.setAttribute('style', 'color:#56348c;');
        }
        if (disability.value === 'no') {
            textArea.value = '';
            textArea.setAttribute('placeholder', '');
        }
    });
});

submit.addEventListener('click', (e) => { 
    for (let i=0; i < selectArray.length; i++) {
        if (selectArray[i].firstElementChild.selected) {
            selectArray[i].setAttribute('style', 'color:red;');
            e.preventDefault();
        }
    }
    if (disability.value === 'yes' && textArea.value === '') {
        textArea.setAttribute('placeholder', 
        'Please write a description. If you do not have a disability please setect no');
        e.preventDefault();
    }
});
