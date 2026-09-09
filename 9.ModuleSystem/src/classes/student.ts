export class Student {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private address: string,
    private dateOfBirth: string,
  ) {}
  display() {
    console.log(
      `Name: ${this.name}\nStudentId:${this.id}\nEmail:${this.email}\nDate of birth: ${this.dateOfBirth}`,
    );
  }
}
