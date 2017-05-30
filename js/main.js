
Chart.defaults.global.legend.labels.boxWidth=20;
var ctx = document.getElementById("chartjs-most-populous").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['Indonesia', 'Pakistan', 'Nigeria', 'Bangladesh', 'Egypt', 'Iran', 'Turkey'],
    datasets: [{
      label: 'Population (Millions)',
      data: [261,189,187,163,93,80,79.6],
      backgroundColor: "rgba(121, 189, 206,0.7)"
    }]
  },
  options: {
    legend: {
        display: false
    }
  }
});


var ctx2 = document.getElementById("chartjs-pop-regions").getContext('2d');

var myChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Sub-Sahara', 'MENA', 'Asia & Latin America', 'Europe & Central Asia'],
        datasets: [{
            data: [493,422,683,161],
            backgroundColor: [
                'rgba(193, 191, 114,0.5)',
                'rgba(95, 118, 181,0.5)',
                'rgba(216, 95, 97,0.5)',
                'rgba(93, 153, 70,0.5)'
            ]
        }]
    },
    options: {
        legend: {
            display: false
        },
        pieceLabel: {
            mode: 'label',
            fontColor: '#000',
            arc: false,
            position: 'outside'
        }
    }

});

var ctx3 = document.getElementById("chartjs-pop-density-high").getContext('2d');

var myChart = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['Bahrain', 'Maldives', 'Bangladesh'],
    datasets: [{
      label: 'Population Desnsity (person / square km.)',
      data: [1789, 1364, 1237],
      backgroundColor: "rgba(145, 63, 78,0.7)"
    }]
  },
  options: {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            scaleLabel: {
                display:true,
                labelString: 'person / square km.'
            }
        }]
    }
  }
});

var ctx4 = document.getElementById("chartjs-pop-density-low").getContext('2d');

var myChart = new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ['Guyana', 'Mauritania','Libya','Suriname'],
    datasets: [{
      label: 'Population Desnsity (person / square km.)',
      data: [ 3.9,3.9, 3.6, 3.5],
      backgroundColor: "rgba(129, 198, 121,0.7)"
    }]
  },
  options: {
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            scaleLabel: {
                display: true,
                labelString: 'person / square km.'
            }
        }]
    }
  }
});

var ctx5 = document.getElementById("chartjs-pop-gender").getContext('2d');

var myChart = new Chart(ctx5, {
  type: 'bar',
  data: {
    labels: ['Kuwait', 'Saudi Arabia', 'Bahrain', 'Oman', 'Qatar', 'U.A.E.'],
    datasets: [{
      label: 'Males',
      data: [ 56.2,56.5,61.9,66.5,72.2,72.9],
      backgroundColor: "rgba(121, 171, 198,0.7)"
    },
    {
      label: 'Females',
      data: [ 43.8,43.5,38.1,33.5,27.8,27.1],
      backgroundColor: "rgba(219, 96, 198,0.7)"
    }

    ]
  },
  options: {
    legend: {
        display: true
    },
    scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
  }
});

var ctx6 = document.getElementById("chartjs-pop-gender-female").getContext('2d');

var myChart = new Chart(ctx6, {
  type: 'bar',
  data: {
    labels: ['Kazakhstan','Mozambique','Turkmenistan','Senegal','Turkey',
    'Uzbekistan','Tunisia','Togo','Morocco','Gambia','Sierra Leone','Kyrgyzstan','Albania','Malaysia',
    'Guinea-Bissau','Burkina Faso','Somalia','Azerbaijan','Benin','Uganda'],
    datasets: [{
      label: 'Males',
      data: [48.3,48.9,49.12,49.13,49.16,
      49.18,49.4,49.44,49.46,49.5,49.5,49.51,49.52,49.53,49.64,49.64,49.77,49.79,49.89,49.98],
      backgroundColor: "rgba(121, 171, 198,0.7)"
    },
    {
      label: 'Females',
      data: [51.7,51.1,50.88,50.87,50.84,
      50.82,50.6,50.56,50.54,50.5,50.5,50.49,50.48,50.47,50.36,50.36,50.23,50.21,50.11,50.02],
      backgroundColor: "rgba(219, 96, 198,0.7)"
    }

    ]
  },
  options: {
    legend: {
        display: true
    },
    scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
  }
});


var ctx7 = document.getElementById("chartjs-pop-youth").getContext('2d');

var myChart = new Chart(ctx7, {
  type: 'bar',
  data: {
    labels: ['Yemen','Guyana','Palestine','Afghanistan','Uganda','Côte d\'Ivoire','Cameroon','Chad','Tajikistan','Djibouti','Sierra Leone','Mozambique',
],
    datasets: [{
      label: '15 - 24 yrs',
      data: [22.1,21.8,21.7,21.2,20.3,20.3,20.3,20.2,20.2,20.1,20,20],
      backgroundColor: "rgba(121, 171, 198,0.7)"
    }

    ]
  },
  options: {
    legend: {
        display: true
    },
    scales: {
            yAxes: [{
                ticks: {
                    min: 18
                }
            }]
        }

}
    
});

var ctx8 = document.getElementById("chartjs-pop-workforce").getContext('2d');

var myChart = new Chart(ctx8, {
  type: 'bar',
  data: {
  
    labels: ['U.A.E.','Qatar','Oman','Bahrain','Kuwait','Brunei','Azerbaijan','Iran'],
    datasets: [{
      label: '15 - 64 yrs',
      data: [84.9,83.3,76.9,76.1,75.7,72.5,72.5,71.3],
      backgroundColor: "rgba(121, 171, 198,0.7)"
    }

    ]
  },
  options: {
    legend: {
        display: true
    },
    scales: {
            yAxes: [{
                ticks: {
                    min: 60
                }
            }]
        }

}
    
});

var ctx9 = document.getElementById("chartjs-pop-top-ageing").getContext('2d');

var myChart = new Chart(ctx9, {
  type: 'bar',
  data: {
  
    labels: ['Albania','Lebanon','Tunisia','Turkey','Suriname'],
    datasets: [{
      label: '65+ yrs',
      data: [12.4,8.1,7.6,7.5,6.9],
      backgroundColor: "rgba(145, 63, 78,0.7)"
    }

    ]
  },
  options: {
    legend: {
        display: true
    },
    scales: {
            yAxes: [{
                ticks: {
                    // min: 60
                },
            scaleLabel: {
                display: true,
                labelString: '% of total population'
            }
            }]
        }

}
    
});


var ctx10 = document.getElementById("chartjs-pop-bottom-ageing").getContext('2d');

var myChart = new Chart(ctx10, {
  type: 'bar',
  data: {
  
    labels: ['Burkina Faso','Gambia','Kuwait','Qatar','U.A.E.'],
    datasets: [{
      label: '65+ yrs',
      data: [2.4,2.3,2,1.2,1.1],
      backgroundColor: "rgba(129, 198, 121,0.7)"
    }

    ]
  },
  options: {
    legend: {
        display: true
    },
    scales: {
            yAxes: [{
                ticks: {
                    // min: 60
                },
                 scaleLabel: {
                display: true,
                labelString: '% of total population'
            }
            }]
        }

}
    
});

var ctx11 = document.getElementById("chartjs-pop-growth-regions").getContext('2d');

var myChart = new Chart(ctx11, {
  type: 'line',
  data: {
  
    labels: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'],
    datasets: [{
      label: 'Sub-Sahara',
      data: [2.67,2.71,2.73,2.75,2.76,2.76,2.76,2.77,2.77,2.77,2.77,2.77,2.76,2.75,2.75,2.74,2.72],
      borderColor: 'rgba(193, 191, 114,0.7)',
      fill:false,
      pointRadius:2
    },
    {
        label:'MENA',
        data: [1.93,1.89,1.85,1.86,1.91,1.99,2.08,2.15,2.17,2.15,2.09,2.02,1.96,1.91,1.86,1.82,1.78],
        borderColor: 'rgba(95, 118, 181,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'Asia & Lat. America',
        data: [1.87,1.84,1.81,1.78,1.73,1.67,1.61,1.56,1.54,1.54,1.56,1.59,1.6,1.6,1.58,1.54,1.49],
        borderColor: 'rgba(216, 95, 97,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'Europe & Central Asia',
        data: [1.12,1.15,1.19,1.21,1.21,1.2,1.18,1.17,1.2,1.3,1.42,1.56,1.67,1.69,1.61,1.46,1.29],
        borderColor: 'rgba(93, 153, 70,0.7)',
        fill:false,
        pointRadius:2
    }

    ]
  }
    
});


var ctx12 = document.getElementById("chartjs-pop-growth-countries").getContext('2d');

var myChart = new Chart(ctx12, {
  type: 'bar',
  data: {
  
    labels: ['Niger','Oman','Uganda','Chad','Gambia','Iraq','Senegal','Mali'],
    datasets: [{
      label: '65+ yrs',
      data: [4.02,3.59,3.25,3.22,3.17,3.04,3,3],
      backgroundColor: "rgba(129, 198, 121,0.7)"
    }

    ]
  },
  options: {
    legend: {
        display: false
    },
    scales: {
            yAxes: [{
                ticks: {
                    min: 2.6
                },
                 scaleLabel: {
                display: true,
                labelString: 'growth rate (%)'
            }
            }]
        }

}
    
});


var ctx13 = document.getElementById("chartjs-pop-birth-death").getContext('2d');

var myChart = new Chart(ctx13, {
  type: 'line',
  data: {
  
    labels: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
    datasets: [{
      label: 'birth',
      data: [29.88,29.56,29.34,29.13,29,28.85,28.75,28.69,28.62,28.51,28.38,28.21,27.99,27.76,27.47,27.13],
      borderColor: 'rgba(93, 153, 70,0.7)',
      fill:false,
      pointRadius:2
    },
    {
        label:'death',
        data: [9.1,8.98,8.88,8.78,8.65,8.54,8.41,8.28,8.14,8.01,7.9,7.8,7.7,7.6,7.52,7.44],
        borderColor: 'rgba(216, 95, 97,0.7)',
        fill:false,
        pointRadius:2
    }

    ]
  },
  options: {
    
    scales: {
            yAxes: [{
                ticks: {
                    // min: 2.6
                },
                 scaleLabel: {
                display: true,
                labelString: 'per 1,000 people'
            }
            }]
        }

}
    
});

var ctx14 = document.getElementById("chartjs-pop-fertility").getContext('2d');

var myChart = new Chart(ctx14, {
  type: 'line',
  data: {
  
    labels: ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
    datasets: [{
      label: 'IDB',
      data: [4.92,4.81,4.7,4.59,4.48,4.39,4.29,4.2,4.11,4.03,3.96,3.9,3.85,3.81,3.77,3.74,3.71,3.69,3.67,3.65,3.63,3.6,3.58,3.55,3.52,3.48],
      borderColor: 'rgba(93, 153, 70,0.7)',
      fill:false,
      pointRadius:2
    },
    {
        label:'World',
        data: [3.28,3.19,3.1,3.01,2.94,2.87,2.81,2.76,2.72,2.68,2.66,2.63,2.61,2.6,2.58,2.56,2.55,2.54,2.53,2.51,2.5,2.48,2.48,2.46,2.46,2.45],
        borderColor: 'rgba(216, 95, 97,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'Low and Middle Income',
        data: [3.62,3.51,3.4,3.3,3.21,3.12,3.05,2.98,2.93,2.89,2.85,2.82,2.8,2.77,2.75,2.73,2.7,2.69,2.67,2.65,2.64,2.62,2.61,2.6,2.59,2.57],
        borderColor: 'rgba(95, 118, 181,0.7)',
        fill:false,
        pointRadius:2
    }

    ]
  },
  options: {
    
    scales: {
            yAxes: [{
                ticks: {
                    // min: 2.6
                },
                 scaleLabel: {
                display: true,
                labelString: 'births per woman'
            }
            }]
        }

}
    
});

var ctx15 = document.getElementById("chartjs-pop-mortality").getContext('2d');

var myChart = new Chart(ctx15, {
  type: 'bar',
  data: {
  
    labels: ['Chad','Somalia','Sierra Leone','Mali','Nigeria'],
    datasets: [{
      label: 'top countries',
      data: [138.7,136.8,120.4,114.7,108.8],
      backgroundColor: "rgba(145, 63, 78,0.5)"
    },
     {
        label: 'IDB',
        data: [51.89,51.89,51.89,51.89,51.89],
        type:'line',
        borderColor: 'rgba(95, 118, 181,1)',
        fill:false,
     },
     {
        label: 'World',
        data: [42.50,42.50,42.50,42.50,42.50],
        type:'line',
        borderColor: 'rgba(193, 191, 114,1)',
        fill:false,
     },

    {
        label: 'Least developed',
        data: [73.11,73.11,73.11,73.11,73.11],
        type:'line',
        borderColor: 'rgba(216, 95, 97,1)',
        fill:false,
     }
    ]
  },
  options: {
    legend: {
        display: true
    },
    scales: {
            yAxes: [{
                ticks: {
                    min: 30
                },
                 scaleLabel: {
                display: true,
                labelString: 'per 1,000 live births'
            }
            }]
        }

}
    
});

var ctx16 = document.getElementById("chartjs-pop-mortality-regions").getContext('2d');

var myChart = new Chart(ctx16, {
    type: 'bar',
    data: {
        labels: ['Sub-Sahara', 'MENA', 'Asia & Latin America', 'Europe & Central Asia'],
        datasets: [{
            data: [94.36,21.87,47.00,22.91],
            backgroundColor: [
                'rgba(193, 191, 114,0.5)',
                'rgba(95, 118, 181,0.5)',
                'rgba(216, 95, 97,0.5)',
                'rgba(93, 153, 70,0.5)'
            ]
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0
                },
                 scaleLabel: {
                display: true,
                labelString: 'per 1,000 live births'
            }
            }]
        }
        
    }

});

var ctx17 = document.getElementById("chartjs-pop-literacy").getContext('2d');

var myChart = new Chart(ctx17, {
  type: 'bar',
  data: {
  
    labels: ['Sub-Sahara', 'MENA', 'Asia & Latin America', 'Europe & Central Asia'],
    datasets: [{
      label: 'regions',
      data: [55.05,82.11,73.54,97.76],
      backgroundColor: 'rgba(93, 153, 70,0.5)'
    },
     {
        label: 'IDB',
        data: [72.82,72.82,72.82,72.82],
        type:'line',
        borderColor: 'rgba(95, 118, 181,1)',
        fill:false,
     }
    ]
  },
  options: {
    legend: {
        display: true
    },
    scales: {
            yAxes: [{
                ticks: {
                    min: 50
                },
                 scaleLabel: {
                display: true,
                labelString: '% population 15+ yrs, both sexes'
            }
            }]
        }

}
    
});

var ctx18 = document.getElementById("chartjs-pop-enrollment-primary").getContext('2d');

var myChart = new Chart(ctx18, {
  type: 'bar',
  data: {
  
    labels: ['Senegal','Gambia','Sudan','Mauritania','Uganda','Suriname','Egypt','Kuwait','Tajikistan','Palestine'],
    datasets: [{
      label: '65+ yrs',
      data: [108.63,108.08,105.15,104.77,103.14,100.85,100.76,100.59,100.45,100.37],
      backgroundColor: "rgba(129, 198, 121,0.7)"
    }

    ]
  },
  options: {
    legend: {
        display: false
    },
    scales: {
            yAxes: [{
                ticks: {
                    min: 98
                },
                 scaleLabel: {
                display: true,
                labelString: 'female enrollment as % of males'
            }
            }]
        }

}
    
});