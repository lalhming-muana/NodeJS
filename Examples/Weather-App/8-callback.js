setTimeout(() => {
    console.log('First setTimeout two seconds completed');
}, 2000);

const names = ['andrew','jane','jen','jess','solik'];

const shortNames =  names.filter(n => n.length <=4);
console.log(shortNames);


/**
 * We want to have the same function of getting the coordinates 
 * when user gives the name of a place. So, define a function
 * geocode which takes two parameters.. name of place and
 * a callback function to display the result
 * 
 

const geocode = (address, callback)=>{
setTimeout(() => {
    const data = {
        latitude: 0,
        longitude: 0
    }
    return data;
}, 2000);
    

}


The above code does not return anything so the commpiler will give a undefined result.
This is because the return is inside the setTimeout. 
geocode does not have a return function.


*/

/**
 * 
 * Now we use a callback to return or rather display the required data
 * 
 * 
 


const geocode = (address, callbacknatur)=>{
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        // Here we write the callback to display the result
        callbacknatur(data); 
    }, 2000);
        
    
    }


// In the line below, geocode does not return anything,
// So we do not assign it to anything.


geocode('philadelphia',(d)=>{
    console.log(d);
});

*/



//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (a,b, callback)=>{
    setTimeout(() => {
        callback(a+b);
    }, 2000);
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

