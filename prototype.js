class Dog {
    constructor(name){
        this.name = name;
    }

    bark(){
        return `Woof!`;
    }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog('Max');
const dog3 = new Dog("Spot");

//Notice here how the constructor contains a name property, and the class itself contains a bak property. When using ES6 classes, all properties that are defined on the class itself, bark in this case, are automatically added to the prototype.

console.log(Dog.prototype)

//The prototype pattern is very usefull when working with objects that should have access to the same properties. Instaed of creating the  duplicate property each time, we can simply add the property,since all the instances have access to the prototype object.

//Since all instances have access to the prototype, its easy to add properties to the prototype even after creating the instances.

//Say that our dogs shouldn't only able to bark, but they should also able to play! 

Dog.prototype.play = ()=> console.log("Playing Now")
dog1.play();

//The term proto type chain indicates that there could me more than one step. So, far we've only seen how we can access properties that are directly available on the first object that __proto__ has a reference to.

//Lets create another type of dog, a super dog. This dog should inherits everything from a normal dog, but it should also be able to fly. we can create a super dog,  but it should also be able to fly. 

class SuperDog extends Dog{
    constructor(name){
        super(name);
    }
    fly(){
        console.log("Flying")
    }
}

const dog4 = new SuperDog("Daisy");
dog4.bark();
dog4.fly();

//Object.create --> The Object.create methods lets us create a new object, to which we can explicitly pass the value of its prototype.

const dog = {
    bark(){
        return `Woof!`
    },
}

const pet1 = Object.create(dog);
