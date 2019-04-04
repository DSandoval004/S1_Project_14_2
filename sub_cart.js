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
// DFUNC:
window.onload = function () {
      var addButtons = document.getElementsByClassName('addButton');
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener('click', function (e) {
                  // DVARL:
                  var foodItem = e.target.nextElementSibling,
                        cart = document.getElementById('cart'),
                        foodCopy = foodItem.cloneNode(true),
                        spinner = document.createElement('input'),
                        foodID = foodItem.id,
                        dupOrder = false;
                  // DVARO:
                  spinner.setAttribute('type', "number");
                  spinner.setAttribute('name', foodID);
                  spinner.setAttribute('id', `cart-${foodID}`);
                  spinner.setAttribute('value', "1");
                  spinner.style.width = "20px";
                  // DVARO:
                  foodCopy.insertBefore(spinner, foodCopy.firstChild);
                  // DLOOP:
                  console.log(cart.childNodes)
                  for (var i = 0; i < cart.childNodes.length; i++) {
                        if (cart.childNodes[i].id == foodID) {
                              cart.childNodes[i].firstChild.value += 1;
                              console.log('hi')
                        } else {
                              cart.appendChild(foodCopy);
                        }
                  }
                  console.log(foodItem, cart, foodCopy, spinner, foodID, );
            });
      }
};