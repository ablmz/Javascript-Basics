// listen to the submit of the form and prevent default
// then save the form data and send it to https://hsh.blnq.dev/javascript-basics/form-fetch.php
// log the response

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  var 
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("fetch-form").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://hsh.blnq.dev/javascript-basics/form-fetch.php", true);
  xhttp.send();
}

console.log(loadDoc());

// get data from public api https://openlibrary.org/books/OL7353617M.json
// and display the title, first sentence & isbn 13 in the #output element

