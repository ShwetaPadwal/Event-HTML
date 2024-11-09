document.getElementById('btn').onclick = function () {
    //alert('Hello World');
    //confirm('Are you sure you want to proceed?');
    //prompt('Enter your name:');

    //console.log(document.getElementById('x1'));

    var data = document.getElementById("x1").value;
    console.log(data);

    var msg = "";
    // if (data == "") {
    //     msg = "Please enter pincode"
    // }
    // else if (data.length != 6) {
    //     msg = "Pincode should be 6 digits";
    // }
    // else {
    //     msg = "Valid Pincode";
    // }

        
    console.log(document.getElementById('result'));
    document.getElementById('result').innerHTML = msg;
    
};