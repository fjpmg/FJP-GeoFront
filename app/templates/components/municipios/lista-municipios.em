.table-responsive
  table.table
    thead
      tr
        th style="width: 3em; text-align: center"
          input#headerCheckbox type="checkbox" change="updateCheckbox"
        th style="width: 3em; text-align: center"
          "IBGE
        th.sortable
          i.fa.fa-sort.pull-right
          "Nome
        th Populacao
        th PIB
        th IDHM
        th IMRS
    tbody
      tr
        td style="text-align: center"
          input type="checkbox"
        td  1
        td  Belo Horizonte
        td  100000
        td  100000
        td  1
        td  1
      tr
        td style="text-align: center"
          input type="checkbox"
        td  2
        td  Uberlandia
        td  100000
        td  100000
        td  1
        td  1
      tr
        td style="text-align: center"
          input type="checkbox"
        td  3
        td  Passos
        td  100000
        td  100000
        td  1
        td  1

=pagination-tab reloadModel=reloadModel count=count currentPage=currentPage perPage=perPage params=params
