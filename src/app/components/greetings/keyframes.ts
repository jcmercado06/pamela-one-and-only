import { keyframes, style } from '@angular/animations';


export const bounceOut = [
  style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset:.2}),
  style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .5 }),
  style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: .55 }),
  style({ transform: 'none', offset: 1 }),
]