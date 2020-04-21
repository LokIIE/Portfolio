import "../components/link-github";
import "../components/link-gitlab";
import "../components/link-linkedin";
import "../components/portfolio-header";

import "../css/main.pcss";

import Glide from '@glidejs/glide';

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
    rewind: true,
    hoverpause: false
}).mount();