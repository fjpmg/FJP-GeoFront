.content-container
  .row
    .col-md-12: .form-group
      label for="filtraCodIbge" Codigo IBGE
      =input class="form-control" type="text" value=filtro.codIbge id="filtraCodIbge"
    .col-md-12: .form-group
      label for="filtraNome" Nome
      =input class="form-control" type="text" value=filtro.nome id="filtraNome"
  .btn-area
    .btn.btn-default onclick={action 'limpar'}
      .fa.fa-eraser  Limpar
    .btn.btn-default.btn-info onclick={action 'filtrar'}
      .fa.fa-filter Filtrar
