document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  myLoop();
});

function myLoop() {
   let arr = [1,2,3,4,5,6];
   for (let prop in arr){
     console.log(prop);
   }
}
