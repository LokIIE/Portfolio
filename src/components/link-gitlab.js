import { LitElement, html } from "lit-element";

class LinkGitlab extends LitElement {

    static get properties() {
        return {
            href: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.href = "#";
    }

    render() {
        return html `
            <style>
                :host {
                    color: black;
                }

                svg {
                    width: 32px;
                    height: 32px;
                    vertical-align: bottom;
                }

                a {
                    display: block;
                    text-decoration: none;
                    transition: 0.2s;
                }

                a:-webkit-any-link {
                    color: inherit;
                }

                
                a > svg {
                    transition: transform 0.2s, padding-right 0.2s;
                }

                a:hover > svg {
                    transition: transform 0.2s, padding-right 0.2s;
                    padding-right: 2px;
                    transform: scale(1.2);
                }
            </style>
            <a class="external-link" href="${this.href}" target="_blank" rel="noreferrer" aria-label="Gitlab repository link">
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
                <slot></slot>
            </a>
        `;
    }
}

customElements.define('link-gitlab', LinkGitlab);