var config = {
   type: 'line',
   data: {
       labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
       datasets: [{
           label: "JAPAN",
           fill: false,
           backgroundColor: "#3A7AC9",
           borderWidth: 2,
           borderColor: "rgba(2,63,138,0.8)",
           pointBorderColor: "#fff",
           pointBackgroundColor: "rgba(2,63,138,0.8)",
           pointBorderWidth: 2,
           pointHoverRadius: 5,
           pointHoverBackgroundColor: "#1D5191",
           pointHoverBorderColor: "#fff",
           pointHoverBorderWidth: 2,
           tension: 0,
           data: [5, 7, 8, 3, 1, 4, 10]
       }, {
           label: "NIPPON",
           fill: false,
           backgroundColor: "#DB514E",
           borderWidth: 2,
           borderColor: "rgba(201,60,58,0.8)",
           pointBorderColor: "#fff",
           pointBackgroundColor: "rgba(201,60,58,0.8)",
           pointBorderWidth: 2,
           pointHoverRadius: 5,
           pointHoverBackgroundColor: "#9A1B19",
           pointHoverBorderColor: "#fff",
           pointHoverBorderWidth: 2,
           tension: 0,
           data: [1, 4, 4, 2, 6, 7, 3]
       }]
   },
   options: {
      responsive: true,
      scales: {
         xAxes: [{
            display: true,
            stacked: false,
            gridLines: {
               display: false
            }
         }],
         yAxes: [{
            display: true,
            scaleLabel: {
               display: true,
               labelString: '順位',
               fontFamily: 'monospace',
               fontSize: 14
            },
            ticks: {
               reverse: true,
               callback: function(value){
                  return value+'位';
               }
            }
         }]
      }
   }
};
