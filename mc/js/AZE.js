Chart.defaults.global.elements.line.borderWidth = 3;
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