/* 
FORM VALIDATION 
The following code is to validate users selection on selet/option and textarea elements
*/

const select = document.getElementsByTagName('select');
const disability = document.getElementById('disability');
const textArea = document.getElementById('disability-description');
const submit = document.querySelector('.button');

let selectArray = [];

//Push HTML collection into an array
for (let i=0; i < select.length; i++) {
    selectArray.push(select.item(i));
}

//Add event listener to each select element
//Visual changes returned to normal if user selections are valid
selectArray.forEach((select) => {
    select.addEventListener('change', (e) => {
        //Set option element style to normal for valid selection
        if (!e.target.firstElementChild.selected) {
            e.target.setAttribute('style', 'color:#56348c;');
        }
        //Remove prompt message when user selects 'no' on disabillity
        if (disability.value === 'no') {
            textArea.value = '';
            textArea.setAttribute('placeholder', '');
        }
    });
});

//Add event listener to submit button
//Visual changes for invalid selections
submit.addEventListener('click', (e) => {
    //Set select element color style to red for invalid selection 
    for (let i=0; i < selectArray.length; i++) {
        if (selectArray[i].firstElementChild.selected) {
            selectArray[i].setAttribute('style', 'color:red;');
            //submission disabled
            e.preventDefault();
        }
    }
    //Prompt user to fill in textarea element if yes selected.
    if (disability.value === 'yes' && textArea.value === '') {
        textArea.setAttribute('placeholder', 
        'Please write a description. If you do not have a disability please setect no');
        //submission disabled
        e.preventDefault();
    }
});
