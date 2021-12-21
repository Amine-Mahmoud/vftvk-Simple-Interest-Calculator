function updateRate() 
// Function updates span with final value from slider
{
    var rateval = parseFloat(document.getElementById("rate").value,10);
    document.getElementById("rate_val").innerHTML=rateval+"%";
}
function checkdata()
// Function to check if Amount entered is less than or equal to zero
{
	var principal = document.getElementById("principal");
	if (principal.value<=0)
    {
        alert("Enter a positive number");
        principal.focus();
        return false ;
    }
    return true ;
}
function compute()
// Function determines interest earned an enters text under id=result
{
    if (checkdata())
    {
        var principal = parseFloat(document.getElementById("principal").value,10);
        var rate = parseFloat(document.getElementById("rate").value,10);    
        var years = parseInt(document.getElementById("years").value);
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+years;
        window.document.getElementById("result").innerHTML=
        "If you deposit <mark>"+principal+
        "</mark>,<br>at an interest rate of <mark>"+rate+
        "%</mark>.<br>You will receive an amount of <mark>"+interest+
        "</mark>,<br>in the year <mark>"+year+"</mark><br>";

    }
}

        