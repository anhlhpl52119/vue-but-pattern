// const hello = new Promise(() => {
//   return Promise.resolve(
//     setTimeout(() => {
//       console.log('hello 300s');
//     }, 3000)
//   );

const pm = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log('done timeout'));
  }, 3000);
});
console.log('pm is: ', a);
