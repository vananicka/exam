var ici, en,resultat,nbrtent ,niv1 ,niv2,niv3 ,niv ,max,btn1;

niv1 = document.getElementById('niv01').onclick = function(){
  niv = niv1;
  }
niv2 = document.getElementById('niv02').onclick = function(){
  niv = niv2;
  }
niv3 = document.getElementById('niv03').onclick = function(){
  niv = niv3;
  }


 niv1 = 11;
 niv2 = 6;
 niv3 =4;
btn1 = document.getElementById('btn1');
btn1.onclick=function(){
if (niv1.checked) {
  niv = niv1;
  niv1.checked=false;
}

else if (niv1.checked) {
  niv = niv2;
  niv2.checked=false;
}

else if (niv1.checked) {
  niv = niv3;
  niv3.checked=false;
}

if (document.getElementById('nbr').value.trim() !== '') {
  max = document.getElementById('nbr').value;
  document.getElementById('nbr').value='';
}

function randomize(param){
  return Math.floor(Math.random()*param+1);
}

randval=randomize(max);
alert('niveau game='+niv+ ' max='+max+' randval='+randval);
 }

  nbrtent =0;
 ici=document.getElementById('test');
 en=document.getElementById('btn');
 resultat = document.getElementById('valiny');

en.onclick=function(){
  
  var  tmp=ici.value;
  ici.value='';
  nbrtent++;
  
  if (nbrtent < niv ){
   if(tmp>randval){
      
      resultat.innerHTML=resultat.innerHTML +'<br>'+'tentative N°:'+nbrtent +' dia '+  tmp + 'trop grand' ;
  }

  else if (tmp<randval){ 
      
      resultat.innerHTML =resultat.innerHTML+'<br>' +'tentative N°:'+nbrtent +' dia '+  tmp+ 'très petit';
  }
  else if (tmp=randval){
      resultat.innerHTML= tmp+   ' exacte';
  }
  

  
}
     else
      resultat.innerHTML = resultat.innerHTML+'<br>' +'oupsss!!!terminer';
            
 };
 


 
