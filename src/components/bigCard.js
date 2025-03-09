class Caja1 extends HTMLElement {
    static get observedAttributes() {
        return ["img","cat","title","desc"];
    }
    
    


    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallBack(){
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
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f5f5f5;
                }
                .card {
                    width: 400px;
                    background: white;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .card-image {
                    height: 200px;
                    background: url('image.jpg') center/cover;
                }
                .card-content {
                    padding: 16px;
                }
                .category {
                    color: #888;
                    font-size: 14px;
                    text-transform: uppercase;
                }
                .title {
                    font-size: 18px;
                    font-weight: bold;
                    margin: 8px 0;
                }
                .description {
                    color: #555;
                    font-size: 14px;
                }
                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 16px;
                    font-size: 12px;
                    color: #777;
                }
                .authors {
                    display: flex;
                    align-items: center;
                }
                .authors img {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    margin-right: 4px;
                }
            </style>
            
                <div class="card">
        <div class="card-image"></div>
        <div class="card-content">
            <span class="category">${this.title}</span>
            <h2 class="title">Revolutionizing software development with cutting-edge tools</h2>
            <p class="description">Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software...</p>
            <div class="card-footer">
                <div class="authors">
                    <img src="author1.jpg" alt="Remy Sharp">
                    <img src="author2.jpg" alt="Travis Howard">
                    <span>Remy Sharp, Travis Howard</span>
                </div>
                <span class="date">July 14, 2021</span>
            </div>
        </div>
    </div>
        `;
        }
    
}

customElements.define("caja-grande", Caja1)
export default Caja1
