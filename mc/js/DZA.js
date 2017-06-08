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
