// setup the xml http request object
let ajax =  new XMLHttpRequest();

// step 2: prepare the open ajax request
ajax.open('GET', 'content.html');

// define the ajax response callback method
ajax.onreadystatechange = function() {
    if(ajax.readyState = 4) {
        document.getElementById('content').innerHTML = ajax.responseText;
    }
}

// send ajax request for data
function getContent() {
    ajax.send();
    document.getElementById('btn_content').style.display = 'none'
}