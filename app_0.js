

var student = {
    name: "",
    type: "student"
};

/**
 * call the funciton when page is loaded (the input field in index.html)
 */

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    //calling to html for the name
    student.name = document.getElementById('name').value;

    //loops the name and add it up
    var totalNameValue = 0;
    for (var i = 0; i < student.name.length; i++){
        totalNameValue += student.name.charCodeAt(i);
    }

    //Insert result into page
    var output = "Total Numeric value of person's name is " + totalNameValue;
    document.getElementById('output').innerText = output;
}

/**
 * Should seperate the above function since they are all doing different work
 * Since they are all dooing different jobs
 * Seperate into 3
 */
