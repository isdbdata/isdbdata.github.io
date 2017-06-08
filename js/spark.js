Chart.defaults.global.elements.line.borderWidth = 1.5;
Chart.defaults.line.spanGaps = false;
Chart.defaults.global.legend.display = false;


var ctx1 = document.getElementById("af-1").getContext('2d');
var myChart = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [29.83,30.55,31.28,32.01,33.4,36.8,36.87,36.93,37,37.51,38.03],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    // elements:{line:{tension:0.1}},
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min: 29,max:39},
        display:false
      }],
    },
  }
});

var ctxaf2 = document.getElementById("af-2").getContext('2d');
var myChart = new Chart(ctxaf2, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [13.97,3.93,1.28,0.76,2,3,3.5,4,4.5,5,5.5],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {max:14},
        display:false
      }],
    },
  }
});

var ctxaf3 = document.getElementById("af-3").getContext('2d');
var myChart = new Chart(ctxaf3, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [20.3,20.17,20.35,19.69,18.89,20.57,21.71,23.23,24.93,26.86,29.11],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:18,max:30},
        display:false
      }],
    },
  }
});

var ctxaf4 = document.getElementById("af-4").getContext('2d');
var myChart = new Chart(ctxaf4, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [55.92,59.06,60.89,62.01,64.08,67.46,71.39,75.87,80.88,86.65,93.32],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:55,max:94},
        display:false
      }],
    },
  }
});

var ctxaf5 = document.getElementById("af-5").getContext('2d');
var myChart = new Chart(ctxaf5, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [680.5,660.22,650.66,615.09,565.44,558.97,588.78,629.05,673.78,715.91,765.57],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:540,max:766},
        display:false
      }],
    },
  }
});

var ctxaf6 = document.getElementById("af-6").getContext('2d');
var myChart = new Chart(ctxaf6, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [6.44,7.39,4.67,-1.55,4.38,6,6,6,6,6,6],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:-2,max:8},
        display:false
      }],
    },
  }
});


var ctxaf7 = document.getElementById("af-7").getContext('2d');
var myChart = new Chart(ctxaf7, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [1.08,1.72,0.46,0.56,1.34,0.93,0.49,0.43,0.27,0.06,-0.36],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:-1,max:1.8},
        display:false
      }],
    },
  }
});

var ctxaf8 = document.getElementById("af-8").getContext('2d');
var myChart = new Chart(ctxaf8, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [5.32,8.55,2.25,2.86,7.08,4.51,2.27,1.83,1.07,0.24,-1.25],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:-1.5,max:9},
        display:false
      }],
    },
  }
});


var ctxaf21 = document.getElementById("af-21").getContext('2d');
var myChart = new Chart(ctxaf21, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [2.56,6.46,1.75,2.75],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:1.5,max:7},
        display:false
      }],
    },
  }
});

var ctxaf22 = document.getElementById("af-22").getContext('2d');
var myChart = new Chart(ctxaf22, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [6.1,6.2,6.6],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:5.8,max:7},
        display:false
      }],
    },
  }
});

var ctxaf23 = document.getElementById("af-23").getContext('2d');
var myChart = new Chart(ctxaf23, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [6.5,6.5,6.9],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:6.2,max:7},
        display:false
      }],
    },
  }
});

var ctxaf24 = document.getElementById("af-24").getContext('2d');
var myChart = new Chart(ctxaf24, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [9.8,9.9,9.5],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:9.2,max:10.1},
        display:false
      }],
    },
  }
});

var ctxaf25 = document.getElementById("af-25").getContext('2d');
var myChart = new Chart(ctxaf25, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [8.8,9.4,8.3],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:8.1,max:9.7},
        display:false
      }],
    },
  }
});

var ctxaf28 = document.getElementById("af-28").getContext('2d');
var myChart = new Chart(ctxaf28, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [50.9,55.4,57.2,61.1],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:50,max:62},
        display:false
      }],
    },
  }
});

// albania - alb

var alb1 = document.getElementById("alb-1").getContext('2d');
var myChart = new Chart(alb1, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9,2.9],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    // elements:{line:{tension:0.1}},
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min: 2.5,max:3.2},
        display:false
      }],
    },
  }
});

var alb2 = document.getElementById("alb-2").getContext('2d');
var myChart = new Chart(alb2, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [1.4,1,1.8,2.6,3.4,3.7,4.1,4.1,4.1,4.1,4.1],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:0.8,max:4.5},
        display:false
      }],
    },
  }
});

var alb3 = document.getElementById("alb-3").getContext('2d');
var myChart = new Chart(alb3, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [12.3,12.8,13.2,11.4,12.1,12.3,12.9,13.8,14.9,15.9,17.1],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:10.5,max:18},
        display:false
      }],
    },
  }
});

var alb4 = document.getElementById("alb-4").getContext('2d');
var myChart = new Chart(alb4, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [29.6,30.3,31.4,32.6,34.2,36.2,38.5,41,43.6,46.3,49.2],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:28,max:50},
        display:false
      }],
    },
  }
});

var alb5 = document.getElementById("alb-5").getContext('2d');
var myChart = new Chart(alb5, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [4249,4413.3,4574.8,3943.2,4203.4,4268.5,4492.7,4819.5,5187,5565.8,5997.7],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:3900,max:6000},
        display:false
      }],
    },
  }
});

var alb6 = document.getElementById("alb-6").getContext('2d');
var myChart = new Chart(alb6, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [2,1.9,1.6,1.9,1.3,2.3,2.9,3,3,3,3],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:1,max:3.2},
        display:false
      }],
    },
  }
});


var alb7 = document.getElementById("alb-7").getContext('2d');
var myChart = new Chart(alb7, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [-1.3,-1.4,-1.7,-1.2,-1.5,-1.7,-1.7,-1.6,-1.6,-1.7,-1.6],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:-1.9,max:-1.0},
        display:false
      }],
    },
  }
});

var alb8 = document.getElementById("alb-8").getContext('2d');
var myChart = new Chart(alb8, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [-10.2,-10.8,-12.9,-10.8,-12.1,-13.7,-13,-11.8,-10.8,-10.6,-9.5],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:-14,max:-9},
        display:false
      }],
    },
  }
});

var alb9 = document.getElementById("alb-9").getContext('2d');
var myChart = new Chart(alb9, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [7.2,8.8,8.4,8.3,8.4,8.5,8.7],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:7,max:9},
        display:false
      }],
    },
  }
});

var alb10 = document.getElementById("alb-10").getContext('2d');
var myChart = new Chart(alb10, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [148.3,177.8,166.6,191.2,186,177.2,169.8],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:145,max:195},
        display:false
      }],
    },
  }
});


var alb11 = document.getElementById("alb-11").getContext('2d');
var myChart = new Chart(alb11, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [58.1,68.9,63.5,72.5,68.9,69.8,66.3],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:57,max:73},
        display:false
      }],
    },
  }
});

var alb12 = document.getElementById("alb-12").getContext('2d');
var myChart = new Chart(alb12, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [36.3,31.5,31.7,38,36.5,37.4,37.1],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:30,max:39},
        display:false
      }],
    },
  }
});


var alb13 = document.getElementById("alb-13").getContext('2d');
var myChart = new Chart(alb13, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [11,11,13.4,21,17.5,15.8,14],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:10.5,max:22},
        display:false
      }],
    },
  }
});

var alb14 = document.getElementById("alb-14").getContext('2d');
var myChart = new Chart(alb14, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [11,11,13.4,21,17.5,15.8,14],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:10.5,max:22},
        display:false
      }],
    },
  }
});

var alb15 = document.getElementById("alb-15").getContext('2d');
var myChart = new Chart(alb15, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [4.3,4.3,5.1,8,6.5,6.2,5.5],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:4,max:8},
        display:false
      }],
    },
  }
});

var alb16 = document.getElementById("alb-16").getContext('2d');
var myChart = new Chart(alb16, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [33.8,35.7,27.1,8.4,10.7,14.3,18.1],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:7.5,max:36},
        display:false
      }],
    },
  }
});

var alb17 = document.getElementById("alb-17").getContext('2d');
var myChart = new Chart(alb17, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [3.7,3.9,3.6,1.8,1.9,2.2,2.5],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:1.5,max:4.1},
        display:false
      }],
    },
  }
});

var alb18 = document.getElementById("alb-18").getContext('2d');
var myChart = new Chart(alb18, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [1.5,1.5,1.4,0.7,0.7,0.9,1],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:0.5,max:1.6},
        display:false
      }],
    },
  }
});

var alb19 = document.getElementById("alb-19").getContext('2d');
var myChart = new Chart(alb19, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [3.5,3.4,2.7,1.1,1.2,1.4,1.7],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:1,max:3.7},
        display:false
      }],
    },
  }
});

var alb20 = document.getElementById("alb-20").getContext('2d');
var myChart = new Chart(alb20, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [-3.4,-5,-5.2,-4.1,-2.2,-2.5,-1.4],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:-5.5,max:-1.2},
        display:false
      }],
    },
  }
});


var alb21 = document.getElementById("alb-21").getContext('2d');
var myChart = new Chart(alb21, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [2.7,2.9,3.1,3.1,3.2,3.2,3.5],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:2.5,max:3.7},
        display:false
      }],
    },
  }
});

var alb22 = document.getElementById("alb-22").getContext('2d');
var myChart = new Chart(alb22, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [6.3,6.8,6.3,5.7,5.7,5.7,6],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:5.5,max:7.0},
        display:false
      }],
    },
  }
});

var alb23 = document.getElementById("alb-23").getContext('2d');
var myChart = new Chart(alb23, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [1.6,5.2,19.4,8.7,4.6,4.1,5.4],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:1.5,max:20},
        display:false
      }],
    },
  }
});

var alb24 = document.getElementById("alb-24").getContext('2d');
var myChart = new Chart(alb24, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [3.5,3.5,4.2,0.1,-0.7,2.4,2.8],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:-1,max:4.5},
        display:false
      }],
    },
  }
});

var alb25 = document.getElementById("alb-25").getContext('2d');
var myChart = new Chart(alb25, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [94.5,121.8,113.7,118.7,118.1,110.9,106.8],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:94,max:122},
        display:false
      }],
    },
  }
});

var alb26 = document.getElementById("alb-26").getContext('2d');
var myChart = new Chart(alb26, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [37,47.2,43.4,45,43.8,43.7,41.7],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:36.5,max:48},
        display:false
      }],
    },
  }
});

var alb27 = document.getElementById("alb-27").getContext('2d');
var myChart = new Chart(alb27, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [108.2,105.7,105.5,126,124.1,129.9,128.2],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:104,max:130.2},
        display:false
      }],
    },
  }
});

var alb28 = document.getElementById("alb-28").getContext('2d');
var myChart = new Chart(alb28, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [145.9,146.6,149.4,147.7,152.2,153.4,156.9],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:145,max:158},
        display:false
      }],
    },
  }
});

// algeria - dza


var dza1 = document.getElementById("dza-1").getContext('2d');
var myChart = new Chart(dza1, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[37.5,38.3,39.1,40,40.8,41.5,42.3,43.1,43.9,44.6,45.3],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
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
});

var dza2 = document.getElementById("dza-2").getContext('2d');
var myChart = new Chart(dza2, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [3.3,2.8,3.8,3.8,4.2,1.4,0.6,1.2,1.7,2.2,2.3],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:0.8,max:4.5},
        display:false
      }],
    },
  }
});

var dza3 = document.getElementById("dza-3").getContext('2d');
var myChart = new Chart(dza3, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[209,209.7,213.5,164.8,160.8,173.9,177.7,181.9,187.6,194.9,202.2],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:10.5,max:18},
        display:false
      }],
    },
  }
});

var dza4 = document.getElementById("dza-4").getContext('2d');
var myChart = new Chart(dza4, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[501,523.4,553,580.2,612.5,634.7,653.1,675.7,701,730.7,763.4],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:28,max:50},
        display:false
      }],
    },
  }
});

var dza5 = document.getElementById("dza-5").getContext('2d');
var myChart = new Chart(dza5, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[5574.2,5475.7,5458.9,4123.3,3944.4,4187.8,4197.9,4221.4,4276.2,4368.7,4462.3],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:3900,max:6000},
        display:false
      }],
    },
  }
});

var dza6 = document.getElementById("dza-6").getContext('2d');
var myChart = new Chart(dza6, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[8.9,3.3,2.9,4.8,6.4,4.8,4.3,4,4,4,4],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:1,max:3.2},
        display:false
      }],
    },
  }
});


var dza7 = document.getElementById("dza-7").getContext('2d');
var myChart = new Chart(dza7, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [12.3,0.8,-9.4,-27.3,-26.3,-21.4,-18.1,-17.3,-15.7,-14.4,-14.7],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:-1.9,max:-1.0},
        display:false
      }],
    },
  }
});

var dza8 = document.getElementById("dza-8").getContext('2d');
var myChart = new Chart(dza8, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[5.9,0.4,-4.4,-16.6,-16.4,-12.3,-10.2,-9.5,-8.4,-7.4,-7.3],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:-14,max:-9},
        display:false
      }],
    },
  }
});

var dza9 = document.getElementById("dza-9").getContext('2d');
var myChart = new Chart(dza9, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[5.5,5.2,5.5,4.7,5.1,7.9,11.5,17,23.6,30],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:7,max:9},
        display:false
      }],
    },
  }
});

var dza10 = document.getElementById("dza-10").getContext('2d');
var myChart = new Chart(dza10, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[6.9,7.3,8.2,11.5,14.6,19.9,25.7,36.3,47.8,57.9],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:145,max:195},
        display:false
      }],
    },
  }
});


var dza11 = document.getElementById("dza-11").getContext('2d');
var myChart = new Chart(dza11, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[2.6,2.5,2.6,2.8,3.3,4.8,6.7,9.6,13.3,16.5],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:57,max:73},
        display:false
      }],
    },
  }
});

var dza12 = document.getElementById("dza-12").getContext('2d');
var myChart = new Chart(dza12, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[3473.7,3717.6,3258.3,3099.2,2263.1,1182.5,709.6,405.8,237.7,139.7],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:30,max:39},
        display:false
      }],
    },
  }
});


var dza13 = document.getElementById("dza-13").getContext('2d');
var myChart = new Chart(dza13, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[1.1,0.7,0.4,1.7,1,1.1,2.3,3.5,5.2,7.3],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:10.5,max:22},
        display:false
      }],
    },
  }
});

var dza14 = document.getElementById("dza-14").getContext('2d');
var myChart = new Chart(dza14, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [1.1,0.7,0.4,1.7,1,1.1,2.3,3.5,5.2,7.3],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:10.5,max:22},
        display:false
      }],
    },
  }
});

var dza15 = document.getElementById("dza-15").getContext('2d');
var myChart = new Chart(dza15, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[0.4,0.3,0.1,0.4,0.2,0.3,0.6,0.9,1.5,2.1],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:4,max:8},
        display:false
      }],
    },
  }
});

var dza16 = document.getElementById("dza-16").getContext('2d');
var myChart = new Chart(dza16, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [14.2,13.5,21.8,15.8,21.1,19.1,17.7,16.6,16.9,17.9],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:7.5,max:36},
        display:false
      }],
    },
  }
});

var dza17 = document.getElementById("dza-17").getContext('2d');
var myChart = new Chart(dza17, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[0.2,0.1,0.1,0.3,0.2,0.2,0.4,0.6,0.9,1.3],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:1.5,max:4.1},
        display:false
      }],
    },
  }
});

var dza18 = document.getElementById("dza-18").getContext('2d');
var myChart = new Chart(dza18, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [0.1,0,0,0.1,,0.1,0.1,0.2,0.2,0.4],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        ticks: {min:-0.1,max:0.5},
        display:false
      }],
    },
  }
});

var dza19 = document.getElementById("dza-19").getContext('2d');
var myChart = new Chart(dza19, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[3.3,2.1,1.8,4.4,3.1,3,2.9,2.8,2.9,3.1],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:1,max:3.7},
        display:false
      }],
    },
  }
});

var dza20 = document.getElementById("dza-20").getContext('2d');
var myChart = new Chart(dza20, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[-4.4,-0.4,-7.3,-16.4,-15.7,-10.5,-9.4,-8.9,-8.2,-7.4],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:-5.5,max:-1.2},
        display:false
      }],
    },
  }
});


var dza21 = document.getElementById("dza-21").getContext('2d');
var myChart = new Chart(dza21, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data:[98.4,105.6,109,86.4,86.3,84.3,83.2,83.4,84.9,88.4],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:2.5,max:3.7},
        display:false
      }],
    },
  }
});

var dza22 = document.getElementById("dza-22").getContext('2d');
var myChart = new Chart(dza22, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [141,152.8,155.4,127.9,126.2,122,119.4,119.3,122,126.4],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:5.5,max:7.0},
        display:false
      }],
    },
  }
});

var dza23 = document.getElementById("dza-23").getContext('2d');
var myChart = new Chart(dza23, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [7.6,7.4,16.1,-3.3,3,2.2,4.2,6.1,7.3,9.5],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:1.5,max:20},
        display:false
      }],
    },
  }
});

var dza24 = document.getElementById("dza-24").getContext('2d');
var myChart = new Chart(dza24, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [10.9,8.4,14.4,0.3,1.8,1.2,3.4,5.7,7.8,8.9],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:-1,max:4.5},
        display:false
      }],
    },
  }
});

var dza25 = document.getElementById("dza-25").getContext('2d');
var myChart = new Chart(dza25, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [-234,-262.7,-259.5,-346.2,-315.3,-215.1,-156.8,-111.1,-65.9,-23],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:94,max:122},
        display:false
      }],
    },
  }
});

var dza26 = document.getElementById("dza-26").getContext('2d');
var myChart = new Chart(dza26, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [-89,-90.5,-81.5,-85.1,-71.1,-51.8,-40.5,-29.5,-18.3,-6.5],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:36.5,max:48},
        display:false
      }],
    },
  }
});

var dza27 = document.getElementById("dza-27").getContext('2d');
var myChart = new Chart(dza27, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [77.5,79.4,80.6,100.7,109.4,112.9,118.6,125.8,132.9,139.9,144.3],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:104,max:130.2},
        display:false
      }],
    },
  }
});

var dza28 = document.getElementById("dza-28").getContext('2d');
var myChart = new Chart(dza28, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [81.9,80.7,82.4,78.9,77.5,85.3,85.3,82.1,79.6,77.1],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:145,max:158},
        display:false
      }],
    },
  }
});

// azerbaijan aze


var aze1 = document.getElementById("aze-1").getContext('2d');
var myChart = new Chart(aze1, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
     data: [9.2,9.3,9.3,9.4,9.5,9.6,9.6,9.7,9.8,9.9,10],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
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
});

var aze2 = document.getElementById("aze-2").getContext('2d');
var myChart = new Chart(aze2, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [2.2,5.8,2.8,1.1,-3.8,-1,2,3.1,2.8,3,3],


      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:0.8,max:4.5},
        display:false
      }],
    },
  }
});

var aze3 = document.getElementById("aze-3").getContext('2d');
var myChart = new Chart(aze3, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [68.7,73.6,75.2,50.8,37.6,38.6,42,45.6,48.8,53.6,58.5],


      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:10.5,max:18},
        display:false
      }],
    },
  }
});

var aze4 = document.getElementById("aze-4").getContext('2d');
var myChart = new Chart(aze4, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [147.7,158.8,166.2,169.8,165.5,167.4,174.6,183.9,192.8,202.7,213.2],

      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:28,max:50},
        display:false
      }],
    },
  }
});

var aze5 = document.getElementById("aze-5").getContext('2d');
var myChart = new Chart(aze5, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [7471.8,7936.5,8048.8,5396.4,3956.4,4032.4,4350.6,4685.6,4982.1,5425,5870.7],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:3900,max:6000},
        display:false
      }],
    },
  }
});

var aze6 = document.getElementById("aze-6").getContext('2d');
var myChart = new Chart(aze6, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [1,2.4,1.4,4,12.4,10,8,6,6,6,6],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:1,max:3.2},
        display:false
      }],
    },
  }
});


var aze7 = document.getElementById("aze-7").getContext('2d');
var myChart = new Chart(aze7, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [13.8,11.8,10,-0.2,-1.4,0.5,1.6,2,2.4,3.2,3.7],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:-1.9,max:-1.0},
        display:false
      }],
    },
  }
});

var aze8 = document.getElementById("aze-8").getContext('2d');
var myChart = new Chart(aze8, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [20,16.1,13.3,-0.4,-3.8,1.3,3.8,4.4,5,6,6.3],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:-14,max:-9},
        display:false
      }],
    },
  }
});

var aze9 = document.getElementById("aze-9").getContext('2d');
var myChart = new Chart(aze9, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [10.3,10.1,11.8,13.2,13.8,14,14.4,14.8,15.1,15.3],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:7,max:9},
        display:false
      }],
    },
  }
});

var aze10 = document.getElementById("aze-10").getContext('2d');
var myChart = new Chart(aze10, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [25.7,26.1,32.7,58.6,72.4,62.7,60.7,60,58.3,56.4],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:145,max:195},
        display:false
      }],
    },
  }
});


var aze11 = document.getElementById("aze-11").getContext('2d');
var myChart = new Chart(aze11, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [14.8,13.6,15.7,24.9,36.5,34.2,30.8,29.5,27.4,24.2],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:57,max:73},
        display:false
      }],
    },
  }
});

var aze12 = document.getElementById("aze-12").getContext('2d');
var myChart = new Chart(aze12, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [109.2,149.2,131.9,59.9,54.5,54.8,55.4,56.7,57.4,58.9],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:30,max:39},
        display:false
      }],
    },
  }
});


var aze13 = document.getElementById("aze-13").getContext('2d');
var myChart = new Chart(aze13, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [4.7,7.2,5.7,6.6,16.5,13.9,11.1,10.5,9.9,9.5],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:10.5,max:22},
        display:false
      }],
    },
  }
});

var aze14 = document.getElementById("aze-14").getContext('2d');
var myChart = new Chart(aze14, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [4.7,7.2,5.7,6.6,16.5,13.9,11.1,10.5,9.9,9.5],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:10.5,max:22},
        display:false
      }],
    },
  }
});

var aze15 = document.getElementById("aze-15").getContext('2d');
var myChart = new Chart(aze15, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [2.7,3.7,2.8,2.8,8.3,7.6,5.6,5.2,4.7,4.1],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:4,max:8},
        display:false
      }],
    },
  }
});

var aze16 = document.getElementById("aze-16").getContext('2d');
var myChart = new Chart(aze16, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [50.6,45.1,27.7,37.7,36.2,38.4,46.4,45.9,45.4,45.5],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:7.5,max:36},
        display:false
      }],
    },
  }
});

var aze17 = document.getElementById("aze-17").getContext('2d');
var myChart = new Chart(aze17, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [2.4,3.2,1.6,2.5,6,5.3,5.1,4.8,4.5,4.3],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:1.5,max:4.1},
        display:false
      }],
    },
  }
});

var aze18 = document.getElementById("aze-18").getContext('2d');
var myChart = new Chart(aze18, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [1.4,1.7,0.8,1.1,3,2.9,2.6,2.4,2.1,1.9],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        // ticks: {min:-0.1,max:0.5},
        display:false
      }],
    },
  }
});

var aze19 = document.getElementById("aze-19").getContext('2d');
var myChart = new Chart(aze19, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [13.6,11,3.1,1.7,7.1,7.2,7.4,7,6.6,6.4],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:1,max:3.7},
        display:false
      }],
    },
  }
});

var aze20 = document.getElementById("aze-20").getContext('2d');
var myChart = new Chart(aze20, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [-0.2,0.6,-0.5,-0.5,-0.4,-0.3,-0.1,-0.2,-0.2,-0.1],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:-5.5,max:-1.2},
        display:false
      }],
    },
  }
});


var aze21 = document.getElementById("aze-21").getContext('2d');
var myChart = new Chart(aze21, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [14.2,16.2,16.4,4.4,5.1,5.5,6.3,6.7,7.8,8.9],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:2.5,max:3.7},
        display:false
      }],
    },
  }
});

var aze22 = document.getElementById("aze-22").getContext('2d');
var myChart = new Chart(aze22, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [17.6,20.9,22.2,5.5,6.5,7.2,8.3,8.9,10.2,11.6],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:5.5,max:7.0},
        display:false
      }],
    },
  }
});

var aze23 = document.getElementById("aze-23").getContext('2d');
var myChart = new Chart(aze23, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [26,14.5,0.7,-46.2,29.9,11.7,10.6,14.1,15.3,13],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:1.5,max:20},
        display:false
      }],
    },
  }
});

var aze24 = document.getElementById("aze-24").getContext('2d');
var myChart = new Chart(aze24, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [25.7,18.9,6.1,-50.6,34.1,13.9,11.6,14.1,14.2,12],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:-1,max:4.5},
        display:false
      }],
    },
  }
});

var aze25 = document.getElementById("aze-25").getContext('2d');
var myChart = new Chart(aze25, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [-2.4,-12.8,-10.4,23.5,33,28.3,27.1,26,24.8,23.2],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:94,max:122},
        display:false
      }],
    },
  }
});

var aze26 = document.getElementById("aze-26").getContext('2d');
var myChart = new Chart(aze26, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [-1.4,-6.7,-5,10,16.6,15.4,13.7,12.8,11.7,9.9],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:36.5,max:48},
        display:false
      }],
    },
  }
});

var aze27 = document.getElementById("aze-27").getContext('2d');
var myChart = new Chart(aze27, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
data: [0.8,0.8,0.8,1,1.6,1.8,1.8,1.8,1.9,1.9,1.9],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:104,max:130.2},
        display:false
      }],
    },
  }
});

var aze28 = document.getElementById("aze-28").getContext('2d');
var myChart = new Chart(aze28, {
  type: 'line',
  data: {
    labels: ['1','2','3','4','5', '6', '7', '8', '9', '1', '2'],
    datasets: [{
      data: [131.7,130.5,132.9,121.6,89.1,88.9,94.4,93.4,92.8,94.4],
      borderColor: 'rgba(191, 63, 63,0.7)', fill:false, pointRadius:0 }
    ]
  },
  options: {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display:false
      }],
      yAxes: [{
        //ticks: {min:145,max:158},
        display:false
      }],
    },
  }
});