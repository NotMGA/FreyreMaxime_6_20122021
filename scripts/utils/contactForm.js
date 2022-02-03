// DOMW

const env = document.querySelector(".env")


function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
  document.getElementById("close_contact").focus();
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
console.log("Prenom :" + document.getElementById("pren").value);
console.log("Nom :"+ document.getElementById("nom").value);
console.log("Email :"+document.getElementById("email_modal").value);
console.log("Message :"+document.getElementById("message_modal").value);
closeModal();

document.getElementById("form_contact").reset();
document.getElementById('ermail').innerHTML ="";
document.getElementById('ernom').innerHTML = '' ; 
document.getElementById('erpren').innerHTML = '' ; 

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

  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }
    switch (event.key) {
      case "Escape":
        closeModal();
            
            break;
          default:
            return; // Quitter lorsque cela ne gère pas l'événement touche.
        }
      
        // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
        event.preventDefault();
      }, true);
