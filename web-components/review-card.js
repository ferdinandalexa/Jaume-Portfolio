class ReviewCard extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: "open"});
        this.avatar = this.getAttribute("avatar");
    }

    getTemplate()
    {
        const template = document.createElement('template');
        template.innerHTML =
        `   
            <div class="container">
                <article class="ReviewCard">
                    <img src="${this.avatar}" alt="foto de perfil de cliente"/>
                    <p>
                        <slot name="review"></slot>
                    </p>
                    <h3>
                        <slot name="info"></slot>
                    </h3>
                </article>
                <div class="Effect">
                    <div class="Effect--Border"></div>
                </div>
            </div>
            ${this.getStyles()}
        `
        return template;
    }

    getStyles()
    {
        return `
        <style>
            :host{
                color: #310A90;
                display: grid;      
                position: relative;
            }

            .ReviewCard, .Effect{
                border-radius: 24px;
            }
            
            .ReviewCard{
                backdrop-filter: blur(40px);
                background-color: rgba(255, 255, 255, 0.2);
                display: grid;
                overflow: hidden;
                row-gap: 24px;
                padding: 1rem;
                place-items: center;
            }
            
            .ReviewCard > *{
                margin: 0;
            }

            .ReviewCard > img{
                height: 80px;
                width: 80px;
                border-radius: 50%;
            }

            .ReviewCard > p{
                font: bold 1rem/1.6180000305175781rem Oxygen; 
                text-align: center;
            }

            .ReviewCard > h3{
                font: inherit;
                opacity: 50%;
                text-align: center;
                text-transform: uppercase;
            }

            .Effect {
                bottom: 0;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
            }

            .Effect--Border {              
                border-radius: inherit;
                display: inline-block;
                height: 100%;
                position: relative;
                width: 100%;
                z-index: 0;
            }

            .Effect--Border:before {
                background: linear-gradient(to right bottom, rgba(255,255,255,25%), transparent 50%);
                border-radius: inherit;
                bottom: 0;
                content: "";
                left:0;
                mask: 
                    linear-gradient(#fff 0 0) content-box, 
                    linear-gradient(#fff 0 0);
                mask-composite: exclude;
                padding: 2px;
                position:absolute;
                right:0;
                top:0;
                z-index:-1;
            }
            
            @media screen and (min-width: 769px){
                .ReviewCard{
                    padding: 80px;
                }

                .ReviewCard > p{
                    font: bold 2.125rem/3.4382500648498535rem Oxygen; 
                }
                
                .ReviewCard > h3{
                    font: regular 0.75rem/1.2135000228881836rem Poppins; 
                }
            }
        </style>
        `
    }

    render()
    {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback()
    {
        this.render();
    }
}
customElements.define("review-card", ReviewCard);