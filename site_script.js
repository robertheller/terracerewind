/*
Final Web Project - Site Javascript File
Author: Robert Heller 
Due date: December 2, 2020
*/

// 2.4.6 a

function clock()
{
    // 2.4.6 b
    var myClock = new Date();
    var time = myClock.toLocaleTimeString()
    
    document.getElementById("clock").innerHTML = "Current time – " + time;
}

function checkValid()
{
    var field = document.getElementById("rating");
    
    // 2.4.6 c
    if (document.getElementById("siteform").checkValidity 
        && ((field.value == 1) || (field.value == 2) || (field.value == 3))) {
        // 2.4.6 d
        alert("The form has been submitted. Thank you!");
    }
    else {
        alert("The form is invalid. Please try again.");
    }
}

function lastMod()
{
    // 2.4.1 e
    document.getElementById("lastmod").innerHTML = "<br />" + document.lastModified;
}