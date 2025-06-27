// Promisification------
// Definition - Promisification” is a long word for a simple transformation.It’s the 
// conversion of a function that accepts a callback into a function that returns a promise.

//converting function into promise
// step2
function promisify(fn){
    return function(...args){
        return new Promise((resolve, rejected) => {
            fn(...args, (err, result)=>{
                if(err) return rejected(err);
                return resolve(result);
            });
        });
    };
}
// step1 without promise so we need function to convert this function into prmoise
function loadScript(src, callback){
    const script = document.createElement("script");
    script.src = src;
    script.onload =()=> callback(null, script);
    script.onerror = ()=> callback(new Error("Error Loading"));

    document.head.appendChild(script);
}

const loadScriptNew = promisify(loadScript);

//if want to use below function in async await then
    // loadScriptNew('test.js')
    // .then(()=> console.log("Done"))
    // .catch(()=> console.log("error occur"))

    //in async await using IIFE
    (async()=>{
        try {
            const result = await loadScriptNew('test.js')
            console.log("Done");
            
        } catch (error) {
            console.log("error occured")
        }
    })() //here () means calling the function


// loadScript('test.js', (err, script)=> {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log("script loaded")
//         }
// })  