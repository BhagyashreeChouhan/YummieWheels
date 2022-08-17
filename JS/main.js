document.getElementById('search_location').addEventListener('click',loadUser);
function loadUser(){
    var xhr = new XMLHttpRequest();
    var url="https://developers.zomato.com/api/v2.1/cities";
    xhr.open('GET',url,true);
    xhr.setRequestHeader('user-key','b5c0c0e737e7b6a6cff87c1279ace7cb')
    xhr.onload = function(){
        if(this.status == 200){
            var user = this.responseText;
            console.log(user)
        }
    }
    xhr.send();
}