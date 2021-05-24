class TitleSection extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: "open"});
        this.uppercase = this.getAttribute("uppercase")
    }

    getTemplate()
    {
        const template = document.createElement('template');
        template.innerHTML =
        `
            <h2>
                <slot></slot>
            </h2>
            ${this.getStyles()}
        `
        return template;
    }

    getStyles()
    {
        return `
        <style>            
            h2{
                display: inline-block;
                background: #310A90;
                box-shadow: -4px 4px 0px #FFFFFF;
                color: white;
                padding: 4px 8px;
                font: inherit;
            }

            :host([uppercase]){
                text-transform: uppercase;
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
customElements.define("title-section", TitleSection);