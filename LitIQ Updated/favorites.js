
$ (document).ready(function(){
    favorite1 = localStorage.getItem("favoritesTransfer");
    favorite2 = localStorage.getItem("favoritesAuthorTransfer");
    favorite3 = localStorage.getItem("favoritesLinkTransfer");
    document.getElementById("fav1").innerHTML = favorite1;
    document.getElementById("favAuthor").innerHTML = favorite                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            2;
    document.getElementById("favLink").href = favorite3;

});
function pushToFavorites()
{
    window.alert("test");
}

 var favorite1 = ""
 var favorite2 = ""
 var favorite3 = ""
 var favorite4 = ""
 var favorite5 = ""


 function pushToFavorites(){

      //window.alert("Poem has been added to favorites!")
      if(favorite1 == ""){
          favorite1 = document.getElementById("titleAuthorBlock").innerHTML
      }
      else if(favorite2 == "") {
      favorite2 = document.getElementById("titleAuthorBlock").innerHTML


      }
      else if(favorite3 == "") {
      favorite3 = document.getElementById("titleAuthorBlock").innerHTML


      }
      else if(favorite4 == "") {
      favorite4 = document.getElementById("titleAuthorBlock").innerHTML


      }
      else if(favorite5 == "") {
      favorite5 = document.getElementById("titleAuthorBlock").innerHTML

      }



 }
