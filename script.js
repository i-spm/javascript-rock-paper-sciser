//challenge 1 
function ageinDays(){
var birthYear=prompt("what year were you born?: ");
var ageInDayss=(2020-birthYear)*365
var h1=document.createElement('h1');
var textAnswer=document.createTextNode('you are '+ ageInDayss+' days old');
 h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
     document.getElementById('ageInDays').remove();
    // document.getelementById('flex-box-result').remove();
}
function catGenerator(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
  image.src="https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-600w-1684423789.jpg";
 div.appendChild(image);

 
}

function rpsGame(yourChoice){
  console.log(yourChoice);
}