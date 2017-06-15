Chart.defaults.global.elements.line.borderWidth = 3;
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