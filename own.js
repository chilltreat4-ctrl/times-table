function deletee(){
    document.getElementById('p1').innerHTML = ''
    document.getElementById('number').value = ''
}


function see(){
    let num1 = document.getElementById('number').value
    let result = document.getElementById('p1')
    for(let num2 = 0;num2<11;num2=num2+1){
        
        result.innerHTML += num1+"*"+num2+"="+num1*num2+'<input id="input2" readonly>'
        

    }
}

