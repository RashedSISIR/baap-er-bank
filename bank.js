document.getElementById('deposit-btn').addEventListener('click',function(){
const depositeValue=document.getElementById('deposit-field');
const totalDeposite=depositeValue.value;
const totalDepositeString=parseFloat(totalDeposite);

const deposite=document.getElementById('deposite');
const depositTotal=deposite.innerText;
const depositTotalString=parseFloat(depositTotal);
const sumTotalDeposite=totalDepositeString+depositTotalString;
 deposite.innerText=sumTotalDeposite;


//  balance//
const ballanceValue=document.getElementById('ballance-field');
const totalBallanceValue=ballanceValue.innerText;
const totalBallanceValueString=parseFloat(totalBallanceValue);
const newBallance=totalBallanceValueString+totalDepositeString;

ballanceValue.innerText=newBallance

 depositeValue.value='';
 


})
//withdraw//
document.getElementById('button-field').addEventListener('click',function(){
   const withdrawField=document.getElementById('input-field');
   const newWithdrawString=withdrawField.value;
   const newWithdrawAmmount=parseFloat(newWithdrawString);
   
   const withdrawInput=document.getElementById('withdraw-total');
   const withdrawValue=withdrawInput.innerText;
   const withdrawString=parseFloat(withdrawValue);

   const totalWithdraw=newWithdrawAmmount+withdrawString;
   withdrawInput.innerText=totalWithdraw;
  
   const ballanceField=document.getElementById('ballance-field');
   const ballanceValue=ballanceField.innerText;
   const ballancestring=parseFloat(ballanceValue);
   const totalWithdrawAmmount=ballancestring-totalWithdraw;
   ballanceField.innerText=totalWithdrawAmmount;
   withdrawField.value='';
}
)