console.log(document.getElementById("headline").innerHTML);// log text content from #headline
//var text="Cool, sie ist offen! :)";// change the text from the headline to:

document.getElementById("headline").innerHTML= "Cool, sie ist offen! :)";// „Cool, sie ist offen! :)“

// set value of the input element #input to:

document.getElementById("input").value="Hier sthet Text";// „Hier steht Text“


// as the innerHtml of the div #output

document.getElementById("output").innerHTML=document.getElementById("input").value;// „Hier steht Text“


document.body.classList.add("bg-black");// add the class bg-black  to the body

// if there it doesn't got it already


document.getElementById("input").classList.toggle("border-red");// toggle the class border-red on the input

// multiply the data-number attribute by 3
document.getElementById("output").dataset.number *=3;
console.log(document.getElementById("output").dataset.number);

// and update the value in the dom