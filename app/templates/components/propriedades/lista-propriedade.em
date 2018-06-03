.table-responsive
  table.table
    thead
      tr
        th style="width: 3em; text-align: center"
          input#headerCheckbox type="checkbox" change="updateCheckbox"
        th.sortable
          i.fa.fa-sort.pull-right
          "Nome
        th CNPJ
        th Município
    tbody
      each propriedades as |propriedade|
        tr
          td style="text-align: center"
            input type="checkbox"
          td = propriedade.nome
          td = propriedade.cnpj
          td = propriedade.municipioId

=pagination-tab reloadModel=reloadModel count=count currentPage=currentPage perPage=perPage params=params
