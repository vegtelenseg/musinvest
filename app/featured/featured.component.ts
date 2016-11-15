import {Component} from '@angular/core';

@Component({
    selector: 'watch-list',
    template: require('./featured.component.html'),
    styles: [require('../headers.component.css')]
})
export class FeaturedComponent {
    title = 'Featured';
    body = 'Start streaming from a wide variety of tunes';
}