# 🔥 Let's build your portfolio with React

## Context

> NEW!
> **Птичка the Bird** 🐥 will tell you when there's something specific you should do, or just give some help

> 💥 WARNING!
> This exercise and extra credits will take some time to finish 🥵
> Take your time, you'll maybe need few days to do everything,
> the most important is to practise and understand along the way 🚀

For now, if we want to add a new project in the "Projects" section, we need to go to the `projects-data.js` file, and add a new project object. We are developers so that's ok, but for a client it's not really nice to have to go in a JavaScript file to add new content. In the real life, a client should fill a form, submit it and a new project would be added to the projects list. That's what we will do in this exercise!

_Note: We don't have all the knowledge yet to make everything work, but we will continue to learn new skills in the upcoming days to complete this exercise._

Here is the final code workflow / how the code will work (if everything is not clear in your mind yet, that's totally normal, you'll understand it more and more in the next days):

1. In the `<App/>` component, we call `<NewProjectForm />` and `<Projects />`
2. `<NewProjectForm />` handle the form data and send it back to its parent (`<App />`)
3. `<App />` receives the form data from `<NewProjectForm />` (step 2), add this new project to the projects list and finally send the new projects list (old projects + the new one created) to the `<Projects />` (which renders all projects)

For this exercise, we will develop the steps 1 and 2, we'll do the last step later

## 📜 Exercise: create a <NewProjectForm /> component

Create the `<NewProjectForm />` component, and call it in the `<App />` component.

This component should return a form with these fields:

- Title field: text input - label "Title"
- Description field: textarea - label "Description"
- URL field: text input - label "Link to the project"
- Image URL field: text input - label "Image URL"
- Submit button: re-use your `<Button />` component - label "Create Project"

_Note: the `<Project />` component needs more fields (like "technologies", "designed", etc.), but we will keep it simple for now, and add new fields later_

When it's done, you'll need to handle the submit event of this form. You can create an `handleSubmit` function

> 🐥 don't forget to attach this function to the `onSubmit` event on your `<form>`

This event handler (your `handleSubmit` function) should prevent the page from reloading and log in your console this message:

```
FORM DATA (in <NewProjectForm />)
Title: _VALUE_FOR_TITLE_FIELD_
Description: _VALUE_FOR_DESCRIPTION_FIELD_
URL: _VALUE_FOR_URL_FIELD_
Image URL: _VALUE_FOR_URL_FIELD_
```

_Note: `\_VALUE_FOR_TITLE_FIELD_` (and others) should be replaced by the value entered in the field 😉

_Note (2): try to use the `FormData` Web API for getting the form data (documentation: https://developer.mozilla.org/fr/docs/Web/API/FormData/FormData, https://developer.mozilla.org/fr/docs/Web/API/FormData/get)_

Good luck!

## 📜 Extra credit

1. 💯 Send the data to the parent component

For now, we did the same exercise than the one we did for the `<ContactForm />` component, but this time it was probably easier!

Form data is still in our `<NewProjectForm />`, but we need to send it to its parent (the `<App />` component), because later the `<App />` component will send these data to the `<Projects />` component. Components can't send data to their siblings / brothers, so `<NewProjectForm />` can't directly send data to `<Projects />`.

In React, the parent component should send a function as a prop to its child component. The child component receives this prop and can execute it to send data back to its parent. Finally the parent component receives data from its child and can do anything with it.

Here is some code to understand it better:

```js
// in ParentComponent.js
function ParentComponent() {
  // 1️⃣ (in the parent component)
  // We create a function which will receive data from a child component
  // We accept a "data" parameter, the real value (argument) will be sent by the child
  function yourParentFunction(data) {
    // 6️⃣ 🏁🏁🏁 (in the parent component)
    // The <ChildComponent /> has executed this function with "hello from child" as argument,
    // So from here, we now have access to this data and we can use it as we want

    // We can log it...
    console.log(data); // log "hello from child"

    // ... or we can add some logic
    if (data === "hello from child") {
      console.log("yes, child really says hello"); // in our example, this line will be executed because we passed "hello from child" in the child component (see step 5)
    } else {
      console.log("no, child does not say hello");
    }
  }

  // 2️⃣ (in the parent component)
  // We pass a prop to the child, its value is a reference to the function we created above (yourParentFunction)
  return <ChildComponent parentProp={yourParentFunction} />;
}

// in ChildComponent.js
function ChildComponent(props) {
  // 3️⃣ (in the child component)
  // In the props object, we now have access to props.parentProp ("parentProp" is the name of the prop passed in the step 2 above)
  // Here "parentProp" represents our "yourParentFunction" function
  console.log(props.parentProp); // log "function yourParentFunction"

  // 4️⃣ (in the child component)
  // We can create an event handler function here, we want this function to execute the "props.parentProps" function
  // This function is attached to the "click" event (see below <button onClick={handleClick} />)
  function handleClick() {
    // 5️⃣ (in the child component)
    // We have access to the props object here if we want, so we can execute the "props.parentProp" function and pass data to it
    // 🐥 Remember: props.parentProp represents the "yourParentFunction" which accept a "data" parameter (see above on step 1)
    parentProp("hello from child");

    // ⏫⏫⏫ Scroll up to step 6 ⏫⏫⏫
  }

  return <button onClick={handleClick}>Send data to parent</button>;
}
```

Here is the same code without comments:

```js
// in ParentComponent.js
function ParentComponent() {
  function yourParentFunction(data) {
    console.log(data); // log "hello from child"

    if (data === "hello from child") {
      console.log("yes, child really says hello");
    } else {
      console.log("no, child does not say hello");
    }
  }
  return <ChildComponent parentProp={yourParentFunction} />;
}

// in ChildComponent.js
function ChildComponent(props) {
  console.log(props.parentProp); // log "function yourParentFunction"

  function handleClick() {
    parentProp("hello from child");
  }

  return <button onClick={handleClick}>Send data to parent</button>;
}
```

Try to implement it between the `<App />` and `<NewProjectForm />` components.
In the last exercise, you already received the data from the form in your `<NewProjectForm />` component. It's time to send it back to its parent, the `<App />` component.

You can use this function in your `<App />`:

```js
function handleProjectAdd(project) {
  console.log("FORM DATA (in <App/> received from <NewProjectForm />");
  console.log(project);
}
```

You'll also pass a prop to `<NewProjectForm />`, you can name this prop `onProjectAdd`

The `handleProjectAdd` should log this message:

```
FORM DATA (in <App/> received from <NewProjectForm />)
{
  title: _VALUE_FOR_TITLE_FIELD_
  description: _VALUE_FOR_DESCRIPTION_FIELD_
  url: _VALUE_FOR_URL_FIELD_
  imageUrl: _VALUE_FOR_URL_FIELD_
}
```

🐥 Be careful, did you notice the "{ ... }" in the log message? It means it's an object, so the `project` parameter should be an object:

```js
function myFunction(data) {
  console.log(data);
}

myFunction({ name: "John Doe" }); // log { name: "John Doe" }
```

2. 💯 Folder architecture

We start to have a lot of components, it would be better to organize them in folders.

Let's keep it simple:

- create a `components` folder where all your components will be (everything except `App.js`, `index.js` and `index.css`)
- create a `data` folder where you can put the `projects-data.js` file

🐥 Because we changed path to each file, all your imports will be broken, don't forget to update them

3. 💯 Single prop for `<Project />` component

In the `Projects.js`, we are passing props to the `<Project />` component like that:

```js
<Project
  key={item.id}
  url={item.url}
  urlTitle={item.urlTitle}
  srcSet={item.srcSet}
  srcImage={item.srcImage}
  alt={item.alt}
  workTitle={item.workTitle}
  workSubtitle={item.workSubtitle}
  technologies={item.technologies}
  designed={item.designed}
/>
```

That's a lot of props 😱! We can simplify it by passing only one prop reprensenting our whole project object (here `item` is a project).

Read about it here: https://tinyurl.com/app/ ("Pass Objects Instead of Primitives"), try to implement it

🐥 Don't delete the `key` prop, we need it when we are looping on arrays in React
🐥 In your `<Project />` component, you'll have to change some things too because you are now passing a whole project object, you can log props (`console.log(props)`) to see where your data is and edit your code then

4. 💯 Avoid data duplication

In the `projects-data.js` file, we are duplicating some content ("Calorie counter"), we are using the same words for `urlTitle`, `alt` and `workTitle`. We could delete the `urlTitle` and `alt` properties of each project object, and inside `Project.js` re-use the `workTitle` where we need it.

For `urlTitle`, we also need the text "Go to" before the "workTitle", we can use JavaScript template literals (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals). For example:

```js
// Let's say `props.text` = "blabla"
<p>{`The text before: ${props.text}`}</p>

// The result:
<p>The text before: blabla</p>
```
