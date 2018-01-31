function doTests() {
  test1();
  test2();
  test3();
  test4();
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

function test3() {
  const t1 = performance.now();
  const parent = document.createElement('div');

  for (let i = 0; i < 10000; i++) {
    const el = document.createElement('p');
    el.textContent = 'This is paragraph number ' + i;
    parent.appendChild(el);
  }
  document.body.appendChild(parent);

  console.log(`Test 3 time: ${performance.now() - t1}`);
}

function test4() {
  const t1 = performance.now();
  const parent = document.createDocumentFragment();

  for (let i = 0; i < 10000; i++) {
    const el = document.createElement('p');
    el.textContent = 'This is paragraph number ' + i;
    parent.appendChild(el);
  }
  document.body.appendChild(parent);

  console.log(`Test 4 time: ${performance.now() - t1}`);
}

document.addEventListener('DOMContentLoaded', doTests);
