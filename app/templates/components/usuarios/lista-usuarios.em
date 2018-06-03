.table-responsive
  table.table
    thead
      tr
        th style="width: 3em; text-align: center"
          input#headerCheckbox type="checkbox" change="updateCheckbox"
        th.sortable
          i.fa.fa-sort.pull-right
          "Nome
        th Email
        th Telefone
    tbody
      each usuarios as |usuario|
        tr
          td style="text-align: center"
            input type="checkbox"
          td = usuario.nomeCompleto
          td = usuario.email
          td = usuario.telefone

=pagination-tab reloadModel=reloadModel count=count currentPage=currentPage perPage=perPage params=params
