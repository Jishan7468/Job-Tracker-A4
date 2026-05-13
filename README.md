# JavaScript DOM Questions & Answers

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer:

#### getElementById

Gets the element from the document which contains the the specific id stated in the `('')`

#### getElementsByClassName

Selects all the elements containing the same class name from the document

#### querySelector()

Selects the first match class name from the document

#### querySelectorAll

Selects all elements, like if `p` is stated, all `p` will be selected, or all class will be selected

---

## 2. How do you create and insert a new element into the DOM?

### Answer:

```javascript
const NewElement = document.CreateElement('div')
NewElement.innerText = 'HI!'

const container = document.getElementById('container')

container.appendChild(NewElement)
```

---

## 3. What is Event Bubbling? And how does it work?

### Answer:

Event bubbling is the flow of elements from child to parent

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

### Answer:

Event delegation is very useful because it cuts the need of adding onclick listeners to every child, if eventListener is added to main container, we can track every element inside it using `event.target`

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

### Answer:

- `preventDefault()` -- Stops the browser’s default behavior
- `stopPropagation()` -- Stops the event from bubbling and selects only the clicked elements