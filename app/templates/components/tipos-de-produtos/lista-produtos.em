.table-responsive
  table.table
    thead
      tr
        th style="width: 3em; text-align: center"
          input#headerCheckbox type="checkbox" change="updateCheckbox"
        th.sortable
          i.fa.fa-sort.pull-right
          "Nome
        th.sortable
          i.fa.fa-sort.pull-right
          "Descricao
        th style="width: 3em; text-align: center"
          "Area/unidade
        th style="width: 3em; text-align: center"
          "Producao/unidade
        th style="width: 3em; text-align: center"
          "Produtividade/unidade
    tbody
      tr
        td style="text-align: center"
          input type="checkbox"
        td Produto 1
        td Age contra esse tipo de blabla
        td 100
        td 100
        td 100
      tr
        td style="text-align: center"
          input type="checkbox"
        td Produto 2
        td Age contra esse tipo de blabla
        td 100
        td 100
        td 100
      tr
        td style="text-align: center"
          input type="checkbox"
        td Produto 3
        td Age contra esse tipo de blabla
        td 100
        td 100
        td 100

=pagination-tab reloadModel=reloadModel count=count currentPage=currentPage perPage=perPage params=params
