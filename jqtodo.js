// Homework:
//
// Let's create a simple todo application
//
// -Show an unordered list of todo's
// -Show an input to enter a new todo
// -Show a button to add a todo.
// -When the button is clicked:
// -The text from the input box is used to add a list item to the bottom of the list
// -The text from the input box is cleared out.
// When the user clicks on a list item, it is removed
// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.


var list = $('ul');
// var newItem = $('addText');
var button = $('#add');
var existingItem = ("li");
var delItem = ("ul");


button.on('click', function(e){

var newItem = $('input:text')
var errand = newItem.val();
var newLine = $(list).append("<li></li>");
newLine.append(errand);
newItem.val('');

});

delItem.on('click', function(e){

remove(event.target.tagName);

})
