/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
   let start = new Date().getTime();
   while (new Date().getTime()-start<seconds) {
    
   }
    // doing nothing

}

console.log("before sleep");
sleep(40000)
console.log("after sleep");