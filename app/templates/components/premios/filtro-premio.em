.content-container
  .row
    .col-md-6: .form-group
      label for="filtraNome" Nome
      =input class="form-control" type="text" value=filtro.nome id="filtraNome"
    .col-md-6: .form-group
      label for="user" Propriedade
      select class="form-control" id="proprietario" value="target.value"
  .btn-area
    .btn.btn-default onclick={action 'limpar'}
      .fa.fa-eraser  Limpar
    .btn.btn-default.btn-info onclick={action 'filtrar'}
      .fa.fa-filter Filtrar
