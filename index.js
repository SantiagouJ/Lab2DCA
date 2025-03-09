import * as components from "./src/components/indexPadre.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    connectedCallBack(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
            <h1>Hola Mateo</h1>
            


        `
    }
}
customElements.define("app-container", AppContainer)