class CajaGrande extends HTMLElement {
    static get observedAttributes() {
        return ["img","cat","title","desc","autor","date"];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }

        render(){
            this.shadowRoot.innerHTML = `
           
            <link rel="stylesheet" href="./src/components/bigCard/bigCard.css">
   
            <div class="card">
                <img src="${this.img}" alt="">
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
        `;
        }
}

customElements.define("caja-grande", CajaGrande)
export default CajaGrande
