
// function fillDropDown() {
//     // write code to pupulate the dropdown
//     // console.log(`Entering ${arguments.callee.name}`)
//     var dropdownMenu = d3.select("#selDataset");
//     queryUrl="/names"
//     d3.json(queryUrl).then(function (data) {
//       data.forEach((sample) => {
//         dropdownMenu.append("option")
//           .text(sample)
//           .property("value", sample);
//       });
//     //   buildMetadata(data.names[0]);
//     //   createBubbleChart(data.names[0]);
//     //   createBarchart(data.names[0])
//     });
//   }
//   // /***********************************************/
  
//   fillDropDown()