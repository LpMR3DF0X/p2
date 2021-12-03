function direcionar() {
  window.location.href = "http://www.devmedia.com.br";
}
  
  
  google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity','Pobreza'],
      ['Germany', 200, 400],
      ['United States', 300, 400],
      ['Brazil', 400, 150],
      ['Canada', 500, 400],
      ['France', 600, 400],
      ['RU', 700, 400],
      ['australia', 400, 400],
     
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
      'title':'ERRADICAÇÃO DA POBREZA',
      'height': 350,
      'width': 450,
      'pieHole': 0.6,
     
  
  
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
    'title':'EDUCAÇÃO DE QUALIDADE',
    'height': 350,
    'width': 450,
    'pieHole': 0.6,
   
   


};

  var grafico2 = new google.visualization.PieChart(document.getElementById('graficoPizza2'));
  grafico2.draw(tabela2, opcoes2);
}

google.charts.setOnLoadCallback(desenharPizza2);


function desenharPizza3(){

  var tabela3 = new google.visualization.DataTable();
  tabela3.addColumn('string','categorias');
  tabela3.addColumn('number','valores');
  tabela3.addRows([

      ['Educação',2000],
      ['Transporte',500],
      
  ]);

  var opcoes3 = {
    'title':'SAÚDE E BEM ESTAR',
    'height': 350,
    'width': 450,
    'pieHole': 0.6
   
   


};

  var grafico3 = new google.visualization.PieChart(document.getElementById('graficoPizza3'));
  grafico3.draw(tabela3, opcoes3);
}

google.charts.setOnLoadCallback(desenharPizza3);

function desenharPizza4(){

  var tabela4 = new google.visualization.DataTable();
  tabela4.addColumn('string','categorias');
  tabela4.addColumn('number','valores');
  tabela4.addRows([

      ['Educação',2000],
      ['Transporte',500],
      
  ]);

  var opcoes4 = {
    'title':'TRABALHO DECENTE E CRESCIMENTO ECONÔMICO',
    'height': 350,
    'width': 450,
    'pieHole': 0.6
   
   


};

  var grafico4 = new google.visualization.PieChart(document.getElementById('graficoPizza4'));
  grafico4.draw(tabela4, opcoes4);
}

google.charts.setOnLoadCallback(desenharPizza4);


