let projectString = "";

let projectTextbox = document.getElementById("project-text");

projectTextbox.addEventListener("change", updateValue);

function updateValue(str) {
    projectString = str.target.value;
    console.log(projectString)
    //go to database

}

//on pressing enter I want it to be put into the databse 
//it should reset t an empoty string
//it should go in as html (niot sure how i am going to query this)