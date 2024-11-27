//Lets create the Person object, that represent John Doe.

const person = {
    name: "John Doe",
    age: 42,
    nationality: "American",
};

//Instead of interacting with this object direclty, we want to interact with a proxy objet. 

// const personProxy = new Proxy(person, {});

//The second argument of Proxy is an object that represent the handler. In the handler object, we can define specific behavior based on the type of interaction.
//Although there are many methods that you can add to the Proxy handler, the two most common are get and set.

//Get : Gets invoked when trying to access a property 
//Set : Gets invoked when trying to modify a property

//Instead of interacting with person object directly, we'll be interacting with the personProxy.

const personProxy = new Proxy(person, {
    get: (obj, prop)=>{
        console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set : (obj, prop, value)=>{
        console.log(`changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true;
    }
})

personProxy.name
personProxy.age = 43;