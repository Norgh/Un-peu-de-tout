class Event // We create a class composed of 2 properties so that the class Observable can be
{           // easier to manage without making a 2*2 tab but a 1*1 tab instead
    constructor(name, callback)
    {
        this.name=name; // Attribute name to save the name of the event
        this.callback=callback; // Callback is a function atatched to the event
    }
}
