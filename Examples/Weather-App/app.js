setTimeout(() => {
    console.log('post check from server after every 800ms....');
}, 2000);

const names= ['Andrew','Jen','Jess'];

const shortNames = names.filter(()=>{
    console.log(names.length<=4);
})