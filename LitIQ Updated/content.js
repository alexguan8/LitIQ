$ (document).ready(function(){

  var randomNum = Math.floor(Math.random() * 201);

  var rootRef = firebase.database().ref().child(randomNum);

  rootRef.on("value", snap => {

    var authorName = snap.child("Author").val();
    var country = snap.child("Country").val();
    var hits = String(snap.child("QuizDB Hits").val());
    var workType = snap.child("Type").val();
    var urlLink = snap.child("URL").val();
    var titleWork = snap.child("Work Title").val();

    /*
    alert(titleWork);
    alert(workType);
    alert(authorName);
    alert(hits);
    alert(country);
    alert(urlLink);
    */



    document.getElementById("titleAuthorBlock").innerHTML = titleWork;
    document.getElementById("typePar").innerHTML = workType;
    document.getElementById("authorPar").innerHTML = authorName;
    document.getElementById("hitsPar").innerHTML = hits;
    document.getElementById("countryPar").innerHTML = country;
    document.getElementById("workPar").href = urlLink;



  });


});
function pushToFavorites()
{
    var name = document.getElementById("titleAuthorBlock").innerHTML;
    var nameAut = document.getElementById("authorPar").innerHTML;
    var nameLink = document.getElementById("workPar").href;
    localStorage.setItem("favoritesTransfer", name);
    localStorage.setItem("favoritesAuthorTransfer", nameAut);
    localStorage.setItem("favoritesLinkTransfer",nameLink);
    window.location.href = "favorites.html";
}
