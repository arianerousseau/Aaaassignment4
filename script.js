/*
const { getUserById } = require("./queries");

$('#name').click(function() {
    $("#show-users").fadeIn();
    document.getElementById('show-users').innerHTML = '';
    const email = document.getElementById("name");
    email.addEventListener("click", getUserByName);

    $.ajax({
        method: "GET",
        url: "http://localhost:3000/users", 
        success: function(result){
        var user = '';
        console.log(result)
    
        var mainContainer = document.getElementById("show-users");
        for (var i=0; i<result.length; i++){
            if(result[i].name==email){
                var div = document.createElement('div');
                div.classList.add('userrow');
                div.innerHTML = 'User: ' + result[i].name + ' - Email: ' + result[i].email;
                mainContainer.appendChild(div);
                }
            }
        } 
    })
});


function UserByName(){
    console.log('button clicked');
    var nameInput = document.getElementById("name").textContent;

    if(nameInput != ""){
        var xhttp = new XMLHttpRequest();
        const param = `name=${nameInput}`;
        xhttp.open("GET", "/getUserByName?" + param, true);
        xhttp.send;
        console.log("Ajax request sent: "+param);

        xhttp.addEventListener('load', function(){
            if(xhttp.status === 200 && xhttp.readyState === 4){
                var response = JSON.parse(xhttp.responseText);
                console.log(response);
                document.getElementById("show-users").innerHTML = response;
        }else{
            console.error("Bad request");
        }
    })
}
*/