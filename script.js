var Options = document.getElementById('Options');
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputs = document.getElementById('inputs');
var results = document.getElementById('results');
var inputValue, resultValue, optionValue;

//now add listener
Options.addEventListener("change",myResult);
input.addEventListener("keyup", myResult);
results.addEventListener("change", myResult);
inputs.addEventListener("change", myResult);

function myResult() {
     
    inputValue = inputs.value;
    resultValue = results.value;
    optionValue = Options.value;

    
    // Tempreature Converter
    if (inputValue === " Celsius" && resultValue === "Fahrenheit") {
        result.value = Number(input.value) * 1.8+32;
    }
    else if (inputValue === " Celsius" && resultValue === "Kelvin") {
        result.value = Number(input.value) + 273.15;
    }
    else if (inputValue === " Celsius" && resultValue === " Celsius") {
        result.value = input.value;
    }
    if (inputValue === "Fahrenheit" && resultValue === " Celsius") {
        result.value = ((Number(input.value)- 32) * (5/9));
    }
    else if (inputValue === "Fahrenheit" && resultValue === "Kelvin") {
        result.value = (Number(input.value) + 459.67)*(5/9);
    }
    else if (inputValue === "Fahrenheit" && resultValue === "Fahrenheit") {
        result.value = input.value;
    }
    if (inputValue === "Kelvin" && resultValue === "Celsius") {
        result.value = (Number(input.value)-273.15);
    }
    else if (inputValue === "Kelvin" && resultValue === "Fahrenheit") {
        result.value = ((9/5)*(Number(input.value)-273) + 32);
    }
    else if (inputValue === "Kelvin" && resultValue === "Kelvin") {
        result.value = input.value;
    }
    
    
        // Weight Converter
        if (inputValue === "Kilogram" && resultValue === "Gram") {
            result.value = (Number(input.value) * 1000);
        }
        else if(inputValue === "Kilogram" && resultValue === "Miligram") {
            result.value = (Number(input.value) * 1000000);
        }
        else if (inputValue === "Kilogram" && resultValue === "Kilogram") {
            result.value = input.value;
        }
    
        if (inputValue === "Gram" && resultValue === "Kilogram") {
            result.value = (Number(input.value) / 1000);
        }
        else if (inputValue === "Gram" && resultValue === "Miligram") {
            result.value = (Number(input.value) * 1000);
        }
        else if (inputValue === "Gram" && resultValue === "Gram") {
            result.value = input.value;
        }
    
        if (inputValue === "Miligram" && resultValue === "Kilogram") {
            result.value = (Number(input.value) / 1000000);
        }
        else if (inputValue === "Miligram" && resultValue === "Gram") {
            result.value = (Number(input.value) / 1000);
        }
        else if (inputValue === "Miligram" && resultValue === "Miligram") {
            result.value = input.value;
        }
     // Length Converter
    if (inputValue === "centimeter" && resultValue === "kilometer") {
        result.value = Number(input.value) * 0.00001;
    } else if (inputValue === "centimeter" && resultValue === "meter") {
        result.value = Number(input.value) * 0.01;
    } else if (inputValue === "centimeter" && resultValue === "centimeter") {
        result.value = input.value;
    }


    if (inputValue === "meter" && resultValue === "kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (inputValue === "meter" && resultValue === "centimeter") {
        result.value = Number(input.value) * 100;
    } else if (inputValue === "meter" && resultValue === "meter") {
        result.value = input.value;
    }


    if (inputValue === "kilometer" && resultValue === "meter"){
        result.value = Number(input.value) * 1000;
    } else if (inputValue === "kilometer" && resultValue === "centimeter") {
        result.value = Number(input.value) * 100000;
    } else if (inputValue === "kilometer" && resultValue === "kilometer") {
        result.value = input.value;
    }
    
        // Time Converter
        if (inputValue === "Minute" && resultValue === "Hour") {
            result.value = (Number(input.value) / 60);
        }
        else if (inputValue === "Minute" && resultValue === "Second") {
            result.value = (Number(input.value) * 60);
        }
        else if (inputValue === "Minute" && resultValue === "Minute") {
            result.value = input.value;
        }
    
        if (inputValue === "Hour" && resultValue === "Minute") {
            result.value = (Number(input.value) * 60);
        }
        else if (inputValue === "Hour" && resultValue === "Second") {
            result.value = (Number(input.value) * 3600);
        }
        else if (inputValue === "Hour" && resultValue === "Hour") {
            result.value = input.value;
        }
    
        if (inputValue === "Second" && resultValue === "Minute") {
            result.value = (Number(input.value) / 60);
        }
        else if (inputValue === "Second" && resultValue === "Hour") {
            result.value = (Number(input.value) * 3600);
        }
        else if (inputValue === "Second" && resultValue === "Second") {
            result.value = input.value;
        }
    

}