class Observable 
{
    constructor()
    {
        this.events= []; // We create a grid of Events
    }

    on(eventName, callback) // Add a new event by his name and his function
    {
        this.events.push(new Event(eventName, callback));
    }

    off(eventName, callback) // Delete an event (name + function associated with)
    {
        let id = this.events.findIndex(element => element == new Event(eventName, callback)); // We find it in the tab
        this.events.splice(0, id); // Then we remove it
    }

    trigger(eventName,...parameters) //  trigger/activate the function of an event by his name
    {
        let found = this.events.find(element => element.name === eventName); // Finding the event and its function associated with
        found.callback(...parameters); // execute the funtion of the event called
    }
}



