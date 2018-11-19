(function calculator(){
    const numbers = [{
        keyCode: 48,
        keyTrigger: '0'
    }, {
        keyCode: 49,
        keyTrigger: '1'
    }, {
        keyCode: 50,
        keyTrigger: '2'
    }, {
        keyCode: 51,
        keyTrigger: '3'
    }, {
        keyCode: 52,
        keyTrigger: '4'
    }, {
        keyCode: 53,
        keyTrigger: '5'
    }, {
        keyCode: 54,
        keyTrigger: '6'
    }, {
        keyCode: 55,
        keyTrigger: '7'
    }, {
        keyCode: 56,
        keyTrigger: '8'
    }, {
        keyCode: 57,
        keyTrigger: '9'
    }, {
        keyCode: 46,
        keyTrigger: '.'
    }
    ];
    
    const buttons = [
        {
            keyCode: 43,
            keyTrigger: '+'
        }, {
            keyCode: 45,
            keyTrigger: '-'
        }, {
            keyCode: 42,
            keyTrigger: '*'
        }, {
            keyCode: 47,
            keyTrigger: '/'
        }
    ]
    
    let str = "0", a = "";
    
    function $(selector){
        return document.querySelector(selector);
    }
    
    function enter(){
        if (event.keyCode === 61 || event.keyCode === 13 || event.target.innerText === "="){
            let b = parseFloat(eval(str)) - parseInt(eval(str));
            if (b.toString().length >= 4){
                $(".result").innerText = eval(str).toFixed(2);
                str = eval(str).toFixed(2);
            }
            else{
            $(".result").innerText = `${eval(str)}`;
            str = `${eval(str)}`;
            }
    
            str = eval(str);
        }
    }
    
    function checkOperator(){
        for (let i = 0; i < buttons.length; i++){
            if (event.keyCode === buttons[i].keyCode){
                if(str !== ""){
                    if (str[str.length-1] !== "/" &&
                    str[str.length-1] !== "+" &&
                    str[str.length-1] !== "-" &&
                    str[str.length-1] !== "*" &&
                    str[str.length-1] !== "."){
                str += buttons[i].keyTrigger;
                $(".result").innerText = str;
                }
                }
                else{
                    $(".result").innerText = "0";
                } 
            }
        }
    }
    
    function checkOperatorClick(){
        for (let i = 0; i < buttons.length; i++){
            if (event.target.innerText === buttons[i].keyTrigger){
                if(str !== ""){
                    if (str[str.length-1] !== "/" &&
                    str[str.length-1] !== "+" &&
                    str[str.length-1] !== "-" &&
                    str[str.length-1] !== "*" &&
                    str[str.length-1] !== "."){
                str += buttons[i].keyTrigger;
                $(".result").innerText = str;
                }
                }
                else{
                    $(".result").innerText = "0";
                } 
            }
        }
    }
    
    function checkNumbers(){
        for (let i = 0; i < numbers.length; i++){
            if (event.keyCode === numbers[i].keyCode){
                if (str === "0" && event.keyCode !== 46){
                str = "";
                str += numbers[i].keyTrigger;
                }
                else{
                    if(event.keyCode === 46 && str[str.length - 1] === "."){
    
                    }
                    else{
                        str += numbers[i].keyTrigger;
                    }
                }
                $(".result").innerText = str;
            }
        }
    }
    
    function checkNumbersClick(){
        for (let i = 0; i < numbers.length; i++){
            if (event.target.innerText === numbers[i].keyTrigger){
                if (str === "0" && event.target.innerText !== "."){
                str = "";
                str += numbers[i].keyTrigger;
                }
                else{
                    if(event.target.innerText === "." && str[str.length - 1] === "."){
                    }
                    else{
                        str += numbers[i].keyTrigger;
                    }
                }
                $(".result").innerText = str;
            }
        }
    }
    
    function clearResult(){
        if(event.keyCode === 67 || event.target.innerText === "C"){
            $(".result").innerText = "0";
            str = "";
            a = "";
        }
    }
    
    $("body").addEventListener("keypress", function(event){
        checkNumbers();
        checkOperator();
        enter();
        clearResult();
    })
    
    $("body").addEventListener("click", function(event){
        checkNumbersClick();
        checkOperatorClick();
        enter();
        clearResult();
    })
    
    document.addEventListener("keyup", function(event){
        if (event.key === "Backspace"){
            str = str.toString().slice(0,-1);
            if (str === ""){
                str = "0";
            }
            $(".result").innerText = str;
        }
    });
})();

