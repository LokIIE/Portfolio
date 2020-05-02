import {
    LitElement,
    html
} from "lit-element";

class Menu extends LitElement {

    static get properties() {
        return {
            open: {
                type: Boolean,
                reflect: true
            }
        };
    }

    render() {
        return html `
            <style>
                #sidenav-container {
                    position: fixed;
                    font-size: 1rem;
                    height: 100%;
                    top: 0;
                    left: 0;
                    padding-top: 52px;
                    pointer-events: none;
                    transition: transform 0.5s;
                    width: 100%;
                    z-index: 10000;
                }

                #sidenav-container.open {
                    transform: translateX(0%);
                    transition: 0.5s;
                }

                .backdrop {
                    position: fixed;
                    visibility: hidden;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--menu-backdrop-bg);
                    opacity: 0;
                    transition: 0.3s;
                    z-index: 9999;
                }

                #sidenav-container.open + .backdrop {
                    visibility: visible;
                    opacity: 0.6;
                    transition: 0.3s;
                }

                #sidenav {
                    background: var(--menu-bg);
                    pointer-events: auto;
                    position: absolute;
                    width: 250px;
                    height: 100%;
                    display: flex;
                    flex-flow: column;
                }

                #sidenav-container #sidenav {
                    transform: translateX(-100%);
                    transition: 0.5s;
                }

                #sidenav-container.open #sidenav {
                    transform: translateX(0%);
                    transition: 0.5s;
                }

                #sidenav * {
                    color: var(--text-color);
                }

                #sidenav a {
                    text-decoration: none;
                }
                
                #menu-head {
                    padding: 0.5rem 1.5rem;
                    border-bottom: 2px solid var(--secondary-color);
                }

                #menu-head .author {
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                #menu-head .subject {
                    filter: brightness(0.8);
                }

                #menu-content {
                    display: block;
                    height: 100%;
                    overflow: hidden;
                }

                #menu-content ul {
                    list-style: none;
                    margin-block-start: 0px;
                    margin-block-end: 0px;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    padding-inline-start: 0px;
                    width: 100%;
                }

                #menu-content .pages {
                    border-bottom: 1px solid var(--secondary-color);
                }

                #menu-content .ext-pages {
                    display: flex;
                    flex-flow: column;
                }

                li > * {
                    display: block;
                    padding-top: 12px; 
                    padding-bottom: 12px;
                    transition: 0.5s;
                }

                li.level-one > * {
                    padding-left: 24px;
                    font-size: 1rem;
                }

                li.level-two > * {
                    padding-left: 40px;
                    font-size: 0.95rem;
                }

                li:hover > * {
                    background-color: var(--menu-item-bg-hover);
                    color: black;
                    font-weight: bolder;
                    transition: 0.3s;
                }
                
                @media screen and (max-height: 450px) {
                    ul > li > * {
                        font-size: 0.9rem;
                        transform: scale(0.9);
                    }
                }
            </style>

            <nav id="sidenav-container" class="${this.open ? 'open' : ''}">
                <div id="sidenav">
                    <div id="menu-head">
                        <div class="author">S. Magadevane</div>
                        <div class="subject">Portfolio</div>
                    </div>
                    <div id="menu-content">
                        <ul class="pages">
                            <li class="level-one"><a href="./list.html">Projets</a></li>
                            <li class="level-two"><a href="./portfolio.html">Portfolio</a></li>
                            <li class="level-two"><a href="./iiens.html">IIEns</a></li>
                            <li class="level-two"><a href="./custom-yaac.html">Custom YAAC</a></li>
                            <li class="level-one"><a href="http://magadeva.iiens.net/cv-2020.pdf" target="_blank" rel="noreferrer">CV</a></li>
                        </ul>
                        <ul class="ext-pages">
                            <li class="level-one">
                                <link-linkedin href="https://www.linkedin.com/in/smagadevane/" title="Check this awesome guy's profile on Linkedin !">
                                    LinkedIn
                                </link-linkedin>
                            </li>
                            <li class="level-one">
                                <link-github href="https://github.com/LokIIE" title="Check out my projects on Github !">
                                    Mon Github
                                </link-github>
                            </li>
                            <li class="level-one">
                                <link-gitlab href="https://gitlab.com/LokIIE" title="Visit my Gitlab to check what I'm working on !">
                                    Mon Gitlab
                                </link-gitlab>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="backdrop" @click="${this.closeMenu}"></div>
        `;
    }

    
    closeMenu() {
        this.open = false;
        this.dispatchEvent(new CustomEvent('menu-closed'), {
            detail: { 
                value: false 
            } 
        });
    }
}

customElements.define('portfolio-menu', Menu);