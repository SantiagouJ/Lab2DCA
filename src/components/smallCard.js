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
            
            <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .card {
                background: white;
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                width: 350px;
                height: 100%;

            }

            .card img:not([src]), 
            .card img[src=""] {
                display: none;
            }

            .card img {
                width: 100%;
                height: 250px;
                object-fit: cover;
            }

            .card-content {
                padding: 15px;
            }

            .card-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 11px;
                color: #777;
                padding: 15px;
            }


            </style>

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