'use strict';

    document.getElementById("btn").onclick = function () {
    //alert('Hello World');
    var data1 = document.getElementById("i1").value;
    var data2 = document.getElementById("i2").value;
    var data3 = document.getElementById("i3").value;

        console.log(typeof data1);
        console.log(isNaN (data1));
    

    console.log(data1);
    console.log(data2);
    console.log(data3);
    
        var msg = "";
        if (data1 == "" || data2 == "" || data3 == "") {
            msg = "Please enter all fields!";
        }
        else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
            msg = "Please enter valid numbers!";
        }
        else if (data1 <= 0 || data2 <= 0 || data3 <= 0) {
            msg = "Please enter positive numbers!";
        }
        else {
            var p = Number(data1);
            var r = parseFloat(data2);
            var n = parseInt(data3);

            r = r / 10 / 100;
            n = n * 12;
            var emi = p * r * (1 + r) ** n / ((1 + r) ** n - 1);
            var totalpaid = emi * n;
            var interestpaid = totalpaid - p;

            emi = Math.round(emi);
            totalpaid = Math.round(totalpaid);
            interestpaid = Math.round(interestpaid);

            document.getElementById("y1").innerHTML = p;
            document.getElementById("y2").innerHTML = totalpaid;
            document.getElementById("y3").innerHTML = interestpaid;
            document.getElementById("y4").innerHTML = emi;

            Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Egg Yolk Composition'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'interest',
                    y: 55.02
                },
                {
                    name: 'Loan Amount',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
            ]
        }
    ]
});
        }


        document.getElementById("result").innerHTML = msg;
}
