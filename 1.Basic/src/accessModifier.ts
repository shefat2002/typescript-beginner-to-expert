class Employee {
  constructor( //shortcut
    private name: string,
    readonly age: number,
    readonly phone: string,
  ) {}
  display() {
    console.log(`Name: ${this.name}\nAge: ${this.age}\nPhone: ${this.phone}`);
  }
}

const em1 = new Player("Abc", 10, "+8801231212124");
const em2 = new Player("def", 10, "+8891232141412");

const employees: Employee[] = [];
