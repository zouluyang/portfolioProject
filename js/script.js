let childElements = document.getElementById('nav').children;

const toggle = (event) => {
    let id = event.target.innerText.toLowerCase();

    console.log(document.getElementsByClassName(id)[0].style.display);

    switch (document.getElementsByClassName(id)[0].style.display) {
        case 'none':
            document.getElementsByClassName(id)[0].style.display = 'block';
            document.getElementsByTagName('main')[0].style.flex = '1';
            document.getElementsByTagName('header')[0].style.flex = '0';
            break;
        case 'block':
            document.getElementsByClassName(id)[0].style.display = 'none';
            document.getElementsByTagName('main')[0].style.flex = '0';
            document.getElementsByTagName('header')[0].style.flex = '1';
            break;
        default:
            document.getElementsByClassName(id)[0].style.display = 'block';
            document.getElementsByTagName('main')[0].style.flex = '1';
            document.getElementsByTagName('header')[0].style.flex = '0';
            break;
    }
}

for (let i = 0; i < childElements.length; i++) {
    childElements[i].addEventListener('click', toggle);
}