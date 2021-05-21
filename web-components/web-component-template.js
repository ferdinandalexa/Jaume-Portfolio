class NewElement extends HTMLElement
{
    constructor()
    {
        super();
        console.log(this);
        this.paragraph = document.createElement('p');
    }

    connectedCallback()
    {
        this.paragraph.textContent = "Hi, developer! I'm a new Web Component.";
        this.innerHTML = 
        `<style> 
            p{
                font-family: sans-serif;
            }
        <style>`
        this.appendChild(this.paragraph);
    }
}
customElements.define("new-element", NewElement);