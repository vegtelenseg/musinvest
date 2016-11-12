import {Component} from '@angular/core';

@Component({
    selector: 'login',
    template: require('./login.component.html'),
    styles: [require('../sign.component.css')]
})
export class SigninComponent {
    title: string = 'Check what you have been missing';
    body: string = 'Find out who has shown interest in your craft';
    head: string = 'Remember';
    summary: string = "If you're automatically sure that you know \
    what reality is and who and what is really important, if you \
    want to operate on your default setting, then you, like me, \
    probably won't consider possibilities that aren't annoying and \
    miserable. But if you've really learned how to think, how to pay \
    attention, then you'll know you have other options. It will actually \
    be within your power to experience a crowded, hot, slow, consumer \
    hell-type situation as not only meaningful, but sacred -- on fire \
    with the same force that lit the stars: love, fellowship, the mystical \
    oneness of all things deep down....\
    This, I submit, is the freedom of a real education, of learning how to \
    be well-adjusted. You get to consciously decide what has meaning and what \
    doesn't. You get to decide what to worship. -David Foster";
}