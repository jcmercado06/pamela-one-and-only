import { keyframes, style } from '@angular/animations';


export const bounceOut = [
  style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset:.2}),
  style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .5 }),
  style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .55 }),
  style({ transform: 'none', offset: 1 }),
]

export const slideLeft = [
  style({ transform: 'translate3d(-100%, 0, 0)', offset: 0.2 }),
  style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
]

export const slideRight = [
  style({ transform: 'translate3d(100%, 0, 0)', offset: .2 }),
  style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
]

export const pulse = [
  style({ transform: 'scale3d(1, 1, 1)', offset: .2 }),
  style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: .5 }),
  style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
]