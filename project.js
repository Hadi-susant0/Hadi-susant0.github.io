<<<<<<< HEAD
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');

let firstvalue = "";
let isfirstvalue = false;
let secondvalue = "";
let issecondvalue = false;
let sign = "";
let resultvalue = 0;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('Value')
        if(isfirstvalue === false){
            getFirstvalue(atr)
        } 
        if(issecondvalue === false){
            getSecondvalue(atr);
        }
    })
}

function getFirstvalue(el) {
    result.innerHTML = "";
    firstvalue += el;
    result.innerHTML = firstvalue;
    firstvalue = +firstvalue;
}

function getSecondvalue(el) {
    if(firstvalue != "" && sign != ""){
        secondvalue += el;
        result.innerHTML = secondvalue;
        secondvalue = +secondvalue;
    }
}

function getsign() {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) =>{
            sign = e.target.getAttribute('value')
            isfirstvalue = true;
        })
    }
}
getsign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+"){
        resultvalue = firstvalue + secondvalue;
    } else if(sign === "-"){
        resultvalue = firstvalue - secondvalue;
    } else if(sign === "/"){
        resultvalue = firstvalue / secondvalue;
    } else if(sign === "x"){
        resultvalue = firstvalue * secondvalue;
    }
    result.innerHTML = resultvalue;
    firstvalue = resultvalue; 
    secondvalue = "";
    
    checkresultlength();

})

function checkresultlength(){
    resultvalue = JSON.stringify(resultvalue);

    if(resultvalue.length >= 8){
        resultvalue = JSON.parse(resultvalue);
        result.innerHTML = resultvalue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstvalue != ""){
        resultvalue = -firstvalue;
        firstvalue = resultvalue;
    }
    if(firstvalue != "" && secondvalue != "" && sign != ""){
        resultvalue = -resultvalue;
    }

    result.innerHTML = resultvalue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstvalue != ""){
        resultvalue = firstvalue / 100;
        firstvalue = resultvalue;
    }
    if(firstvalue != "" && secondvalue != "" && sign != ""){
        resultvalue = resultvalue / 100;
    }

    result.innerHTML = resultvalue;
})  

comma.addEventListener('click', () => {
    result.innerHTML = "";
    resultvalue = "Maaf, masih dalam pengembangan";
    
    result.innerHTML = resultvalue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstvalue = "";
    isfirstvalue = false;
    secondvalue = "";
    issecondvalue = false;
    sign = "";
    resultvalue = 0;

=======
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');

let firstvalue = "";
let isfirstvalue = false;
let secondvalue = "";
let issecondvalue = false;
let sign = "";
let resultvalue = 0;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('Value')
        if(isfirstvalue === false){
            getFirstvalue(atr)
        } 
        if(issecondvalue === false){
            getSecondvalue(atr);
        }
    })
}

function getFirstvalue(el) {
    result.innerHTML = "";
    firstvalue += el;
    result.innerHTML = firstvalue;
    firstvalue = +firstvalue;
}

function getSecondvalue(el) {
    if(firstvalue != "" && sign != ""){
        secondvalue += el;
        result.innerHTML = secondvalue;
        secondvalue = +secondvalue;
    }
}

function getsign() {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) =>{
            sign = e.target.getAttribute('value')
            isfirstvalue = true;
        })
    }
}
getsign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+"){
        resultvalue = firstvalue + secondvalue;
    } else if(sign === "-"){
        resultvalue = firstvalue - secondvalue;
    } else if(sign === "/"){
        resultvalue = firstvalue / secondvalue;
    } else if(sign === "x"){
        resultvalue = firstvalue * secondvalue;
    }
    result.innerHTML = resultvalue;
    firstvalue = resultvalue; 
    secondvalue = "";
    
    checkresultlength();

})

function checkresultlength(){
    resultvalue = JSON.stringify(resultvalue);

    if(resultvalue.length >= 8){
        resultvalue = JSON.parse(resultvalue);
        result.innerHTML = resultvalue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstvalue != ""){
        resultvalue = -firstvalue;
        firstvalue = resultvalue;
    }
    if(firstvalue != "" && secondvalue != "" && sign != ""){
        resultvalue = -resultvalue;
    }

    result.innerHTML = resultvalue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstvalue != ""){
        resultvalue = firstvalue / 100;
        firstvalue = resultvalue;
    }
    if(firstvalue != "" && secondvalue != "" && sign != ""){
        resultvalue = resultvalue / 100;
    }

    result.innerHTML = resultvalue;
})  

comma.addEventListener('click', () => {
    result.innerHTML = "";
    resultvalue = "Maaf, masih dalam pengembangan";
    
    result.innerHTML = resultvalue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstvalue = "";
    isfirstvalue = false;
    secondvalue = "";
    issecondvalue = false;
    sign = "";
    resultvalue = 0;

>>>>>>> 41e10ce164532d104a86eac28e5e0ba056b22ed1
})