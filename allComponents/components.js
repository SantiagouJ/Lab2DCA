export class Caja1 extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    width: 300px;
                    height: 300px;
                    border: 1px solid;
                }
            </style>
            
            <div>
                <h1>Hola mundo</h1>
            </div>
        `

    }
}