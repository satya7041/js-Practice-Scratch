//encapsulation means wrapped properties(data) and functions(methods) in a single unit(or class)
//In encapsulation-
// 1.#marks is hidden from outside the class — you can’t access it directly.

// 2. You must use getMarks() or setMarks() to work with it.

// 3. This protects the data from being accidentally changed or misused.

// 4. Goal: "Protect internal data by making it private and providing controlled access through methods.


  class Encapsulation{  //wrapped data(properties) and functions(methods) in single unit (or class)
    #marks; //private data
    constructor(name, marks){
      this.name = name;
      this.#marks = marks;
    }
    getMarks(){
      return this.#marks;
    }
    setMarks(newMarks){
      if(newMarks >= 0 && newMarks<=100 ){
        this.#marks = newMarks;
      }else {
        console.log("X invalid marks! Please enter valid marks..");
      }
    }
  }
  const student1= new Encapsulation("Rajiv", 100);
  console.log(student1.getMarks()); //100
  student1.setMarks(-1); // X invalid marks! Please enter valid marks..
  console.log(student1.name); //rajiv
  student1.name; //empty because we don't return so need console.log to see name
  // console.log(student1.marks); //undefined
  // console.log(student1.#marks); //SyntaxError: Private field '#marks' must be declared in an enclosing class 
 
