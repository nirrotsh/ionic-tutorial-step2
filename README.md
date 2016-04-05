# IONIC tutorial: step2
This step is based on the content of [Ionic Tutorial: Step1](https://github.com/nirrotsh/ionic-tutorial-step2) as starting point.

In this stage we will add model nad views for managing tasks. The work in this step is client side only and based on [Angular.js V.1](https://angularjs.org/) which is already included in our app.

Adding persistancy and server side support will be done in later steps.

## Prerequisites
You need to have some familiarity with JavaScript, CSS and Angular V1.

## Step 1: Adding the tasks model
Since tasks is data only object that is transfered between server and client, we do not need to really define a model - just deal with the JSON objects. But to prove that this can be done:
Add a `taskData.js` in a new `model` folder under the `www\js` folder and add the following content to it:
```
function TaskData(title, dueDate, description){    //Constructor method
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
}

//Every object created by new TaskData() will have this method
TaskData.prototype.isNew = function(){
    return (typeof this.id === 'undefined' && this.id !== null);
}
```