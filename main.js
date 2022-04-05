let div = $('<div>Hello world!</div>');

let body = $('body');

body.append(div);

div.on('click', function(){
    alert('Hello world');
});



let divTwo = $('<div></div>');
body.append(divTwo);

let canvas = $('<canvas id="myChart"></canvas>');

body.append(canvas);


let divThree = $('<div></div>');
body.append(divThree);

let canvasTwo = $('<canvas id="myChartTwo"></canvas>');

body.append(canvasTwo);




const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'November',
  'December',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45, 60, 50, 25, 10, 25]
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};



const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


/////////////////////////////////////////////////////////////////////////////////


  const labelsTwo = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];

  const dataTwo = {
    labels: labelsTwo,
    datasets: [{
      label: 'My First Dataset',
      data: [0, 10, 5, 2, 20, 30, 45, 60, 50, 25, 10, 25],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };


  const configTwo = {
    type: 'bar',
    data: dataTwo,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  
const myChartTwo = new Chart(
    document.getElementById('myChartTwo'),
    configTwo
  );
