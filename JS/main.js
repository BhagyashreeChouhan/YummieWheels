//console.log('js');
//document.getElementById('footer1').addEventListener('click',loadUser);
function loadDoc(){
var xhr1 = new XMLHttpRequest();
var url = 'https://developers.zomato.com/api/v2.1/search?entity_id=84&entity_type=city&sort=cost&order=desc';
xhr1.setRequestHeader('user-key','b5c0c0e737e7b6a6cff87c1279ace7cb');
xhr1.onreadystatechange = function(){
  if(this.status == 200){
    document.getElementById("search-location").innerHTML = this.responseText;
  }
};
xhr1.open("Get" , url , true);
xhr1.send();
}
document.getElementById("hello").innerHTML = "hello world";
//var url1 = 'https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624';
//xhr1.open('GET',url1,true);
// Authentication happens when the portal is open for communication
//xhr1.setRequestHeader('user-key','b5c0c0e737e7b6a6cff87c1279ace7cb');
//xhr1.onload = function()
//{
  //  if(this.status == 200){
   //    var user1 = this.responseText;      
     //  console.log(user1);
     // var options = JSON.parse(this.responseText);
     //document.getElementById('search-location').innerHTML = JSON.stringify(options);
       
    //}
//}
//xhr1.send();
//}
//document.getElementById('footer2').addEventListener('click',loadUser);
//function loadUser(){
//var xhr2 = new XMLHttpRequest();
//var url2 = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=16774318';
//xhr2.open('GET',url2,true);
// Authentication happens when the portal is open for communication
//xhr2.setRequestHeader('user-key','b5c0c0e737e7b6a6cff87c1279ace7cb');
//xhr2.onload = function()
//{
 //   if(this.status == 200){
   //    var user2 = this.responseText; 
     //  console.log(user2);
     // var options = JSON.parse(this.responseText);
     //document.getElementById('search-location').innerHTML = JSON.stringify(options);
         //  }
//}
//xhr2.send();
//}