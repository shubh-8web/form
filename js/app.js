    var progress=document.querySelector("#progress")
    var stepcol=document.querySelectorAll(".step-col")
     
    var form1=document.querySelector("#form1")
    var form2=document.querySelector("#form2")
    var form3=document.querySelector("#form3")
    var form4=document.querySelector("#form4")
    
    var next1=document.querySelector("#Next1")
    var next2=document.querySelector("#Next2")
    var back1=document.querySelector("#Back1")
    var back2=document.querySelector("#Back2")

    next1.onclick=function(){
        form1.style.left = "-450px"
        form2.style.left="40px"        
        progress.style.width = "210px"
    }

    back1.onclick=function(){
        form1.style.left = "40px"
        form2.style.left="450px"  
        progress.style.width = "120px"

    }

    next2.onclick=function(){
        form2.style.left = "-450px"
        form3.style.left="40px"
        progress.style.width="360px"
        
    }

    back2.onclick=function(){
        form2.style.left = "40px"
        form3.style.left="450px"
        progress.style.width="210px"        
    }
    

    var subbtn=document.querySelector("#submit")
    var steprow=document.querySelector(".step-row")    
    
    
    function pro(){
       var stepitem=stepcol.forEach(element => {
               element.innerText=""
        
       });
   }


    subbtn.onclick=function(){
        form3.style.left="-450px"
        form4.style.top = "100px"
        pro()
    }