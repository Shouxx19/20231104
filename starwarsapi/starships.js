var parameterek = new URLSearchParams(window.location.search);
var page = parameterek.get("page");

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.dev/api/starships?page=" + page);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);

        /*
          <li class="page-item"><a class="page-link" href="#">2</a></li>
        */

          for(var i = 1; i <= 4; i++){
            var li = document.createElement("li");
            li.setAttribute("class", "page-item");

            var a = document.createElement("a");
            a.setAttribute("class", "page-link");
            a.setAttribute("href", "/starwarsapi/starships.html?page=" + i);
            a.innerHTML = i;

            li.appendChild(a);

            document.getElementById("gombok").appendChild(li);
          }
        
        for(var i = 0; i < json.results.length; i++){
            //console.log(json.results[i]);

            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");

            td1.appendChild(document.createTextNode(json.results[i].name));
            td2.appendChild(document.createTextNode(json.results[i].model));
            td3.appendChild(document.createTextNode(json.results[i].manufacturer));
            td4.appendChild(document.createTextNode(json.results[i].passengers));
            td5.appendChild(document.createTextNode(json.results[i].films.length));

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            //ID kinyerese
            var id = json.results[i].url.split('/')[5];

            document.getElementById("torzs").appendChild(tr);
        }
    }
};
xhr.send(null);