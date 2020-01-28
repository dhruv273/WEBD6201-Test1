/*
    Student Name  : Dhruv vyas
    StudentID     : 100734385
    Date Completed: 28-jan-2020
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    //Declaring the variable for replacing the large button 
    let largeButtonLI;

    let newH3;

    function Start()
    {
      //largeButtonLI=document.getElementById("largeButton");

     // largeButtonLI.firstElementChild.lastChild.textContent="Learn More";
       
      document.getElementById("largeButton").innerHTML="Learn More";


      let main =document.getElementById("firstParagraph")[0];

      let newH3 = document.createElement("h3");
      newH3.setAttribute("class", "Display-5");
      newH3.textContent=" Dhruv vyas 100734385"
        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

