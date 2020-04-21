import { LitElement, html } from "lit-element";

class PortfolioHeader extends LitElement {

    static get properties() {
        return {
        };
    }

    render() {
        return html `
            <style>        
                :host {
                    text-color: black;
                }

                :host header {
                    display: flex;
                    position: relative;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.5rem 1rem;
                    background-color: #f7fafc;
                }

                :host button[type="button"] {
                    -webkit-appearance: button;
                    display: block;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    line-height: inherit;
                    color: inherit;
                    background-color: transparent;
                    background-image: none;
                    font-family: inherit;
                    font-size: 100%;
                    text-transform: none;
                    margin: 0;
                }

                :host .title {
                    display: inline-block;
                    position: bsolute;
                    margin: initial;
                    left: 50%;
                    font-weight: 700;
                    font-size: 1.5rem;
                }

                :host .links {
                    width: 8rem;
                    display: flex;
                    justify-content: space-between;
                }
            </style>

            <header>
                <button type="button" class="menu">
                    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'>
                        <title>ionicons-v5-j</title>
                        <line x1='80' y1='160' x2='432' y2='160' style='fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/>
                        <line x1='80' y1='256' x2='432' y2='256' style='fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/>
                        <line x1='80' y1='352' x2='432' y2='352' style='fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/>
                    </svg>
                </button>
                <h2 class="title">
                    <slot></slot>
                </h2>
                <div class="links">
                    <link-github href="https://github.com/LokIIE" title="Check out my projects on Github !"></link-github>
                    <link-linkedin href="https://www.linkedin.com/in/smagadevane/"
                        title="Check this awesome guy's profile on Linkedin !">
                    </link-linkedin>
                    <link-gitlab href="https://gitlab.com/LokIIE" title="Visit my Gitlab to check what I'm working on !">
                    </link-gitlab>
                </div>
            </header>
        `;
    }
}

customElements.define('portfolio-header', PortfolioHeader);