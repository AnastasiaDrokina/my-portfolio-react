/* 

Let's build your portfolio with React 🔥🔥🔥
-------------------------------------------
-------------------------------------------

📜 Exercise: create a <ContactForm /> component
---------------------------------------

We have added a new footer at the bottom of your project. It looks wonderful but... we can't write to you because there is no form 😕

Create a <ContactForm /> component and call it here in `App.js` in your JSX.
This form should have:

  - a text input field - label "Name"
  - an email field - label "Email"
  - a textarea field - label "Your message"
  - a submit button - text "Submit" (you could build a <Button /> component for it, the <BtnSpan /> component is close to what we want but does not return a real <button> 😕)

Note: in JSX, the "for" attribute on `<label>` is written "htmlFor"

Feel free to add some styles to it 🎨

Good luck!


📜 Extra credit
------------
1. 💯 Get the form data on submit

Your new <ContactForm /> component is good, but is not working right now.
There is even another problem, we are building an SPA (Single Page Application), and such project should never reload! For now, when you submit your form, the entire application is reloaded 😕

Your job is to prevent this reload and get the form data on submit. 

In React, there is 2 steps to follow to make it work:

  - add an event on an element in your JSX, calling a function (all events in React start with "on", for example `onClick`)
  - create a function called by the event

```
function YourComponent() {
  function yourEventFunction() {
    // code executed when "yourEventFunction" is called
  }

  return <button onClick={yourEventFunction}>Click me</button>
}
```

It's important to note that when you call `yourEventFunction`, React will automatically pass to it the `event` object which represent the event fired in the DOM (on the example above, it describes the "click" event)

```
function YourComponent() {
  function yourEventFunction(event) {
    // event is available here
  }

  return <button onClick={yourEventFunction}>Click me</button>
}
```

Note: when you add an event on an element in your JSX, this DOM element is available in `event.target`, so:

```
function btnClicked(event) {
  console.log(event.target) // <-- is equal to <button>Click me</button> 
}
<button onClick={btnClicked}>Click me</button>
```

Add a submit event on your form, and log in your console value for each field. In your console, it should look like that:

```
Form Data
name _NAME_INPUT_VALUE_
email _EMAIL_INPUT_VALUE_
message _MESSAGE_INPUT_VALUE_
```

Note: submitting a form will reload the page, don't forget to prevent it!

Documentation: 
  - events with React: https://ru.reactjs.org/docs/handling-events.html
  - event.target.elements: https://developer.mozilla.org/ru/docs/Web/API/HTMLFormElement/elements

2. 💯 Use FormData API

To get form data for each field, we have used the `elements` properties on the `event.target` object. But there is a web API (directly available in your browser) which can help us to get data of a form, it's FormData!

Here is how we use it:

```
// in your HTML
<form id="my-form">
  <label for="firstName">First Name:</label>
  <input type="text" name="firstName" />
</form>

// in your JS
const form = document.getElementById("my-form")
const formData = new FormData(form)
const firstNameInputValue = formData.get('firstName')

console.log(firstNameInputValue) // "firstName input value"
```

Try to use it !

Note: each field should have a `name` attribute, it's what is used in `formData.get(nameValueHere)` 

Documentation:
  - FormData: https://developer.mozilla.org/fr/docs/Web/API/FormData/FormData
  - FormData.get(): 
*/

import { Projects } from "./Projects";
import { Title } from "./Title";
import { ContactForm } from "./ContactForm";

function App() {
  return (
    <div>
      <main>
        <section className="portfolio section" id="work">
          <div className="container">
            <Title>Projects</Title>
            <Projects />
          </div>
        </section>
      </main>

      <footer className="footer contacts" id="contacts">
        <div className="container section contacts__form">
          <div className="contacts__col">
            <h2 className="title title--section title--first title-white">
              Write to me
            </h2>
            <p className="section__text title-white">
              I’m always up for adventure and international opportunities.
            </p>
            <p className="title-white">Let's have a talk.</p>
          </div>
          <div className="contacts__col"></div>
          <ContactForm />
        </div>
      </footer>
    </div>
  );
}

export { App };
