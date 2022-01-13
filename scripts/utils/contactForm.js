// DOMW

const env = document.querySelector(".env")


function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

env.addEventListener("click",finaltest);


var test ;
function finaltest()
{
    console.log("ins")
  test = 0;
prenom("pren");
prenom("nom");
email();
// verification des tests
 if (test ==0)  {
console.log("ok");
  }
}

function prenom(last){
    var firstname =document.getElementById(last).value;
    var reg_pren=/^[a-zA-Z]+ [a-zA-Z]+$|^[a-zA-Z]+$|^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/;
    if( !reg_pren.test( firstname ) ) {
        //message d'erreur 
        document.getElementById('er'+last+'').innerHTML = 'Champ incorrect' ;    
        
        test++;
    
     } else {
      document.getElementById('er'+last+'').innerHTML = '' ; 
      
      
      }
}
//  test pour  l'email 
function email () {
    var mail =document.getElementById("email_modal").value;
    // regex @ et . obligatoir 
    const regemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regemail.test(mail)){
      // message d'erreur 
      document.getElementById('ermail').innerHTML ="Adresse mail incorrecte "; 
      
      test++;
    } else{
      
      document.getElementById('ermail').innerHTML ="";  
    }
  
  }
