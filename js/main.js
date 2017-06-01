
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

var ctx19 = document.getElementById("chartjs-pop-life-expectancy").getContext('2d');

var myChart = new Chart(ctx19, {
  type: 'bar',
  data: {
  
    labels: ['Sub-Sahara', 'MENA', 'Asia & Latin America', 'Europe & Central Asia'],
    datasets: [{
      label: 'regions',
      data: [58.6,74.0,70.5,71.3],
      backgroundColor: 'rgba(93, 153, 70,0.5)'
    },
     {
        label: 'IDB',
        data: [66.8,66.8,66.8,66.8],
        type:'line',
        borderColor: 'rgba(95, 118, 181,1)',
        fill:false,
     },
     {
        label: 'World',
        data: [71.68,71.68,71.68,71.68],
        type:'line',
        borderColor: 'rgba(193, 191, 114,1)',
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
                labelString: 'years'
            }
            }]
        }

}
    
});

var ctx20 = document.getElementById("chartjs-pop-health-expenditure").getContext('2d');

var myChart = new Chart(ctx20, {
  type: 'bar',
  data: {
  
    labels: ['Qatar','U.A.E.','Kuwait','Bahrain','Maldives','Saudi Arabia'],
    datasets: [{
      label: 'regions',
      data: [2106.36,1610.8,1385.78,1242.84,1165.13,1147.45],
      backgroundColor: "rgba(145, 63, 78,0.5)"
    },
     {
        label: 'IDB',
        data: [184.57,184.57,184.57,184.57,184.57,184.57],
        type:'line',
        borderColor: 'rgba(95, 118, 181,1)',
        fill:false,
     },
     {
        label: 'World',
        data: [1061,1061,1061,1061,1061,1061],
        type:'line',
        borderColor: 'rgba(193, 191, 114,1)',
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
                labelString: 'Current US$'
            }
            }]
        }

}
    
});

var ctx21 = document.getElementById("chartjs-pop-water").getContext('2d');

var myChart = new Chart(ctx21, {
  type: 'line',
  data: {
  
    labels: ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
    datasets: [{
      label: 'IDB',
      data: [72.04,71.96,72.43,72.54,73.05,73.58,74.11,74.63,75.19,75.71,76.23,76.72,77.24,77.73,78.22,78.71,79.21,79.77,80.25,80.74,81.26,81.79,82.58,83.4,83.82,84.82],
      borderColor: 'rgba(93, 153, 70,0.7)',
      fill:false,
      pointRadius:2
    },
    {
        label:'World',
        data: [76.08,76.68,77.35,77.91,78.69,79.33,79.96,80.59,81.23,81.87,82.5,83.11,83.73,84.34,84.95,85.55,86.14,86.73,87.3,87.86,88.39,88.9,89.49,90.06,90.55,90.97],
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
                labelString: '% of population'
            }
            }]
        }

}
    
});

var ctx22 = document.getElementById("chartjs-pop-sanitation").getContext('2d');

var myChart = new Chart(ctx22, {
  type: 'line',
  data: {
  
    labels: ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
    datasets: [{
      label: 'IDB',
      data: [46.34,46.98,47.31,47.78,48.53,49.25,49.95,50.67,51.44,52.14,52.86,53.53,54.19,54.84,55.5,56.14,56.8,57.43,58.07,58.67,59.23,59.75,60.44,61,61.38,62.55],
      borderColor: 'rgba(93, 153, 70,0.7)',
      fill:false,
      pointRadius:2
    },
    {
        label:'World',
        data: [52.9,53.24,53.75,54.23,55.13,55.69,56.44,57.01,57.62,58.19,58.79,59.4,60.01,60.62,61.25,61.86,62.48,63.07,63.68,64.28,64.85,65.32,65.93,66.51,67.02,67.53],
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
                labelString: '% of population'
            }
            }]
        }

}
    
});

var ctx23 = document.getElementById("chartjs-pop-sanitation-countries").getContext('2d');

var myChart = new Chart(ctx23, {
  type: 'bar',
  data: {
  
    labels: ['Niger','Togo','Chad','Sierra Leone','Uganda','Benin','Burkina Faso','Guinea','Mozambique','Guinea-Bissau','Côte d\'Ivoire','Mali','Nigeria'],
    datasets: [{
      label: 'sanitation',
      data: [89.1,88.4,87.9,86.7,80.9,80.3,80.3,79.9,79.5,79.2,77.5,75.3,71],
      backgroundColor: "rgba(145, 63, 78,0.7)"
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

var ctx24 = document.getElementById("chartjs-pop-water-countries").getContext('2d');

var myChart = new Chart(ctx24, {
  type: 'bar',
  data: {
  
    labels: ['Chad','Mozambique','Afghanistan','Mauritania','Niger','Palestine','Sierra Leone','Togo','Nigeria'],
    datasets: [{
      label: 'sanitation',
      data: [49.2,48.9,44.7,42.1,41.8,41.6,37.4,36.9,31.5],
      backgroundColor: "rgba(145, 63, 78,0.7)"
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

var ctx24 = document.getElementById("chartjs-pop-water-countries").getContext('2d');

var myChart = new Chart(ctx24, {
  type: 'bar',
  data: {
  
    labels: ['Physicians', 'Nurses', 'Beds'],
    datasets: [{
      label: 'IDB',
      data: [0.83,1.72, ],
      backgroundColor: "rgba(145, 63, 78,0.7)"
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

var ctx25 = document.getElementById("chartjs-pop-hdi").getContext('2d');

var myChart = new Chart(ctx25, {
    type: 'doughnut',
    data: {
        labels: ['Very High', 'High', 'Medium', 'Low'],
        datasets: [{
            label: 'No. of IDB member countries',
            data: [6,15,12,24],
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

var ctx26 = document.getElementById("chartjs-pop-hdi-regions").getContext('2d');

var myChart = new Chart(ctx26, {
  type: 'bar',
  data: {
    labels: ['MENA', 'Europe and Central Asia', 'World', 'Fuel Exporters', 'Non-LDMC', 'Asia and Latin America', 'IDB', 'Non-Fuel Exporters', 'LDMC', 'Sub-Sahara'],
    datasets: [{
      label: 'HDI Index',
      data: [0.721,0.719,0.717,0.711,0.707,0.659,0.603,0.557,0.487,0.465],
      backgroundColor: ["rgba(121, 171, 198,0.7)",
                        "rgba(121, 171, 198,0.7)",
                        'rgba(193, 191, 114,0.5)',
                        "rgba(121, 171, 198,0.7)",
                        "rgba(121, 171, 198,0.7)",
                        "rgba(121, 171, 198,0.7)",
                        'rgba(93, 153, 70,0.5)',
                        "rgba(121, 171, 198,0.7)",
                        "rgba(121, 171, 198,0.7)",
                        "rgba(121, 171, 198,0.7)"
      ]
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
                    // min: 60
                },
            scaleLabel: {
                display: true,
                labelString: 'HDI Index'
            }
            }]
        }


}
    
});

var ctx27 = document.getElementById("chartjs-pop-mobile").getContext('2d');

var myChart = new Chart(ctx27, {
  type: 'line',
  data: {
  
    labels: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
    datasets: [
    {
      label: 'IDB',
      data: [19.21,28.53,40.31,53.09,61.05,70.47,79.38,86.11,93,96.34,97.66],
      borderColor: 'rgba(38, 12, 12,0.7)',
      fill:false,
      pointRadius:2
    },

    {
      label: 'Sub-Sahara',
      data: [9.74,16.56,22.71,33.76,40.15,47.68,55.51,62.66,70.46,76.22,79.08],
      borderColor: 'rgba(193, 191, 114,0.7)',
      fill:false,
      pointRadius:2
    },
    {
        label:'MENA',
        data: [26.92,39.32,55.32,67.75,82.12,92.78,99.82,105.36,111.21,112.21,113.27],
        borderColor: 'rgba(95, 118, 181,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'Asia & Lat. America',
        data: [15.71,23.99,36.93,51.34,57.32,68.14,78.41,87.03,95.28,99.13,99.33],
        borderColor: 'rgba(216, 95, 97,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'Europe & Central Asia',
        data: [39.62,51.67,65.03,77.04,81.85,87.89,99.51,100.75,102.54,103.23,105.87],
        borderColor: 'rgba(93, 153, 70,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'World',
        data: [33.91,41.76,50.52,59.7,67.89,76.51,84.23,88.5,93.1,96.83,98.62],
        borderColor: 'rgba(125, 122, 22,0.7)',
        fill:false,
        pointRadius:2
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
                labelString: 'per 100 people'
            }
            }]
        }


}
    
});

var ctx28 = document.getElementById("chartjs-pop-internet").getContext('2d');

var myChart = new Chart(ctx28, {
  type: 'line',
  data: {
  
    labels: ['2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
    datasets: [
    {
      label: 'IDB',
      data: [5.97,7.44,9.26,12.08,13.61,16.34,18.43,20.97,23.17,26.99,30.6],
      borderColor: 'rgba(38, 12, 12,0.7)',
      fill:false,
      pointRadius:2
    },

    {
      label: 'Sub-Sahara',
      data: [2.13,3.26,4.43,8.35,10.41,13.25,14.98,17.98,20.91,23.5,26.8],
      borderColor: 'rgba(193, 191, 114,0.7)',
      fill:false,
      pointRadius:2
    },
    {
        label:'MENA',
        data: [9.5,11.53,14.44,17.99,20.82,24.06,26.96,30.58,34.1,39.16,43.14],
        borderColor: 'rgba(95, 118, 181,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'Asia & Lat. America',
        data: [5.44,6.32,7.2,8.29,8.29,10.18,11.44,12.94,13.38,17.14,20.68],
        borderColor: 'rgba(216, 95, 97,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'Europe & Central Asia',
        data: [9.67,12.23,18.17,22.55,25.93,31.16,35.86,38.74,42.44,47.34,51.25],
        borderColor: 'rgba(93, 153, 70,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'World',
        data: [15.79,17.6,20.53,23.26,25.76,29.15,31.73,34.95,37.42,40.65,44],
        borderColor: 'rgba(125, 122, 22,0.7)',
        fill:false,
        pointRadius:2
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
                labelString: 'per 100 people'
            }
            }]
        }


}
    
});

var ctx29 = document.getElementById("chartjs-pop-land").getContext('2d');

var myChart = new Chart(ctx29, {
  type: 'line',
  data: {
  
    labels: ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
    datasets: [
    
    {
        label:'Forest Area',
        data: [13.65,13.54,13.43,13.32,13.21,13.1,12.98,12.87,12.76,12.65,12.54,12.49,12.44,12.39,12.34,12.29,12.23,12.17,12.11,12.05,11.99,11.7,11.63,11.57,11.51,11.45],
        borderColor: 'rgba(38, 12, 12,0.7)',
        fill:false,
        pointRadius:2
    },
    {
        label:'Arable Land',
        data: [8.59,8.7,9.07,9.21,9.21,9.35,9.37,9.38,9.42,9.47,9.34,9.31,9.38,9.6,9.63,9.68,9.61,9.66,9.62,9.51,9.6,9.6,9.81,9.68],
        borderColor: 'rgba(93, 153, 70,0.7)',
        fill:false,
        pointRadius:2
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
                labelString: '% of total land'
            }
            }]
        }


}
    
});

var ctx30 = document.getElementById("chartjs-pop-carbon").getContext('2d');

var myChart = new Chart(ctx30, {
  type: 'bar',
  data: {
  
    labels: ['Iran','Saudi Arabia','Indonesia','Turkey','Kazakhstan','Malaysia','Egypt','U.A.E.','Pakistan','Iraq','Algeria','Uzbekistan'],
    datasets: [{
      label: 'carbon',
      data: [633.75,505.57,502.96,357.16,267.98,245.37,226.99,199.25,174.84,160.62,147.69,109.85],
      backgroundColor: "rgba(145, 63, 78,0.7)"
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
                    // min: 60
                },
            scaleLabel: {
                display: true,
                labelString: 'million metric tons'
            }
            }]
        }

}
    
});