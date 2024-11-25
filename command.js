//With command patterns, we can decouple objects that executes a certain task from the object that calls the method.

class OrderManager{
    constructor(){
        this.orders = []
    }

    placeOrder(order, id){
        this.orders.push(id)   
        return `You have successfully ordered ${order} (${id})`;
    }

    trackOrder(id){
        return `Your order ${id} will arrived in 20 minutes.`
    }

    cancelOrder(id){
        this.orders = this.orders.filter(order=> order.id !== id);
        return `You have cancelled your order ${id}`;
    }
}

const manager = new OrderManager();

manager.placeOrder("Pad Thai", "1234");
manager.trackOrder("1234");
manager.cancelOrder("1234");

//Lets refactor the orderManager class, instead of having the placeOrder, cancelOrder and TrackOrder methods, it will have one single method execute. This method will execute any command its given.

//Each command should have access the orders of the manager, which we'll pass its first arguments.

class OrderManager{
    constructor(){
        this.orders = []
    }
    
    execute(command, ...args){
        return command.execute(this.orders, ...args);
    }
}


