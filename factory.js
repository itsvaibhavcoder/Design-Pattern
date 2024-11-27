//In JS, the factory pattern isn't much more than a function that returns an object without using the new keyword.

const createUser = ({firstName, lastName, email})=>({
    firstName, lastName, email,
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
})

const user1 = createUser({
    firstName: "vaibhav",
    lastName: "sukale",
    email: "vrs@gmail.com",
})

console.log(user1);

//The factory pattern can be usefull if we're creating relatively complex and configurable objects. With factory pattern, we can easily create new objects that contains ths customs keys and values.

const createObjectFromArray = ([key, value])=>({
    [key]: value,
})

const obj = createObjectFromArray(["name", "vaibhav"])
console.log(obj);