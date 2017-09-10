export class Card {
  value: number;
  name: string;
  suit: string;
  clicked = false;
     constructor(value, name, suit) {
      this.value = value;
      this.name = name;
      this.suit = suit;
    }
}
