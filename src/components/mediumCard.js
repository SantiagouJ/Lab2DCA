class CajaMedia extends HTMLElement {
    static get observedAttributes(){
        return ["cat","title","desc","autor","date"];
    }
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }

    render(){
        this.shadowRoot.innerHTML=`
        
            <style>
                .card {
                background: white;
                border-radius: 15px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                width: 550px;
                height: 250px;

            }

            .card-content {
                padding: 15px;
            }

            .card-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                color: #777;
                padding: 15px;
            }


            </style>


                <div class="card">
            <div class="card-content">
                <span class="category">${this.cat}</span>
                <h2 class="title">${this.title}</h2>
                <p class="description">${this.desc}</p>
            </div>
            <div class="card-footer">
                <span>${this.autor}</span>
                <span>${this.date}</span>
            </div>
        </div>

        `
    }

}

customElements.define("caja-media", CajaMedia)
export default CajaMedia