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

            .middle-card{
            
                width: 80%;
                height: 400px;
                border: solid black;
                display: flex;
                justify-self: center;
                justify-content: space-between;
            
            }
            .highlight-card {
                width: 80%;
                height: 500px;
                border: solid black;
                display: flex;
                justify-self: center;
                justify-content: space-between;
            }
            .db-card {
                width: 30%;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .card-no-img{
                background: white;
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 50%;
            }
            .foter-card{

                width: 80%;
                height: 1000px;
                border: solid black;
                display: flex;
                justify-self: center;
                justify-content: space-between;
                flex-wrap: wrap;
            
            }

            </style>

            <section class="highlight-card">

            <caja-grande 
            title="Revolutionizing software development with cutting-edge tools" 
            desc="Our latest engineering tools are designed to streamline workflows and boost productivity." 
            cat="Comercio" 
            img="./public/photos/img1.jpg" 
            autor="Remy Sharp, Travis Howard" 
            date="July 14 2021"></caja-grande>

            <caja-grande 
            title="Innovative product features that drive success" 
            desc="Explore the key features of our latest product release that are helping businesses achieve their goals." 
            cat="Ingeneria" 
            img="./public/photos/img2.jpg" 
            autor="Erica Johns" 
            date="May 24 2024"></caja-grande>
            

            </section>

            <section class="middle-card">
            
                <caja-peque 
                class="card"
                img="./public/photos/img3.jpg"
                title="Designing for the future: trends and insights"
                desc="Stay ahead of the curve with the latest design trends and insights."></caja-peque>

                <section class="db-card">

                    <caja-peque class="card-no-img" ></caja-peque>
                    <caja-peque class="card-no-img"></caja-peque>

                </section>

                <caja-peque
                class="card" 
                img="./public/photos/img4.jpg"></caja-peque>

            </section>

            <section class="foter-card">

            <caja-media
            class="card"
            title="Designing for the future: trends and insights"
            desc="Stay ahead of the curve with the latest design trends and insights."></caja-media>

            <caja-media
            class="card"
            title="Designing for the future: trends and insights"
            desc="Stay ahead of the curve with the latest design trends and insights."></caja-media>

            <caja-media
            class="card"
            title="Designing for the future: trends and insights"
            desc="Stay ahead of the curve with the latest design trends and insights."></caja-media>

            <caja-media
            class="card"
            title="Designing for the future: trends and insights"
            desc="Stay ahead of the curve with the latest design trends and insights."></caja-media>

            <caja-media
            class="card"
            title="Designing for the future: trends and insights"
            desc="Stay ahead of the curve with the latest design trends and insights."></caja-media>

            <caja-media
            class="card"
            title="Designing for the future: trends and insights"
            desc="Stay ahead of the curve with the latest design trends and insights."></caja-media>

            <caja-media
            class="card"
            title="Designing for the future: trends and insights"
            desc="Stay ahead of the curve with the latest design trends and insights."></caja-media>

            <caja-media
            class="card"
            title="Designing for the future: trends and insights"
            desc="Stay ahead of the curve with the latest design trends and insights."></caja-media>
            

            </section>


        `
    }
}
customElements.define("app-container", AppContainer)