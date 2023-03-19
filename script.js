window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), Math.random() * 5000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), Math.random() * 5000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), Math.random() * 5000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), Math.random() * 5000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), Math.random() * 5000 + 1000)),
];

Promise.any(promises).then((result) => {
  document.getElementById('output').innerHTML = result;
}).catch((error) => {
  console.error(error);
});
