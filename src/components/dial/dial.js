class Dial extends HTMLElement{
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    } 

    render(){
            this.shadowRoot.innerHTML = `
            
            <link rel="stylesheet" href="./src/components/dial/dial.css">

        <div class="dial-container"> 

            <button class="btn1">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>10</button>


        </div>
            
            
            `

    }

    

}

customElements.define("dial-numbers", Dial)
export default Dial