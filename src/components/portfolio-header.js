(function () {

    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            @import url("../dist/main.css");

            :host {
                text-color: black;
            }
        </style>
        <header class="flex justify-between p-4 bg-gray-100">
            <button type="button" class="block focus:text-white focus:outline-none">
               Menu
            </button>
            <h2 class="font-bold text-2xl">
                <slot></slot>
            </h2>
            <div class="flex justify-between w-32">
                <link-github 
                    href="https://github.com/LokIIE" 
                    title="Check out my projects on Github !"></link-github>
                <link-linkedin 
                    href="https://www.linkedin.com/in/smagadevane/" 
                    title="Check this awesome guy's profile on Linkedin !">
                </link-linkedin>
                <link-gitlab 
                    href="https://gitlab.com/LokIIE"
                    title="Visit my Gitlab to check what I'm working on !">
                </link-gitlab>
            </div>
        </header>`;

    class PortfolioHeader extends HTMLElement {
        constructor() {
            super();

            this._shadowRoot = this.attachShadow({
                mode: "open"
            });
            this._shadowRoot.appendChild(template.content.cloneNode(true));
        }

        static get observedAttributes() {
            return [];
        }
    }

    customElements.define('portfolio-header', PortfolioHeader);
})();