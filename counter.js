//COUNT FEATURE 
// 1.intialize the count as 0
// 2.listen for clicks on the increment button
// 3.increment the count variable when the button is clicked (log it out)
// 4.change the count-el in the HTML to reflect the new count

//5. Grab the save-el paragrah and store it in a variable called saveEl
//6.Create a variable that contains both the count and the dash separator, i.e. "12 - "
//7.Render the variable in the saveEl using innerText
//8. Make sure to not delete the existing content of the paragraph

// camelCase - JS you capitalise the  words that come afte rthe 1st word in variables

let saveEl = document.getElementById("save-el") //step 5
let count = 0
let countEl = document.getElementById("count-el")//use the count-el Id from HTML and add it to countEl variable. This is an ex. of pass in argument which gives data to element
console.log(countEl)


function increment () {
    count= count + 1 //1 click  is added per click (count += 1 //short hand version of previous line
    countEl.innerText = count //inner text targets the text inside the tag on HTML which is 0
    //console.log(count) //triggers the increment button so it actually runs 
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    newCount = count + "-"//step 6
    saveEl.innerText += newCount //step 7 or saveEl.textContext += newCount
    count = 0 // reset count to 0 
    countEl.textContent = count  //display the count  reset so it actually shows 0. Intsead of = count , can do =0

//count= count//-no need to add count=count but it's not wrong to do it , keep it simple
//textContent is better than innerText but does the same thing but it ignores all HTML tags & styles and returns only text,
    //console.log(count)
    
}


