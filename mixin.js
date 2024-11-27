// class Dog{
//     constructor(name){
//         this.name = name;
//     }
// }

//A dog should be able to do more than just have a name. It should be able to bark, wag its tail, and play. Instead of adding this directly to the Dog.
// we can create a mixin that provides the bark, wagTail and play property for us.

// const dogFunctionality = {
//     bark : ()=> console.log("Woof"),
//     wagTail: ()=> console.log("Wagging my tail"),
//     play: ()=> console.log("Playing")
// }

//We can add the dogFunctionality mixin to the Dog prototype with the Object.assign method. This method lets us add properties to the target object. Dog.prototype in this case.


// class Dog{
//     constructor(name){
//         this.name = name;
//     }
// }

// const dogFunctionality = {
//     bark: ()=> console.log("Woof"),
//     wagTail : ()=> console.log("Wagging my tail"),
//     play: ()=> console.log("Playing"),
// }

// const animalFunctionality = {
//     walk : ()=> console.log("Walking"),
//     sleep : ()=> console.log('Sleeping'),
// }

// Object.assign(Dog.prototype, dogFunctionality, animalFunctionality);

// const dog1 = new Dog("Tommy");
// dog1.bark();
// dog1.walk();


class Dog{
    constructor(name){
        this.name = name;
    }
}

const animalFunctionality = {
    walk : ()=> console.log("Walking"),
    sleep : ()=> console.log('Sleeping'),
}

const dogFunctionality = {
    bark: ()=> console.log("Woof"),
    wagTail : ()=> console.log("Wagging my tail"),
    play: ()=> console.log("Playing"),
    walk (){
        super.walk();
    },
    sleep(){
        super.sleep();
    },
};

Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);

const dog1 = new Dog("Tommy");
dog1.play();
dog1.sleep();
