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
                    background: var(--header-bg);
                    min-height: 52px;
                    min-width: 250px;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 100;
                    border-bottom: 1px solid var(--secondary-color);
                    z-index: 20000;
                }

                header > .content {
                    align-items: center;
                    display: flex;
                    justify-content: space-between;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                    width: 100%;
                }

                header button[type="button"] {
                    -webkit-appearance: button;
                    display: block;
                    border: none;
                    cursor: pointer;
                    line-height: inherit;
                    color: inherit;
                    background-color: transparent;
                    background-image: none;
                    font-family: inherit;
                    font-size: 1rem;
                    text-transform: none;
                }

                button:focus {
                    outline: none;
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

                svg.menu {
                    vertical-align: bottom;
                    stroke: var(--menu-ic-color);
                }
                
                .content > * {
                    padding-left: 16px;
                    padding-right: 16px;
                }

                portfolio-menu {
                    height: calc(100% - 52px);
                }
            </style>

            <header>
                <div class="content">
                    <button type="button" class="menu" @click="${this.onMenuClick}">
                        <svg class="menu" xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'>
                            <title>ionicons-v5-j</title>
                            <line x1='80' y1='160' x2='432' y2='160' style='fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/>
                            <line x1='80' y1='256' x2='432' y2='256' style='fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/>
                            <line x1='80' y1='352' x2='432' y2='352' style='fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px'/>
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
                </div>
            </header>

            <portfolio-menu ?open=${this.isMenuOpen} @menu-closed="${this.onMenuClosed}"></portfolio-menu>
        `;
    }

    onMenuClick() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    onMenuClosed() {
        this.isMenuOpen = false;
    }
}

customElements.define('portfolio-header', PortfolioHeader);