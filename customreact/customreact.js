function customrender(reactelement , container){

    /* old code (traditonal way )

    const DomElement = document.createElement(reactelement.type)
    DomElement.innerHTML = reactelement.children
    DomElement.setAttribute('href', reactelement.props.href)
    DomElement.setAttribute('target', reactelement.props.target)

    container.appendChild(DomElement)*/

    

    // below is the new way 

    const DomElement = document.createElement(reactelement.type)
    DomElement.innerHTML = reactelement.children
    for (const prop in reactelement.props){
        if (prop === 'children') continue;
        DomElement.setAttribute(prop , reactelement.props[prop])
    }

    container.appendChild(DomElement)


}



const reactelement = {
    type : 'a',
    props:{
        href: 'https://google.com/',
        target: '_blank '

    },
    children : 'click on me to visit google'
}


const maincontainer = document.getElementById("root")

customrender (reactelement,maincontainer)