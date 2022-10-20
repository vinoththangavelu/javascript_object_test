import "./styles.css";

class students {
  constructor(name, age, mob) {
    this.st_name = name;
    this.st_age = age;
    this.st_mob = mob;
  }
}
let std1 = new students("kumar", 20, 1234);
let std2 = new students("vinoth", 21, 5678);
console.log(std2.st_name + std1.st_name, +std1.st_age, +std2.st_mob);
