
//IndexPart

//get elements from index
function UseForm() {

    var email = document.forms["mainform"]["email"].value
    var firstName = document.forms["mainform"]["firstname"].value
    var lastName = document.forms["mainform"]["lastname"].value
    var adress = document.forms["mainform"]["adress"].value
    var city = document.forms["mainform"]["city"].value
    var province = document.forms["mainform"]["province"].value
    var membership = document.querySelector('input[name="membership"]:checked').value
   

    var outputMessage = "Full Name: " + firstName + " " + lastName + "<br>"
    outputMessage += "Email: " + email + "<br>"
    outputMessage += "Address: " + adress + "<br>"
    outputMessage += "City: " + city + "<br>";
    outputMessage += "Province: " + province + "<br>"
    outputMessage += "Membership: " + membership

    var output=document.getElementById("output")
    output.innerHTML = outputMessage
    }



    if (document.getElementById("main-form") === null || document.getElementById("main-form") === undefined) {
      }
    else {
        document.getElementById("main-form").addEventListener("submit", function (event) {
        event.preventDefault() // Prevent the form from submitting and refreshing the page
        UseForm() 
    });
    }

    







//ExcelPart:


document.getElementById("calculateButton").addEventListener("click", function () {

    myExcelFuns() 
})


var result = 0 // Declare a global variable to store the result

function myExcelFuns() {
   
    var numberStr = document.getElementById("numbers").value
    numberStr = numberStr.trim()

    // In case input is empty
    if (numberStr === "") {
        alert("Please enter numbers separated by spaces.")
        return
    }

    // Convert  string into array of numbers
    var numberArr = numberStr.split(" ")

    // Array containing  numbers
    var finalNumericArray = []

    for (var i = 0; i < numberArr.length; i++) {
        var num = parseFloat(numberArr[i])

        if (!isNaN(num)) {
            finalNumericArray.push(num)
        }
    }

    // Check if final array is empty and alert
    if (finalNumericArray.length === 0) {
        alert("Invalid input. Please enter valid numbers separated by spaces.")
        return
    }






    
    var selectedFunction = document.querySelector('input[name="excelFunction"]:checked').value

    // Use if-else blocks to perform the required calculations based on the selected function
    if (selectedFunction === "AutoSum") {
        // Calculate the total of all numbers
        result = finalNumericArray.reduce(function (acc, num) {
            return acc + num
        }, 0)
    } else if (selectedFunction === "Average") {
        // Calculate the average of the numbers
        result = finalNumericArray.reduce(function (acc, num) {
            return acc + num
        }, 0) / finalNumericArray.length
    } else if (selectedFunction === "Max") {
        // Find the maximum number
        result = Math.max.apply(null, finalNumericArray)
    } else {
        // Find the minimum number
        result = Math.min.apply(null, finalNumericArray)
    }

    // Display the result
    var outputDiv = document.getElementById("output")
    outputDiv.innerHTML = "Result: " + result
}





// Toggle between dark and light themes
document.getElementById("darkThemeButton").addEventListener("click", function () {
    document.body.classList.remove("light-theme")
    document.body.classList.add("dark-theme")
});

document.getElementById("lightThemeButton").addEventListener("click", function () {
    document.body.classList.remove("dark-theme")
    document.body.classList.add("light-theme")
});

