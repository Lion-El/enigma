const ulChild = document.getElementsByClassName('menu-label');
let menuName = [];

for (let i=0; i < ulChild.length; i++) {
    menuName.push(ulChild[i].children);
}

const mission = menuName[0];


    mission.textContent.addEventlistener('mouseover', (e) => {
        if (e.target === 'Mission') {
            console.log(menuName[0]);
        } else {
            console.log('???');
        };

        if (e.target === 'Mission') {
            console.log(menuName[1]);
        } else {
            console.log('???');
        };

        if (e.target === 'Mission') {
            console.log(menuName[2]);
        } else {
            console.log('???');
        };
    });

    const array = [1, 2, 3, 'you wish you could be me!'];

    array.forEach((element) => console.log(element));

    
 