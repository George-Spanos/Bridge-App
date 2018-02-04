import { animate, style, transition, trigger } from '@angular/animations';
export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('250ms 400ms')
  ]),
  transition(':leave', [
    animate(300, style({
      transform: 'translateY(100%)',
      opacity: 0
    }))
  ])
]);
