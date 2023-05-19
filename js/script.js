let childElements = document.getElementById('nav').children;
let mainElement = document.getElementsByTagName('main')[0];
let headerElement = document.getElementsByTagName('header')[0];

const toggle = (event) => {
    let id = event.target.innerText.toLowerCase();
    let targetElement = document.getElementsByClassName(id)[0];
    let exceptionElements = [];

    for (const element of childElements) {
        if (element.id !== id) {
            exceptionElements.push(element);
        }
    }

    switch (targetElement.hidden) {
        case false:
            if (mainElement.hasAttribute('hidden')) {
                mainElement.removeAttribute('hidden');
                targetElement.removeAttribute('hidden');
                mainElement.style.flex = '1';
                headerElement.style.flex = '0';
            } else {
                targetElement.setAttribute('hidden', '');
                mainElement.style.flex = '0';
                headerElement.style.flex = '1';
            }
            break;
        case true:
            targetElement.removeAttribute('hidden');
            mainElement.removeAttribute('hidden');
            for (const element of exceptionElements) {
                if (element.id !== id) {
                    document.getElementsByClassName(element.id)[0].setAttribute('hidden', '');
                }
            }
            mainElement.style.flex = '1';
            headerElement.style.flex = '0';
            break;
        default:
            console.log('invalid');
            break;
    }
}

for (let i = 0; i < childElements.length; i++) {
    childElements[i].addEventListener('click', toggle);
}

const returnHomePage = () => {
    mainElement.style.flex = '0';
    headerElement.style.flex = '1';
    mainElement.setAttribute('hidden', '');
}

document.getElementsByTagName('h1')[0].onclick = returnHomePage;