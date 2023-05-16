var allProducts = document.querySelectorAll(".card1  .img1")
   var content = document.querySelector("#content")
   var btn = document.querySelector("#btn1")
   var totalPrice = 0


   allProducts.forEach( function (item){
     item.onclick = function (){

         totalPrice +=   +(item.getAttribute("price"))
         content.innerHTML  +=  item.textContent + " "

         if ( content.innerHTML != ""){
            btn.style.display = "block"
            btn.style.color = "white"
            btn.style.backgroundColor = "gray"
            btn.style.width = "200px"
            btn.style.height = "45px"
         }
     }
   })

  
   btn.onclick = function (){
      document.getElementById('salary1').innerHTML=totalPrice +'  pound'
      }
   

   // /////////////////////////
   var allProducts2 = document.querySelectorAll(".card2  .img2")
   var content2 = document.querySelector("#content")
   var btn3 = document.querySelector("#btn2")
   var totalPrice2 = 0


   allProducts2.forEach( function (item){
     item.onclick = function (){

         totalPrice2 +=   +(item.getAttribute("price"))
         content.innerHTML  +=  item.textContent + " "

         if ( content.innerHTML != ""){
            btn3.style.display = "block"
            btn3.style.color = "white"
            btn3.style.backgroundColor = "gray"
            btn3.style.width = "200px"
            btn3.style.height = "45px"
         }
     }
   })

   btn3.onclick = function (){
      document.getElementById('salary2').innerHTML=totalPrice2 +'  pound'
      }
   

   // /////////////////////////
   
   var allProducts3 = document.querySelectorAll(".card3  .img3")
   var content3 = document.querySelector("#content")
   var btn5 = document.querySelector("#btn4")
   var totalPrice3 = 0
   


   allProducts3.forEach( function (item){
     item.onclick = function (){

     
         totalPrice3 +=   +(item.getAttribute("price"))
         content.innerHTML  +=  item.textContent + " "

         if ( content.innerHTML != ""){
            btn5.style.display = "block"
            btn5.style.color = "white"
            btn5.style.backgroundColor = "gray"
            btn5.style.width = "200px"
            btn5.style.height = "45px"
         }
     }
   })

   btn5.onclick = function (){
   document.getElementById('salary').innerHTML=totalPrice3 +'  pound'
   }

   // /////////////////////////
   
   
  var allproducts10 = document.querySelectorAll(".list-group .list-group-item .img10")
  var content11 = document.querySelector("#content10")
  var btn11 = document.querySelector("#btn10")
  var btn13 = document.querySelector("#btn12")
  var totalPrice5 = 0

  allproducts10.forEach( function (item){
   item.onclick = function (){
      
       totalPrice5 +=   +(item.getAttribute("price")) 
      
      
      

       content11.innerHTML  +=  item.textContent + " "

       if ( content11.innerHTML != ""){
          btn11.style.display = "block" 
          btn11.style.color = "white"
          btn11.style.backgroundColor = "gray"
          btn11.style.width = "200px"
          btn11.style.height = "45px"
       }
   }
 })

 btn10.onclick = function (){
   document.getElementById('content10').innerHTML=totalPrice5 +'pound'
 
  

   }
   // ///////////////////////
   