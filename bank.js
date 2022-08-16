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