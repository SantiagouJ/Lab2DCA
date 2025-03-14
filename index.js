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
            cat="Engineering"
            title="The future of AI in software engineering"
            autor="Kate Morrison"
            date="July 14, 2021"
            desc="Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software"></caja-media>

            <caja-media
            class="card"
            cat="Product"
            title="Driving growth with user-centric product design"
            autor="Cindy Baker"
            date="July 14, 2021"
            desc="Our user-centric product design approach is driving significant growth. Learn about the strategies we employ to create products that resonate with users."></caja-media>

            <caja-media
            class="card"
            cat="Design"
            title="Embracing minimalism in modern design"
            autor="Agnes Walker, Trevor Henderson"
            date="July 14, 2021"
            desc="Minimalism is a key trend in modern design. Discover how our design team incorporates minimalist principles to create clean and impactful user experiences."></caja-media>

            <caja-media
            class="card"
            cat="Company"
            title="Cultivating a culture of innovation"
            autor="Travis Howard"
            date="July 14, 2021"
            desc="Innovation is at the heart of our company culture. Learn about the initiatives we have in place to foster creativity and drive groundbreaking solutions."></caja-media>

            <caja-media
            class="card"
            cat="Engineering"
            title="Advancing cybersecurity with next-gen solutions"
            autor="Agnes Walker, Trevor Henderson"
            date="July 14, 2021"
            desc="Our next-generation cybersecurity solutions are setting new standards in the industry. Discover how we protect our clients from evolving cyber threats."></caja-media>

            <caja-media
            class="card"
            cat="Product"
            title="Enhancing customer experience through innovation"
            autor="Travis Howard"
            date="July 14, 2021"
            desc="Our innovative approaches are enhancing customer experience. Learn about the new features and improvements that are delighting our users."></caja-media>

            <caja-media
            class="card"
            cat="Engineering"
            title="Pioneering sustainable engineering solutions"
            autor="Kate Morrison"
            date="July 14, 2021"
            desc="Learn about our commitment to sustainability and the innovative engineering solutions we're implementing to create a greener future. Discover the impact of"></caja-media>

            <caja-media
            class="card"
            cat="Product"
            title="Maximizing efficiency with our latest product updates"
            autor="Cindy Baker"
            date="July 14, 2021"
            desc="Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that"></caja-media>
            

            </section>
            <dial-numbers></dial-numbers>


        `
    }
}
customElements.define("app-container", AppContainer)