class NewElement extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: "open"});
    }

    getTemplate()
    {
        const template = document.createElement('template');
        template.innerHTML =
        `
            <p>Hi, developer! I'm a new Web Component</p>
            ${this.getStyles()}
        `
        return template;
    }

    getStyles()
    {
        return `
        <style>
            p{
                font-family: sans-serif;
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
customElements.define("new-element", NewElement);