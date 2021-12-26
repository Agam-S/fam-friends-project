export class family {
  _id: number;
  name: string;
  age: number;
  hobbies: string;
  favFood: string;

  constructor(
    _id: number,
    name: string,
    age: number,
    hobbies: string,
    favFood: string
  ) {
    this._id = _id;
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.favFood = favFood;
  }
}
