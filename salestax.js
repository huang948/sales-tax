var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function add(array) {
  var counter = 0;
  for (var j = 0; j < array.length; j++) {
    counter += array[j];
  } return counter;
}


function calculateSalesTax(salesData, taxRates) {
  var output = {};
  var keys = Object.keys(taxRates);
  for (var i = 0; i < salesData.length; i++) {
    if (salesData[i]['name'] in output) {
      output[salesData[i]['name']]['totalSales'] += add(salesData[i]['sales']);
      output[salesData[i]['name']]['totalTaxes'] += add(salesData[i]['sales']) * taxRates[salesData[i]['province']];
    } else {
      output[salesData[i]['name']] = {};
      output[salesData[i]['name']]['totalSales'] = add(salesData[i]['sales']);
      output[salesData[i]['name']]['totalTaxes'] = add(salesData[i]['sales']) * taxRates[salesData[i]['province']];
    }
  } return output;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

console.log(results);