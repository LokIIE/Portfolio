import {
    LitElement,
    html
} from "lit-element";

class Menu extends LitElement {

    static get properties() {
        return {
            open: {
                type: Boolean
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
                    z-index: 50;
                }

                #sidenav-container.open {
                    transform: translateX(0%);
                    transition: 0.5s;
                }

                #sidenav-container > .bg {
                    position: absolute;
                    visibility: hidden;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #000;
                    pointer-events: none;
                    opacity: 0;
                    transition: 0.3s;
                }

                #sidenav-container.open > .bg {
                    visibility: visible;
                    opacity: 0.6;
                    transition: 0.3s;
                }

                #sidenav {
                    background-color: #EEE;
                    pointer-events: auto;
                    position: absolute;
                    width: 250px;
                    height: 100%;
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
                    color: gray;
                }

                #sidenav a {
                    text-decoration: none;
                }
                
                #sidenav > ul {
                    display: inline-block;
                    height: 100%;
                    list-style: none;
                    margin-block-start: 0px;
                    margin-block-end: 0px;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    padding-inline-start: 0px;
                    width: 100%;
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
                    background-color: lightskyblue;
                    color: black;
                    font-weight: bolder;
                    transition: 0.5s;
                }
                
                @media screen and (max-height: 450px) {
                    ul > li > * {
                        font-size: 0.9rem;
                        transform: scale(0.9);
                    }
                }

                hr {
                    margin-block-start: 0em;
                    margin-block-end: 0em;
                }
            </style>

            
            <nav id="sidenav-container" class="${this.open ? 'open' : ''}">
                <div class="bg"></div>
                <div id="sidenav">
                    <ul>
                        <li class="level-one"><a href="./list.html">Projets</a></li>
                        <li class="level-two"><a href="./portfolio.html">Portfolio</a></li>
                        <li class="level-two"><a href="./iiens.html">IIEns</a></li>
                        <li class="level-two"><a href="./custom-yaac.html">Custom YAAC</a></li>
                        <li class="level-one"><a href="http://magadeva.iiens.net/cv-2020.pdf" target="_blank">CV</a></li>
                        <hr style="background-color: white;"/>
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
            </nav>
        `;
    }
}

customElements.define('portfolio-menu', Menu);