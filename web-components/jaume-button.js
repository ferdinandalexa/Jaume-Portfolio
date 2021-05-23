class JaumeButton extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: "open"});
        this.url = this.getAttribute("url")
        this.primary = this.getAttribute("primary");
        this.secondary = this.getAttribute("secondary");

        (this.secondary === "") || this.setAttribute("primary", "")
    }

    static get observedAttributes()
    {
        return ["type"];
    }

    attributeChangedCallback(attr, oldValue, newValue)
    {
        if(oldValue !== newValue)
            this[attr] = newValue;

        this.render();
    }

    getTemplate()
    {
        const template = document.createElement('template');
        template.innerHTML =
        `
            <a>
                <slot></slot>
            </a>
            ${this.getStyles()}
        `
        return template;
    }

    getStyles()
    {
        return `
        <style>
            :host{
                border-radius: 4px;
                border: 2px solid #310A90;
                box-sizing: border-box;
                display: block;
                font-family: sans-serif;
                font-size: 14px;
                font-weight: bold;
                height: 49px;
                letter-spacing: 1.25px;
                line-height: 23px;
                max-width: max-content;
                min-width: 112px;
                padding: 13px 24px;
                text-align: center;
                text-transform: uppercase;
            }

            :host([primary]){
                background: #310A90;
                color: white;
            }
            
            :host([secondary]){
                background: transparent;
                color: #310A90;
            }
        </style>
        `
    }

    render()
    {
        this.shadowRoot.innerHTML = this.getTemplate().innerHTML;
    }

    connectedCallback()
    {
        this.render();
    }
}
customElements.define("jaume-button", JaumeButton);