// Iterators and Generators bring the concept of iteration directly into 
//  the core language and provide a mechanism for customizing the behavior of for...of loops.
// example- for...of loop uses iterator under the hood(means behind the scene)

// we can create own custom iterator function------see below
//Note-- but you can't use inside js for loop,because js can't use internally, so we
//  use custom while loop to run----

// function makeIterator(start = 0, end = Infinity, step = 1){
//     let nextStart = start;
//     let iterationCount = 0;

//     return {
//         next(){
//             let result;
//             if (iterationCount <end) {
//                 result = {value: nextStart, done:false};
//                 nextStart = nextStart + step;
//                 iterationCount++;
//                 return result;
//             }
//             return { value: iterationCount, done: true}
//         },
//     };
// }

// const myIterator = makeIterator(1,10,1);
// let result = myIterator.next();

// while (!result.done) {
//     console.log(result.value);
//     result = myIterator.next();
// }

// Generator- define an iterative algorithm by writing a single function
// to make function generator use * symbol like function*
// using yield we can-
// a.Pause the function execution.
// b.Return a value to the caller (like .next()).
// c.Wait until the next .next() call to resume from where it left off.
// example below-
// function* count(){
//     yield 2;
//     yield 4;
//     yield 6;
//     yield 8;
//     yield 10;
//     yield 12;
// }
// const even  = count();

// for( const v of even){
//     console.log(v) //will print all number
// }

// to make makeIterator function then see below--
// with the help of generator,yield we can create own iterator function 
function* makeMyIteratorNew(start,end,stepSize = 1){
    for(let i = start; i<=end; i+=stepSize ){
        yield i; //yield like checkpoint which pause here then return value like here 1
    }
}

// const one = makeMyIteratorNew(1,10,2) 
// for(const val of one){
    //     console.log(val)
    // }
    //we can also use in frontend, see below
    
    const btn = document.getElementById("next-btn");
    const one = makeMyIteratorNew(1,10,1) 
    btn.addEventListener("click", ()=> {
       //add here some condition when reach at end
        btn.innerText = one.next().value;
    })