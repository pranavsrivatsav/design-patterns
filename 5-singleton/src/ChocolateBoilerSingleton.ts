// ChcolateBoilerSingleton

// There are basically two jobs for a singleton
// 1. To ensure that there is always only one instance of itself.
// 2. To ensure public access to the particular single instance.

// Let us see how we are executing the two jobs
// 1. Ensuring only one instance
//      - We make the constructor private, so no external module can create instances, instances can only be created within class
//      - We have a static variable that holds the single instance - uniqueChocolateBoiler
// 2. Ensuring public access to the particular single instance
//      - We provide a public static method called getInstance
//      - and its job is to share the uniqueChocolateBoiler - the singular instance
//      - on the first call, it will create the singular instance, and assign it to uniqueChocolateBoiler before returning it
class ChocolateBoilerSingleton {
    private static uniqueChocolateBoiler: ChocolateBoilerSingleton;

    isEmpty: Boolean;
    isBoiled: Boolean;

    private constructor() {
        this.isEmpty = true;
        this.isBoiled = false;
        console.log("Chocolate Boiler Singleton instance created")
    }

    fill() {
        // if fill
        if(this.isEmpty) {
            console.log("Filling the chocolate boiler")
            this.isEmpty = false;
        } else {
            console.error("Cannot fill the chocolate boiler, it is not empty")
        }
    }

    boil() {
        // if not empty and not boiled, then boil the contents, i.e isBoiled = true
        if(!this.isEmpty && !this.isBoiled) {
            console.log("Boiling the chocolate boiler")
            this.isBoiled = true
        } else {
            console.error("Cannot boil the chocolate boiler, it is not empty or already boiled")
        }
    }

    drain() {
        // if boiler not empty and boiled, then drain and make it empty - i.e isEmpty = true
        if(!this.isEmpty && this.isBoiled) {
            console.log("Draining the chocolate boiler")
            this.isEmpty = true;
        } else {
            console.error("Cannot drain the chocolate boiler, it is empty or not boiled")
        }
    }

    static getInstance() {
        if(!this.uniqueChocolateBoiler) {
            this.uniqueChocolateBoiler = new ChocolateBoilerSingleton();
        }

        return this.uniqueChocolateBoiler
    }
}

export default ChocolateBoilerSingleton;