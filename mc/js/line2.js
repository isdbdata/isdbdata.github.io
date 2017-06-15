// var data = {
//   labels : ['1','2','3','4','5', '6', '7', '8', '9', '0','1', '2','3','1','2','3','4','5', '6', '7', '8'],
//   datasets : [
//     {
//       borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0,
//       data :[4.5,5.5,5.5,5.5,5.9,6,7.5,3.4,3.7,2.5,1.4,1,1.4,1.8,2.6,3.4,3.7,4.1,4.14.1,4.1,4.1]
//     }
//   ]
// }

var options = {
    responsive:true,
    maintainAspectRatio: false,
    // elements:{line:{tension:0.1}},
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min: 2.5,max:3.2},
        display:false
      }],
    },
}


$(document).ready(function() {
  $('.sparkline').each(function() {
    //Get context with jQuery - using jQuery's .get() method.
    var ctx = $(this).get(0).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx);
    
    // Get the chart data and convert it to an array
    var chartData = JSON.parse($(this).attr('data-chart_values'));
    
    // Build the data object
    var data = {};
    var labels = ['1','2','3','4','5', '6', '7', '8', '9', '0','1', '2','3','1','2','3','4','5', '6', '7', '8'];
    var datasets = {};
    
    // Create a null label for each value
    // for (var i = 0; i < chartData.length; i++) {
    //   labels.push('');
    // }
    
    // Create the dataset
    datasets['fill'] = false;
    datasets['pointRadius'] = 0;
    datasets['borderColor'] = 'rgba(191, 63, 63,0.7)';
    datasets['borderWidth'] = 3;
    datasets['data'] = chartData;
    
    // Add to data object
    data['labels'] = labels;
    data['datasets'] = Array(datasets);

    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    })
  })
});