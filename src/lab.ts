// const hello = new Promise(() => {
const pm = new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log('done timeout'));
  }, 3000);
});
console.log('pm is: ', pm);
