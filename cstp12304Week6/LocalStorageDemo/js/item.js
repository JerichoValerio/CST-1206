
function populateLocalStorage() {

    let edc = [{
        "name": "wallet",
        "date": "8/19/2020",
        "location": "Sakerta Timur"
    }, {
        "name": "mouse",
        "date": "3/31/2022",
        "location": "Heqian"
    }, {
        "name": "backpack",
        "date": "12/14/2020",
        "location": "Đắk Mâm"
    }, {
        "name": "glasses",
        "date": "8/3/2020",
        "location": "Maslovka"
    }, {
        "name": "keyboard",
        "date": "12/13/2021",
        "location": "Nanyuan"
    },{
        "name": "glarses",
        "date": "12/13/2021",
        "location": "Nanyuan"
    }, {
        "name": "minimal wallet",
        "date": "12/13/2021",
        "location": "Nanyuan"
    }]
    //Clear the current items
    clearItems()

    //Add in the new items to localstorage
    localStorage.setItem('items', JSON.stringify(edc))

    console.log("Added " + edc.length + " to localstorage")

    printItemsTable()
}

function clearItems() {
    localStorage.clear()
    console.log("Local storage cleared....")
    printItemsTable();
}

function addItem() {
    console.log("adding Item...")

    //Declare an array for our ed items
    let edc = [];

    //Check if anything is in localStorage
    if (localStorage.getItem('items')) {
        edc = JSON.parse(localStorage.getItem('items'))
    }

    //Declare on object
    edcItem = {};

    //Pull the values out of the form
    edcItem.name = document.getElementById("name").value
    edcItem.date = document.getElementById("date").value
    edcItem.location = document.getElementById("location").value

    //Pushes object to the array
    edc.push(edcItem)

    //Push the whole array back up to LocalStorage
    localStorage.setItem('items', JSON.stringify(edc))

    //Call print itemsTable
    printItemsTable()

}

function printItemsTable() {

    //Check
    if (document.getElementById("itemTable")) {
        //Remove Table
        document.body.removeChild(document.getElementById("itemTable"))
        document.body.removeChild(document.getElementById("itemTableHeader"))
    }

    itemTableHeader = document.createElement("h3");
    itemTableHeader.append("Items in local storage");
    itemTableHeader.id = "itemTableHeader"

    //Check if there are items in localstroage
    if (localStorage.getItem('items')) {

        //get the data
        edc = JSON.parse(localStorage.getItem('items'))

        //Make a table 
        let itemTable = document.createElement("table")
        itemTable.id = "itemTable"

        //Add all the items to it
        edc.forEach(item => {

            //Create a row
            itemRow = itemTable.insertRow();

            //Add the columns to the rows
            nameCell = itemRow.insertCell();
            dateCell = itemRow.insertCell();
            locationCell = itemRow.insertCell();

            //Add the text values to the columns
            nameCell.append(item.name)
            locationCell.append(item.location)
            dateCell.append(item.date)

        });

        //Add the header
        document.body.appendChild(itemTableHeader)

        //Add the table to the bottom of the document
        document.body.appendChild(itemTable)
    }

}

function searchItems() {
    searchTerm = document.getElementById("searchBox").value
    console.log("Searching for: " + searchTerm)
    printSearchResults()
}

function printSearchResults() {

    //Pull the search Term
    searchTerm = document.getElementById("searchBox").value

    //Check
    if (document.getElementById("itemTable")) {
        //Remove Table
        document.body.removeChild(document.getElementById("itemTable"))
        document.body.removeChild(document.getElementById("itemTableHeader"))
    }

    itemTableHeader = document.createElement("h3");
    itemTableHeader.append("SearchResults");
    itemTableHeader.id = "itemTableHeader"

    //Check if there are items in localstroage
    if (localStorage.getItem('items')) {

        //get the data
        edc = JSON.parse(localStorage.getItem('items'))

        //Make a table 
        let itemTable = document.createElement("table")
        itemTable.id = "itemTable"

        //Add all the items to it
        edc.forEach(item => {
            //Check if there are partial matches in any of the fields that match the text in the searchbox
            if (item.name.includes(searchTerm)
                || item.location.includes(searchTerm)
                || item.date.includes(searchTerm)) {

                //Create a row
                itemRow = itemTable.insertRow();

                //Add the columns to the rows
                nameCell = itemRow.insertCell();
                dateCell = itemRow.insertCell();
                locationCell = itemRow.insertCell();

                //Add the text values to the columns
                nameCell.append(item.name)
                locationCell.append(item.location)
                dateCell.append(item.date)
            }

        });

        //Add the header
        document.body.appendChild(itemTableHeader)

        //Add the table to the bottom of the document
        document.body.appendChild(itemTable)
    }
}