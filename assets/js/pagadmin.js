google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Ano', 'Usuários Cadastrados', 'Plantas Cadastradas'],
          ['2015',  10,      100],
          ['2016',  200,      200],
          ['2017',  500,       500],
          ['2018',  1000,      800]
        ]);

        var options = {
          title: 'Performance do Site',
          hAxis: {title: 'Ano',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }


google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'User');
        data.addColumn('string', 'Assunto');
        data.addRows([
          ['Mike12', 'Olá, a planta Babosa não se encontra no catálogo!'],
          ['May123', 'Olá, a planta undefined não se encontra no catálogo!'],
          ['Mike12', 'Olá, a planta lua não se encontra no catálogo!'],
          ['Mike12', 'Olá, a planta sos não se encontra no catálogo!']
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }
