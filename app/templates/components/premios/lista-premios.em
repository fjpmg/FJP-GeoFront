.table-responsive
  table.table
    thead
      tr
        th style="width: 3em; text-align: center"
          input#headerCheckbox type="checkbox" change="updateCheckbox"
        th.sortable style="width: 3em; text-align: center"
          i.fa.fa-sort.pull-right
          "Id
        th style="width: 3em; text-align: center"
          "Logo
        th.sortable
          i.fa.fa-sort.pull-right
          "Nome
        th Ano
    tbody
      tr
        td style="text-align: center"
          input type="checkbox"
        td 1
        td style="text-align: center; font-size:2em;"
          i.fa.fa-user-circle-o
        td Premio 1
        td 2010
      tr
        td style="text-align: center"
          input type="checkbox"
        td 2
        td style="text-align: center; font-size: 2em"
          i.fa.fa-user-circle-o
        td Premio 2
        td 2011

=pagination-tab reloadModel=reloadModel count=count currentPage=currentPage perPage=perPage params=params
