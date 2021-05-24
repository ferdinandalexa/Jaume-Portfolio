class ContactIcon extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: "open"});
        this.rrss = this.getAttribute("rrss");
        
    }

    static get observedAttributes()
    {
        return ["rrss"];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if(oldValue !== newValue)
            this[attr] = newValue;

        this.render();
    }

    getTemplate()
    {
        const template = document.createDocumentFragment();
        template.innerHTML =
        `
            <figure>
                <svg class="icon-rrss" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                    <use xlink:href="/static/icons/contact-icons.svg#${this.rrss}"></use>
                </svg>
            </figure>
            ${this.getStyles()}
        `
        return template;
    }

    getStyles()
    {
        return `
        <style>
            :host{
                display: inline-block;
            }

            :host > figure{
                background: #FFFFFF;            
                border-radius: 4px;
                border: 2px solid #310A90;
                box-sizing: border-box;
                display: grid;
                height: 44px;
                margin: 0;
                place-items: center;
                width: 44px;
            }

            :host .icon-rrss{
                fill: #310A90;
                height: 24px;
                width: 24px;
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
customElements.define("contact-icon", ContactIcon);