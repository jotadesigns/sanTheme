import { trigger, state, style, transition, animate } from '@angular/animations';

// Globals
export enum AnimationTimes {
    SLOW = 3000,
    MEDIUM = 2000,
    FAST = 500
}

///////////////////////////////////// ANIMATIONS ////////////////////////////////////

//////////// FADE-OUT

// interface
export interface AnimationFadeoutConfig {
    opacity: number;
    time: AnimationTimes;
}
// default config
export const ANIMATION_FADEOUT_CONFIG: AnimationFadeoutConfig  = {
    opacity: 0,
    time: AnimationTimes.FAST
};
// animation
export const ANIMATION_FADEOUT =  trigger('opened', [
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: ANIMATION_FADEOUT_CONFIG.opacity })),
    transition('* => false', animate('{{time}}ms'), {params: {time: ANIMATION_FADEOUT_CONFIG.time}}),
    transition('* => true', animate('{{time}}ms'), {params: {time: ANIMATION_FADEOUT_CONFIG.time}})
]);

//////////// FADE-IN






/////////////////////////////////// END ANIMATIONS ////////////////////////////////////
