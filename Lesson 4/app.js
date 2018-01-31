function doTests() {
  test1();
  test2();
}

function test1() {
  const t1 = performance.now();

  for (let i = 0; i < 10000; i++) {
    const el = document.createElement('p');
    el.textContent = 'This is paragraph number ' + i;
    document.body.appendChild(el);
  }

  console.log(`Test 1 time: ${performance.now() - t1}`);
}

function test2() {
  const t1 = performance.now();
  const parent = document.getElementById('content');

  for (let i = 0; i < 10000; i++) {
    const el = document.createElement('p');
    el.textContent = 'This is paragraph number ' + i;
    parent.appendChild(el);
  }
  document.body.appendChild(parent);

  console.log(`Test 2 time: ${performance.now() - t1}`);
}

document.addEventListener('DOMContentLoaded', doTests);
