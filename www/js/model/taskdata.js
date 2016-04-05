function TaskData(title, dueDate, description){    //Constructor method
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
}

TaskData.prototype.isNew = function(){
    return (typeof this.id === 'undefined' && this.id !== null);
}

TaskData.prototype.getDueDate = function(){
    return this._dueDate;
}

TaskData.prototype.getDescription = function(){
    return this._description;
}

TaskData.prototype.setTitle = function(newTitle){
    this._title = newTitle;
}

TaskData.prototype.setDueDate = function(newDueDate){
    this._dueDate = newDueDate;
}

TaskData.prototype.setDescription = function(newDescription){
    this._description = newDescription;
}
