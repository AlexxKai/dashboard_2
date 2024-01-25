// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
////////////////////////////////////////////////////////////////////////

function drawChart() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Element');
  data.addColumn('number', 'Percentage');
  data.addRows([
    ['CSS', 13.8],
    ['HTML', 51.6],
    ['JS', 29.4],
    ['SCSS', 5.2]
  ]);


  // Set chart options
  var options = {
    'title': 'Programming languages used',
    'width': 300,
    'height': 200
  };

  // Instantiate and draw the chart.
  var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
  chart.draw(data, null);
}

