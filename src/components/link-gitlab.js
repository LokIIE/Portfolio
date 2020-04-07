(function () {

    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            :host, svg {
                width: 32px;
                height: 32px;
            }

            svg:hover {
                transition: transform 0.2s;
                transform: scale(1.2);
            }

            a {
                text-decoration: none;
            }
        </style>
        <a class="external-link" href="#" target="_blank">
            <svg width="24" height="24" class="tanuki-logo" viewBox="0 0 36 36">
                <path class="tanuki-shape tanuki-left-ear" fill="#e24329"
                    d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"></path>
                <path class="tanuki-shape tanuki-right-ear" fill="#e24329"
                    d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"></path>
                <path class="tanuki-shape tanuki-nose" fill="#e24329" d="M18,34.38 3,14 33,14 Z"></path>
                <path class="tanuki-shape tanuki-left-eye" fill="#fc6d26" d="M18,34.38 11.38,14 2,14 6,25Z">
                </path>
                <path class="tanuki-shape tanuki-right-eye" fill="#fc6d26" d="M18,34.38 24.62,14 34,14 30,25Z">
                </path>
                <path class="tanuki-shape tanuki-left-cheek" fill="#fca326"
                    d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"></path>
                <path class="tanuki-shape tanuki-right-cheek" fill="#fca326"
                    d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"></path>
            </svg>
        </a>`;

    class LinkGitlab extends HTMLElement {
        constructor() {
            super();

            this._shadowRoot = this.attachShadow({
                mode: "open"
            });
            this._shadowRoot.appendChild(template.content.cloneNode(true));

            this.$aElement = this._shadowRoot.querySelector('a');
        }

        static get observedAttributes() {
            return ['href'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'href':
                    this._href = newValue;
                    this.$aElement.setAttribute('href', this._href);
                    break;
                default:
                    console.error(`Unknown property ${name}`);
                    break;
            }
        }

        get href() {
            return this._href;
        }

        set href(value) {
            this._href = value;
            this.$aElement.setAttribute('href', this._href);
        }
    }

    customElements.define('link-gitlab', LinkGitlab);
})();