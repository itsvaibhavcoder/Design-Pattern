let counter = 0;
class Counter{
    getInstance(){
        return this;
    }
    getCount(){
        return counter;
    }
    increment(){
        return counter++;
    }
    decrement(){
        return counter--;
    }
}

//Here below we can create multiple instances of counter class which voilets the singletone pattern.

const counter1 = new Counter();
const counter2 = new Counter();
console.log(counter1.getInstance()===counter2.getInstance()) //False;


let instance;
let count = 0;

class Counter {
    construtor(){
        if(instance){
            throw new Error("You can only create one instance!")
        }
        instance = this;
    }

    getInstance(){
        return this;
    }
    getCount(){
        return count;
    }
    increment(){
        return count++;
    }
    decrement(){
        return count--;
    }
}

const count1 = new Counter();
const count2 = new Counter(); //Error

const singletoneCounter = Object.freeze(new Counter());
export default singletoneCounter;
