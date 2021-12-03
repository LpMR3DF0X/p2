function direcionar() {
  window.location.href = "http://www.devmedia.com.br";
}
  
  
  google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400,  ],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700],
      ['australia', 400]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));


    chart.draw(data, options);

    onclick = australia.direcionar()


  }



google.charts.load('current', {'packages':['corechart']});

function desenharPizza(){

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addRows([

        ['Educação',2000],
        ['Transporte',500],
        
    ]);

    var opcoes = {
      'title':'Pais',
      'height': 250,
      'width': 450,
      'pieHole': 0.4,
     
  
  
  };

    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafico.draw(tabela, opcoes);
}

google.charts.setOnLoadCallback(desenharPizza);

function desenharPizza2(){

  var tabela2 = new google.visualization.DataTable();
  tabela2.addColumn('string','categorias');
  tabela2.addColumn('number','valores');
  tabela2.addRows([

      ['Educação',2000],
      ['Transporte',500],
      
  ]);

  var opcoes2 = {
    'title':'Pais',
    'height': 250,
    'width': 450,
    'pieHole': 0.4,
    'backgroundColor': '#e9e9e9' 
   

    

};

  var grafico2 = new google.visualization.PieChart(document.getElementById('graficoPizza2'));
  grafico2.draw(tabela2, opcoes2);
}









