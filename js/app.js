var creditCard;
var nCard;
do {
  creditCard = prompt('Digite o numero do cartão de crédito');
  nCard = [];
  for (var i = 0; i < creditCard.length; i++) {
    nCard.push( parseInt(creditCard[i]) );
  }
  nCard.reverse();
}
while (nCard.length < 10 && nCard.length !== 'number');
function isValidCard(creditCard) { 
  var total = 0,
      result = 0,
      subTotal = 0;   
 for (var x = 0; x < nCard.length; x++) {  
    if(x % 2 !== 0){
      subTotal = nCard[x] * 2;  
      if(subTotal > 9){
         subTotal -= 9;                
      }
      total = total + subTotal; 
    } else {
      nCard[x];                     
      total += nCard[x];     
    }
    result = total % 10;            
  }
  if (result == 0) {
      document.getElementById('valido').innerHTML = ('O cartão de número ' + creditCard + ' é valido');
  } else {
      document.getElementById('invalido').innerHTML = ('O cartão de número ' + creditCard + ' é invalido');
  }
 return result;
}
isValidCard(creditCard);
