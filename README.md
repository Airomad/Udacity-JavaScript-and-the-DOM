# Document Object Model Notes

## Notes:
- **%element1%.append(%element2%)** - Moves element2 from it's current position to the element1 node.
- **DocumentFragment** - Represents a minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.
- **Reflow** - Is the process of the browser laying out the page. It happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout. This is a fairly expensive (slow) process.
- **Repaint** - Happens after reflow as the browser draws the new layout to the screen. This is fairly quick, but you still want to limit how often it happens.

## Useful links:
- [HTML Parse Pipeline Article](http://www.students.science.uu.nl/~5523532/Opdracht1/HTML/parsing.html)
- [How Browsers Work](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
- [Tokenization](https://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#tokenization)
- [Minimizing browser reflow](https://developers.google.com/speed/docs/insights/browser-reflow)
- [Не используйте большие сложные макеты и избегайте подтормаживания макетов](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing)
- [Analyze rendering performance with the Rendering tab](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#rendering)
- [REFLOWS & REPAINTS: CSS PERFORMANCE MAKING YOUR JAVASCRIPT SLOW?](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)

### DOM:
- [The poor, misunderstood innerText](http://perfectionkills.com/the-poor-misunderstood-innerText/)
- [innerText vs textContent](https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/)
- [The DocumentFragment on MDN](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
- [The Performance Interface on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

### CSS:
- [CSS Specificity: Things You Should Know](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

### Events:
- [Explanation about Event Bubbling and Capturing](https://www.youtube.com/watch?time_continue=37&v=rGhgPPYc2sg)
- [Event Flow](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
- [Event Delegation](https://javascript.info/event-delegation)
- [How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate)

## Research

##### Performance tests of methods for selecting elements from the DOM
#
For tests the next DOM tree is provided:
```html
<html>
<head>
  <title>Speed Test of DOM select Elements Methods</title>
</head>
<body>
  <h1>Some title</h1>
  <div id="test">
    <span class="span"></span>
  </div>
  <div class="class1">
    <p class="p"></p>
    <p class="p"></p>
    <p class="p"></p>
    <p class="p"></p>
    <p class="p"></p>
    <p class="p"></p>
    <p class="p"></p>
    <p class="p"></p>
    <p class="p"></p>
    <p class="p"></p>
  </div>
</body>
</html>
```

### Speed Test 1 Result: Get Unique Element from the DOM
Method | Iterations | Time taken (ms)
-|-|-
getElementsByTagName() | 10000000 | 619.93
getElementsByClassName() | 10000000 | 1645.82
querySelector | 10000000 | 2850.90
querySelectorAll | 10000000 | 12746.86

### Speed Test 2 Result: Get All Elements from the DOM
Method | Iterations | Time taken (ms)
-|-|-
getElementsByTagName() | 10000000 | 635.06
getElementsByClassName() | 10000000 | 1626.10
querySelectorAll | 10000000 | 16264.64