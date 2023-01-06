
let cards=[]
let sum= 0
let hasblack=false
let isalive=false
let massage=""
let MassageEl=document.getElementById("massage-el")
// let SumEl=document.getElementById("sum-el")
let SumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")


function getrandamcard()
{
  let number =Math.floor(Math.random()*13 )+1
  if(number===1)
  {
    return 11
  }
  else if(number>10)
  {
    return 10
  }
  else
  {
    return number
  }
}

function startgame(){
  isalive=true
  let fristcard=getrandamcard()
let secondcard=getrandamcard()
  cards=[fristcard,secondcard]
  sum= fristcard+secondcard
  rendergame()
}

function rendergame(){
if(sum<=20)
 {
   massage= "Do you want to draw a new card?"
 }
 else if(sum===21){
   massage="you winner!"
    hasblack=true
 }
 else{  
  massage="you are out of the game"
    isalive=false
 }
 MassageEl.textContent=massage
 SumEl.textContent= "sum: "+sum
 cardEl.textContent= "card: " 
 for(let i=0;i<cards.length;i++)
 {
  cardEl.textContent+=cards[i]+" "
 }
}
function newcard(){
    if(isalive===true&&hasblack===false)
    {
      let card=getrandamcard()
      sum+=card
      cards.push(card)
      rendergame()
    }
    

}


