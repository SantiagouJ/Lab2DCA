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
            <style>
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f9f9f9;
}
.container {
    max-width: 1000px;
    margin: 0 auto;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.categories button {
    background: none;
    border: 1px solid #ccc;
    padding: 10px 14px;
    margin-right: 8px;
    cursor: pointer;
    border-radius: 5px;
}
.search {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
}
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
}
.card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}
.card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}
.card-content {
    padding: 20px;
}
.category {
    font-size: 14px;
    color: #555;
    text-transform: uppercase;
}
.title {
    font-size: 22px;
    font-weight: bold;
    margin: 10px 0;
}
.description {
    color: #777;
    font-size: 16px;
}
.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #777;
    padding: 20px;
}
            </style>
            
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
