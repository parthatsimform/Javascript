memory = 0;
const process = document.getElementById("process");
const output = document.getElementById("output");
output.value = 0;
const btns=document.getElementsByTagName("button");
const mc = document.getElementById("mc");
const mr = document.getElementById("mr");

function checkNaN(res) {
    if (isNaN(res)) { 
        output.value = "Syntax Error";
    } else {
        output.value = res;
    }
}

Array.from(btns).forEach(btn => {
    btn.addEventListener("click", e => {
        switch (e.target.value || e.target.parentElement.value) {
            case "DEG":
                process.innerHTML = output.value + " RAD to DEG";
                checkNaN(output.value * 180 / 3.14159265359);
                e.target.value = "RAD";
                e.target.innerHTML = e.target.value;
                break;
            
            case "RAD":
                process.innerHTML = output.value + " DEG to RAD";
                checkNaN(output.value * 3.14159265359 / 180);
                e.target.value = "DEG";
                e.target.innerHTML = e.target.value;
                break;
            
            case "fe":
                checkNaN(parseFloat(output.value).toExponential());
                break;

            case "mc":
                memory = 0;
                mc.disabled = true;
                mr.disabled = true;
                break;
            
            case "mr":
                output.value = memory;
                break;
            
            case "m+":
                memory += parseFloat(output.value);
                break;
            
            case "m-":
                memory -= parseFloat(output.value);
                break;
            
            case "ms":
                memory = parseFloat(output.value);
                mc.disabled = false;
                mr.disabled = false;
                break;
            
            case "trigonometry":
                break;
            
            case "sin":
                process.innerHTML = "sin(" + output.value + ")";
                checkNaN(Math.sin(parseFloat(output.value)));
                break;
            
            case "cos":
                process.innerHTML = "cos(" + output.value + ")";
                checkNaN(Math.cos(parseFloat(output.value)));
                break;
            
            case "tan":
                process.innerHTML = "tan(" + output.value + ")";
                checkNaN(Math.tan(parseFloat(output.value)));
                break;
            
            case "function":
                break;
            
            case "ceiling":
                process.innerHTML = "⌈" + output.value + "⌉";
                checkNaN(Math.ceil(output.value));
                break;
            
            case "floor":
                process.innerHTML = "⌊" + output.value + "⌋";
                checkNaN(Math.floor(output.value));
                break;
            
            case "random":
                process.innerHTML = "Random Number";
                output.value = Math.random();
                break;
            
            case "2nd":
                break;
            
            case "2raiseTo":
                if (output.value === "0") {
                    output.value = "2**";
                } else if (output.value.toString().slice(-1) === "+" || output.value.toString().slice(-1) === "-" || output.value.toString().slice(-1) === "*" || output.value.toString().slice(-1) === "/") {
                    output.value += "2**";
                }
                else {
                    output.value += "*2**";
                }
                break;
            
            case "3raiseTo":
                if (output.value === "0") {
                    output.value = "3**";
                }else if (output.value.toString().slice(-1) === "+" || output.value.toString().slice(-1) === "-" || output.value.toString().slice(-1) === "*" || output.value.toString().slice(-1) === "/") {
                    output.value += "3**";
                } else {
                    output.value += "*3**";
                }
                break;
            
            case "cubeRoot":
                if (output.value === "0") {
                    output.value = "3√";
                } else {
                    output.value += "3√";
                }
                break;
            
            case "cube":
                process.innerHTML = output.value + "<sup>3</sup>";
                checkNaN(Math.pow(output.value, 3));
                break;
                
            case "clear":
                process.innerHTML = "";
                output.value = 0;
                break;
            
            case "delete":
                output.value = output.value.toString().substring(0, output.value.length - 1);
                process.innerHTML = "";
                break;
            
            case "pi":
                if (output.value == 0) {
                    output.value = 3.14159265359;
                }else if (output.value.toString().slice(-1) === "+" || output.value.toString().slice(-1) === "-" || output.value.toString().slice(-1) === "*" || output.value.toString().slice(-1) === "/") {
                    output.value += 3.14159265359;
                } else {
                    output.value += "*3.14159265359";
                }
                break;
            
            case "e":
                if (output.value == 0) {
                    output.value = 2.718;
                }else if (output.value.toString().slice(-1) === "+" || output.value.toString().slice(-1) === "-" || output.value.toString().slice(-1) === "*" || output.value.toString().slice(-1) === "/") {
                    output.value += 2.718;
                } else {
                    output.value += "*2.718";
                }
                break;
            
            case "square":
                process.innerHTML = output.value + "<sup>2</sup>";
                checkNaN(Math.pow(output.value, 2));
                break;
            
            case "oneUpon":
                process.innerHTML = "1/" + output.value;
                checkNaN(1 / output.value);
                break;
            
            case "mod":
                process.innerHTML = "|" + output.value + "|";
                checkNaN(Math.abs(output.value));
                break;
            
            case "exp":
                if (output.value === "0") {
                    output.value = "e**";
                }else if (output.value.toString().slice(-1) === "+" || output.value.toString().slice(-1) === "-" || output.value.toString().slice(-1) === "*" || output.value.toString().slice(-1) === "/") {
                    output.value += "e**";
                } else {
                    output.value += "*e**";
                }
                break;
            
            case "modulo":
                output.value += " % ";
                break;
            
            case "squareRoot":
                if (output.value === "0") {
                    output.value = "√";
                } else {
                    output.value += "√";
                }
                break;
            
            case "factorial":
                let ff = 1;
                process.innerHTML = output.value + "!";
                if (isNaN(output.value)) {
                    throw output.value = "Syntax Error";
                }
                for (i = 1; i <= output.value; i++) {
                    ff *= i;
                }
                output.value = ff;
                break;
            
            case "raiseTo":
                output.value += "**";
                break;
            
            case "tenRaiseTo":
                if (output.value === "0") {
                    output.value = "10**";
                }else if (output.value.toString().slice(-1) === "+" || output.value.toString().slice(-1) === "-" || output.value.toString().slice(-1) === "*" || output.value.toString().slice(-1) === "/") {
                    output.value += "10**";
                } else {
                    output.value += "*10**";
                }
                break;
            
            case "loge":
                process.innerHTML = "log<sub>e</sub>" + output.value;
                checkNaN(Math.log(output.value));
                break;
            
            case "ln":
                process.innerHTML = "ln" + output.value;
                checkNaN(Math.log2(output.value));
                break;
            
            case "invert":
                output.value = -output.value;
                break;
            
            case ".":
                if (output.value.toString().indexOf(".") == -1) {
                    output.value += ".";
                }
                break; 

            case "=":
                try {
                    process.innerHTML = output.value;
                    if (output.value.toString().includes("%")) {
                        op1 = output.value.toString().split(" % ")[0];
                        op2 = output.value.toString().split(" % ")[1];
                        checkNaN(op1 % op2);
                    } else if (output.value.toString().includes("3√")) {
                        op = output.value.toString().split("√")[1];
                        checkNaN(Math.cbrt(Function("return " + op)()));
                    } else if (output.value.toString().includes("√")) {
                        op = output.value.toString().split("√")[1];
                        checkNaN(Math.sqrt(Function("return " + op)()));
                    } else if (output.value.toString().includes("e**")) {
                        const res = output.value.toString().replace(/e/g, "2.718");
                        checkNaN(Function("return " + res)());
                    }else{
                        process.innerHTML = output.value;
                        if (output.value.toString() == eval(output.value).toString()) {
                            output.value = "Syntax Error";
                        } else {
                            output.value = parseFloat(eval(output.value).toFixed(6));
                        }
                    }
                } catch (e) {
                    output.value = "Syntax Error";
                }
                break;
            
            default:
                process.innerHTML = "";
                if (output.value === "0") {
                    output.value = "";
                }
                output.value += e.target.value || e.target.parentElement.value;
                break;
        }
    })
});