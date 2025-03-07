export class Caja1 extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = `
            <style>
                h1 {
                    border: 1px solid;
                }
            </style>
            
            <h1>Hola mundo</h1>
        `

    }
}