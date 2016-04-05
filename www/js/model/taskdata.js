function TaskData(title, dueDate, description){    //Constructor method
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
}

//Every object created by new TaskData() will have this method
TaskData.prototype.isNew = function(){
    return (typeof this.id === 'undefined' || this.id === null);
}