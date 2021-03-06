var mainUrl = 'https://porygonj-url-shortener.herokuapp.com/';

function getJSON(url, callback = function(){}){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function(){console.log(this.responseText);console.log(document.getElementById("url-input").value, url);
        callback(JSON.parse(this.responseText));
    });
    xhr.open('GET', url);
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("url-submit").onclick = function(){
        getJSON(mainUrl + 'new/' + encodeURIComponent(document.getElementById("url-input").value), function(data){
             var resultBox = document.getElementById("url-result");
             resultBox.classList.toggle("error", !!data.error);
             resultBox.innerHTML = data.error || data.new_url;
        });
    };
});
