import * as components from "./src/components/indexPadre.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
            <style>
            :host {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                justify-content: center;
            }
            </style>

            <caja-grande title="Revolutionizing software development with cutting-edge tools" desc="Our latest engineering tools are designed to streamline workflows and boost productivity." cat="Comercio" img="./public/photos/img1.jpg" autor="Remy Sharp, Travis Howard" date="July 14 2021"></caja-grande>
            <caja-grande title="Innovative product features that drive success" desc="Explore the key features of our latest product release that are helping businesses achieve their goals. " cat="Ingeneria" img="./public/photos/img2.jpg" autor="Erica Johns" date="May 24 2024"></caja-grande>


        `
    }
}
customElements.define("app-container", AppContainer)