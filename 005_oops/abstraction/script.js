// Abstraction- Hide the complex logic and show only the necessary part to the user.
// Abstraction here means-

// 1. The user just calls makeCoffee().

// 2. Internal steps like grindBeans(), heatWater() and brew() are hidden and handled inside.

// 3. User doesn’t need to know or care how coffee is made.

// 4. Goal: "Hide the complex logic and show only the necessary part to the user."

class CoffeeMachine {
  makeCoffee() {
    this.#brew();
    console.log("Coffee is ready ☕");
  }

  #grindBeans() {
    console.log("Grinding beans...");
  }

  #heatWater() {
    console.log("Heating water...");
  }

  #brew() {
    this.#grindBeans();
    this.#heatWater();
    console.log("Brewing coffee...");
  }
}
