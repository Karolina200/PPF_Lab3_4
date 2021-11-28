//Definicja klasy
class User{
    constructor(name){
        this.name=name;
    }

    sayHello(){
        return `${this.name} powiedz cześć!`;
    }
}

//Wykorzystanie
let user=new User("Karolina");
console.log(user.sayHello());

class Employee extends User{
    constructor(name,salary){
        //wywołanie konstruktora klasy User
        super(name);
        //dodanie nowej właściwości klasy
        this.salary=salary;
    }
    //nowa metoda klasy
    raiseSalary(){
        this.salary +=1000;
        return this.salary;
    }
}
//Wykorzystanie]
let employee=new Employee("Zosia",2001);
console.log(employee);
employee.raiseSalary();
console.log(employee);