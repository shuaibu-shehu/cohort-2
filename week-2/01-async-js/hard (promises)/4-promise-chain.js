/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("resolved promise after 1 secs")
        },1000)
    })
}

function waitTwoSecond() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("resolved promise after 1 secs")
        },2000)
    })
}

function waitThreeSecond() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("resolved promise after 1 secs")
        },3000)
    })
}

async function calculateTime() {
    let start=  new Date().getTime();
    let one = await waitOneSecond()
    let two = await waitTwoSecond()
    let three= await waitThreeSecond()
  console.log(new Date().getTime()-start);
}
calculateTime()