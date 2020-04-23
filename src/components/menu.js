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
                .sidenav {
                    font-size: 20px;
                    width: 0px;
                    height: 100%;
                    position: absolute;
                    z-index: 50;
                    left: 0;
                    top: 0;
                    background-color: #EEE;
                    overflow-x: hidden;
                    padding-top: 5rem;
                    transition: 0.5s;

                    list-style: none;
                    padding-inline-start: 0px;
                    margin-block-start: 0px;
                    margin-block-end: 0px;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                }

                .sidenav * {
                    color: gray;
                    display: block;
                    transition: 0.3s;
                }

                .sidenav a {
                    text-decoration: none;
                }
            
                .sidenav.open {
                    width: 250px;
                    transition: 0.5s;
                }

                .sidenav > li {
                    margin-top: 12px; 
                    margin-bottom: 12px;
                    text-decoration: none;
                }

                .sidenav li > *:not(ul) {
                    margin: 6px 0;
                    padding: 0 2rem;
                }

                .sidenav li ul {
                    list-style: none;
                    font-size: 0.8rem;
                }
                
                .sidenav li:hover > *:not(ul):hover {
                    background-color: #CCC;
                    color: black;
                }
                
                @media screen and (max-height: 450px) {
                    .sidenav > li > * {
                        font-size: 0.8rem;
                        transform: scale(0.8);
                    }
                }

                hr {
                    margin-block-start: 0em;
                    margin-block-end: 0em;
                }
            </style>

                
            <ul class="sidenav ${this.open ? 'open' : ''}">
                <li>
                    <a href="./list.html">Projets</a>
                    <ul>
                        <li><a href="./portfolio.html">Portfolio</a></li>
                        <li><a href="./iiens.html">IIEns</a></li>
                        <li><a href="./custom-yaac.html">Custom YAAC</a></li>
                    </ul>
                </li>
                <li><a href="http://magadeva.iiens.net/cv-2020.pdf" target="_blank">CV</a></li>
                <hr style="background-color: white;"/>
                <li>
                    <link-linkedin href="https://www.linkedin.com/in/smagadevane/" title="Check this awesome guy's profile on Linkedin !">
                        LinkedIn
                    </link-linkedin>
                </li>
                <li>
                    <link-github href="https://github.com/LokIIE" title="Check out my projects on Github !">
                        Mon Github
                    </link-github>
                </li>
                <li>
                    <link-gitlab href="https://gitlab.com/LokIIE" title="Visit my Gitlab to check what I'm working on !">
                        Mon Gitlab
                    </link-gitlab>
                </li>
            </ul>
        `;
    }
}

customElements.define('portfolio-menu', Menu);