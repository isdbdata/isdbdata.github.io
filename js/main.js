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
