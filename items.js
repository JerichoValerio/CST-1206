
function addItem(item) {
console.log('Adding item....');

//Declare an array for our items

let edc = [];

//Check if there are any items in local storage

if (localStorage.getItem('items')) {
  edc = JSON.parse(localStorage.getItem('items'));
}

//Declare an object
edcItem = {};

// Pull the values out of the form
edcItem.name = document.getElementById('name').value;
edcItem.date = document.getElementById('date').value;
edcItem.location = document.getElementById('location').value;

// Push the object into the array
edc.push(edcItem);


//push the whole array back up to local storage
localStorage.setItem('items', JSON.stringify(edc));
}
