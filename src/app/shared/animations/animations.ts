import { animate, style, transition, trigger } from '@angular/animations';
export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', [
    animate(300, style({
      transform: 'translateY(+100%)',
      opacity: 0
    }))
  ])
]);
