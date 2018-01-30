function clickHandler(event) {
  if (event.target.nodeName = 'P') {
    alert(`Clicked on ${event.target.innerText}`);
  }
}

function doWork() {
  const content = document.getElementById('content');
  for (let i = 0; i < 100; i++) {
    const p = document.createElement('p');
    p.innerText = `P: ${i}`;
    content.appendChild(p);
  }

  content.addEventListener('click', clickHandler);
}

document.addEventListener('DOMContentLoaded', doWork);
