class CajaPeque extends HTMLElement{
    static get observedAttributes() {
        return ["img","cat","title","desc","autor","date", "class"];
    }

    constructor() {
        super();
        this.attachShadow({mode:"open"});
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
            
            <link rel="stylesheet" href="./src/components/smallCard/smallCard.css">

         <div class="${this.class}">
            <img src="${this.img}" alt="">
            <div class="card-content">
                <span class="category">${this.cat}</span>
                <h4 class="title">${this.title}</h4>
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

customElements.define("caja-peque", CajaPeque)
export default CajaPeque