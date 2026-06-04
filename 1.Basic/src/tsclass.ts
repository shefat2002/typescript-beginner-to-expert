class Player {
  name: string;
  age: number;
  phone: string;

  constructor(n: string, a: number, p: string) {
    this.name = n;
    this.age = a;
    this.phone = p;
  }
  display() {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nPhone: ${this.phone}`);
  }
}

const player1 = new Player("Abc", 10, "+8801231212124");
const player2 = new Player("def", 10, "+8891232141412");

player1.display();

const players: Player[] = [];

players.push(player1);
players.push(player2);

console.log(players[1]?.age);
