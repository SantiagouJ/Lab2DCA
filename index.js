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
            <link rel="stylesheet" href="style.css" />

            <div class="title">

                <h1>Blog</h1>
                <p>Stay in the loop with the latest about our products</p>

            </div>

            <categorie-nav></categorie-nav>
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
                desc="Stay ahead of the curve with the latest design trends and insights."
                autor="Kate Morrison"
                cat="Design"
                date="July 14, 2021"></caja-peque>

                <section class="db-card">
                    
                    <caja-peque 
                    class="card-no-img  "
                    title="Our company's journey: milestones and achievements"
                    desc="Take a look at our company's journey and the milestones we've achieved along the way. From..."
                    autor="Cindy Baker"
                    cat="Company"
                    date="July 14, 2021"></caja-peque>
                    
                    <caja-peque 
                    class="card-no-img"
                    title="Pioneering sustainable engineering solutions"
                    desc="Learn about our commitment to sustainability and the innovative engineering solutions we're..."
                    autor="Agnes Walker, Trevor Henderson"
                    cat="Engineering"
                    date="July 14, 2021"></caja-peque>
                    
                </section>

                <caja-peque
                class="card"
                img="./public/photos/img5.jpg"
                title="Maximizing efficiency with our latest product updates"
                desc="Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and..."
                autor="Travis Howard"
                cat="Product"
                date="July 14, 2021"></caja-peque>

            </section>

                <div class="title">

                    <h1>Latest</h1>
                    
                </div>

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
            <dial-numbers></dial-numbers>


        `
    }
}
customElements.define("app-container", AppContainer)