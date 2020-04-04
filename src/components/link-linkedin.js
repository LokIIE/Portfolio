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
            <svg viewBox="0 0 512 512" area-hidden="true">
                <path
                    d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                    fill="#0073B0"></path>
            </svg>
        </a>`;

    class LinkLinkedin extends HTMLElement {
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

    customElements.define('link-linkedin', LinkLinkedin);
})();