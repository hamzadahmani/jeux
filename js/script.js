
        document.addEventListener("click", function(event){
            if(event.target.id == "img") {
                
                bot()
                you()
                calcScore()
                Winner(user,nb)
            }
        })
            var botpalyer=document.querySelector('.bot');
            var yourplayer=document.querySelector('.you')
            var user ;
            var computer = "";
            var nb;
            var won = 0, lost = 0;


        
            function bot()
            {
                nb = Math.floor(Math.random()*3) + 1;
              
                console.log(nb)
                return(nb);
            }
            
            function you()
{
    if(event.target.name == "1") {
   
        user=1
    }
         if (event.target.name == "2"){
 
        user=2
    }
        if (event.target.name == "3"){
        
        user=3
    }
    console.log(user)
    return(user);
}


function Winner(user, nb) {
 
    if (((user == 1) && (nb == 3)) | ((user == 2) && (nb == 1)) | ((user == 3) && (nb == 2)) )  {
        won+=1
        document.getElementById("res").innerHTML = "Gagné"
      return (won);
    }
    if (((user == 3) && (nb == 1)) | ((user == 1) && (nb == 2)) | ((user == 2) && (nb == 3)) ) {
        lost+=1
        document.getElementById("res").innerHTML = "lose"
      return (lost);
    }
    else{
        document.getElementById("res").innerHTML = "Draw"
    }
  
    
}
function calcScore()
{
	document.getElementById("score").innerHTML = "Gagné: " + won + " fois." +"<br>"+ "Perdu: " + lost + " fois."
}