import { LitElement, html } from 'lit-element';

class ThemeSwitch extends LitElement {

    static get properties () {
        return {
            current: {
                type: String,
                reflect: true
            },
            currentIndex: {
                type: Number,
                reflect: true
            },
            _allThemes: {
                type: Array,
                reflect: false
            }
        }
    }

    constructor() {
        super();
        this._allThemes = [{
            title: "light",
            icon: "☀️"
        }, {
            title: "dark",
            icon: "🌙"
        }];
        if(!!sessionStorage.getItem('theme') && !!sessionStorage.getItem('themeIndex')) {
            this.currentIndex = sessionStorage.getItem('themeIndex');
            this.current = sessionStorage.getItem('theme');
        } else {
            this.currentIndex =  0;
            this.current = this._getCurrentThemeTitle();
        }
            
        this._setGlobalTheme();
    }

    render() {
        return html`
            <style>
                .switchs-container {
                    display: flex;
                    justify-content: space-evenly;
                }

                .switch {
                    outline: none;
                    border: none;
                    border-radius: 0.2rem;
                    padding: 0.5rem 1rem;
                    text-decoration: none;
                    transition: 0.5s;
                    background-color: var(--primary-color);
                }

                .switch[active] {
                    border: 1px solid var(--secondary-text-color);
                    background-color: var(--secondary-color);
                    transition: 0.5s;
                }
            </style>
            <div class="switchs-container">
                ${this._allThemes.map(
                    t => html`<button class="switch" data-value="${t.title}" @click="${this.switchTheme}" ?active="${this._isCurrentTheme(t)}">${t.icon}</button>`
                )}
            </div>
        `;
    }

    switchTheme(e) {
        this.currentIndex = (this.currentIndex + 1) % this._allThemes.length;
        this.current = this._getCurrentThemeTitle();

        this._setGlobalTheme();
        sessionStorage.setItem('theme', this._getCurrentThemeTitle());
        sessionStorage.setItem('themeIndex', this.currentIndex);
    }

    _getCurrentTheme() {
        return this._allThemes[this.currentIndex];
    }

    _getCurrentThemeTitle() {
        return this._getCurrentTheme().title;
    }

    _isCurrentTheme(t) {
        return this._getCurrentThemeTitle() === t || this._getCurrentThemeTitle() === t.title;
    }

    _setGlobalTheme() {
        document.querySelector("body").setAttribute("theme", this._getCurrentThemeTitle());
    }
}

customElements.define('theme-switch', ThemeSwitch);