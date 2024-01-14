function customRender(reactElement, mainContainer) {


    // is tarike mein ek ek attribute add karna bahut tedious hai


    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // mainContainer.appendChild(domElement);


    const value = document.createElement(reactElement.type);
    value.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        value.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(value);
}

const reactElement = {
    // ye milta hai basically react ke through inside]
    // basically isko root mein inject karna
    type: 'a',
    props: {
        href: 'https://codeforces.com',
        target: '_blank'
    },
    children: 'Click me to visit Codeforces'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
