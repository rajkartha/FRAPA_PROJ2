// Trace1 for the 2012 Data
var trace1 = {
    x: data.map(row => row.Company),
    y: data.map(row => row.Sales_2012),
    // text: data.map(row => row.2018 Sales),
    name: "2012",
    type: "bar"
  };
  
  // Trace 2 for the 2018 Data
  var trace2 = {
    x: data.map(row => row.Company),
    y: data.map(row => row.Sales_2018),
    // text: data.map(row => row.Category),
    name: "2018",
    type: "bar"
  };
  
  // Combining both traces
  var data = [trace1, trace2];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "2012 vs 2018 Top Quick Service Restaurants Sales (Millions)",
    barmode: "group"
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
  