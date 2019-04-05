"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Diego Sandoval
   Date:   April 3, 2019 (04/03/19)

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
// DVARG: A global variable to use in a function's function
var keyPressEvt;
// DFUNC: Function to be loaded when the page is loaded
window.onload = function () {
      //  DVARA: and array of the add button
      var addButtons = document.getElementsByClassName('addButton');
      // DLOOP: Loops through the array above and adds event listener to them
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener('click', function (e) {
                  // DVARL: Local variables for this function
                  var foodItem = e.target.nextElementSibling,
                        cart = document.getElementById('cart'),
                        foodCopy = foodItem.cloneNode(true),
                        spinner = document.createElement('input'),
                        foodID = foodItem.id,
                        dupOrder = false;
                  // DVARO: Modifies the spinner attributes
                  spinner.setAttribute('type', "number");
                  spinner.setAttribute('name', foodID);
                  spinner.setAttribute('id', `cart-${foodID}`);
                  spinner.setAttribute('value', "1");
                  // DDOES: add event listeners to the spinners the test when clicked on if the value of the spinner is 0;
                  spinner.addEventListener('click', function (e) {
                        if (e.target.value == 0) {
                              e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                        };
                  });
                  // DDOES: Adds an event listener to the spinners that check after 5 seconds from being typed in if the value of the spinner is zero
                  spinner.addEventListener('keypress', function (e) {
                        keyPressEvt = e;
                        setTimeout(function () {
                              if (keyPressEvt.target.value == 0) {
                                    keyPressEvt.target.parentNode.parentNode.removeChild(keyPressEvt.target.parentNode);
                              }
                        }, 5000);

                  });
                  // DVARO: edits the foodCopy
                  foodCopy.insertBefore(spinner, foodCopy.firstChild);
                  // DLOOP: Loops through all the items in the cart to see if this is a duplicate order, and if it is it adds to the value of the spinner for the respective order and changes dupOrder
                  for (var i = 0; i < cart.childNodes.length; i++) {
                        if (cart.childNodes[i].id == foodID) {
                              cart.childNodes[i].firstChild.value = Number(cart.childNodes[i].firstChild.value) + 1;
                              dupOrder = true;
                        };
                  };
                  // DIFDO: test if it is a duplicate order and if it isnt it appends it to the document
                  if (dupOrder == false) {
                        cart.appendChild(foodCopy);
                  };
            });
      };
};