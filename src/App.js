console.log('Hello World');
const log = val => console.log(val);

const App = () => <h1>Hello World!!</h1>;

const filterVal = [1,2,3,4,5].filter(val=> val<4);

class Person {
    constructor(){
        this.firstName = "Uday Kumar";
    }
    getFullName(){
        return "Uday Kumar Billur";
    }
}