function waitOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Promise resolved after 1 second");
        resolve();
      }, 1000);
    });
  }
  
  function waitTwoSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Promise resolved after 2 seconds");
        resolve();
      }, 2000);
    });
  }
  
  function waitThreeSecond() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        // reject()
        console.log("Promise resolved after 3 seconds");
        resolve();
      }, 4000);
    });
  }
  
  function calculateTime() {
    const startTime = Date.now();
  
    // Using Promise.all to wait for all promises to resolve
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(() => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      console.log(`All promises resolved in ${duration} milliseconds`);
    });
  }
  
  // Example usage
  calculateTime();
  