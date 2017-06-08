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