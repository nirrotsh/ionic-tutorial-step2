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

## Step 2: Create the views
The MyTasks application have 3 different views
* The main view is a list of all the tasks
* A view to create a new task
* A view to edit an existing task (same view as the new task)

### The view templates
A template defines the view content.
Although ICONIC recommends using embeded templates (as script tags inside the main HTML page) for caching,
I used a real file based templates that are more suited to web applications - because I believe it is more clear.

See the template files under the `www/views` directory
* taskDetailView.html: is the template that allows us to edit the task details
* taskListView.html: is the main view that shows the tasks list

### Define the routing
A router is responsible to direct the application to use the right view for the specified URL.

IONA router is based on angular-ui router.

To add the router support and the routing table, open the `www/js/app.js` file (the appliocation start point)
and add the following lines to the application main module.
```sh
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/taskListView.html'
    })
  .state('new', {
    url: '/new',
    templateUrl: 'views/taskDetailView.html'
    })
})
```
This adds the router and state providers via dependency injection

It sets the default route to "/"
and defined two named routes for the tasks list and the details view (the "named" means we can refer them later by name and not by URL which is much clearer).

### Add the route navigation container view.
IONIC uses the `ion-nav-view` tag as the container that the router displays the current view in. open the application `www/index.html` and replace the content tag inside the body with the `ion-nav-view` tag
```sh
<body ng-app="MyTasks">
    <ion-pane>
      <ion-header-bar class="bar-positive">
        <h1 class="title">My Tasks</h1>
      </ion-header-bar>
      <ion-nav-view></ion-nav-view>
    </ion-pane>
  </body>
```


