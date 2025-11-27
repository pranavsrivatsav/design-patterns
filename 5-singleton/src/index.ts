// Simulation of Singleton design pattern

// To know more about the Singleton pattern - go to ChocolateBoilerSingleton file
import ChocolateBoilerSingleton from "./ChocolateBoilerSingleton";

// The below statement will throw compilation error in typescript because the constructor of ChocolateBoilerSingleton is private
// So the control of creating ChocolateBoiler instances exists only in the ChocolateBoilerSingleton only
// const chocolateBoiler = new ChocolateBoiler()

const chocolateBoiler1 = ChocolateBoilerSingleton.getInstance();
const chocolateBoiler2 = ChocolateBoilerSingleton.getInstance();

// we should only be able to fill the chocolate boiler once
chocolateBoiler1.fill();
chocolateBoiler2.fill();

// we should only be able to boil the chocolate boiler once
chocolateBoiler2.boil();
chocolateBoiler1.boil();

// we should only be able to drain the chocolate boiler once
chocolateBoiler1.drain();
chocolateBoiler2.drain();

// we can again fill the chocolate boiler once it is drained
chocolateBoiler2.fill();

// Here both the chocolate boiler instances are the same instance and so we cannot accidentally
// do conflicting operations as the singleton ensures that only one instance of the chocolate boiler exists.