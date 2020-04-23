import { LitElement, html } from "lit-element";

class PortfolioHeader extends LitElement {

    static get properties() {
        return {
            isMenuOpen: {
                type: Boolean
            }
        };
    }

    render() {
        return html `
            <style>  
                header {
                    position: sticky;
                    z-index: 100;
                    text-color: black;
                    display: flex;
                    position: relative;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.5rem 1rem;
                    background-color: #f7fafc;
                }

                header button[type="button"] {
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
                }

                header .title {
                    display: inline-block;
                    position: bsolute;
                    margin: initial;
                    left: 50%;
                    font-weight: 700;
                    font-size: 1.5rem;
                }

                header .links {
                    display: flex;
                    justify-content: space-between;
                }

                svg {
                    vertical-align: bottom;
                }
            </style>

            <header>
                <button type="button" class="menu" @click="${this.onMenuClick}">
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
                    <link-linkedin href="https://www.linkedin.com/in/smagadevane/"
                        title="Check this awesome guy's profile on Linkedin !">
                    </link-linkedin>
                </div>
            </header>

            
            <portfolio-menu ?open=${this.isMenuOpen}></portfolio-menu>
        `;
    }

    onMenuClick() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}

customElements.define('portfolio-header', PortfolioHeader);