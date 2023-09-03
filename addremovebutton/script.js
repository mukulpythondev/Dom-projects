 var addb=document.querySelector("#add")
 var text=document.querySelector("h5")
 var clickcounter=0
 addb.addEventListener("click",function(){
    if (clickcounter==0){
        text.innerHTML="Friend" 
      text.style.color="green"
      addb.innerHTML="Remove Friend"
      addb.style.backgroundColor="gray"
      addb.style.color="white"
      clickcounter=1
    }
    else{
        text.innerHTML="Stranger" 
      text.style.color="red"
      addb.innerHTML="Add Friend"
      addb.style.backgroundColor="green"
      addb.style.color="white"
      clickcounter=0
    }
      
 })
 