.content-container
  .row
    .col-md-12: .form-group
      label for="filtraNome" Nome
      =input class="form-control" type="text" value=filtro.nome id="filtraNome"
  .row
    .col-md-4: .form-group
      label for="pib" Municipio
      select class="form-control" id="filtraPerfil" value="target.value"
    .col-md-4: .form-group
      label for="idhm" Propriedade
      select class="form-control" id="filtraPerfil" value="target.value"
    .col-md-4: .form-group
      label for="imrs" Regiao
      select class="form-control" id="filtraPerfil" value="target.value"
  .btn-area
    .btn.btn-default onclick={action 'limpar'}
      .fa.fa-eraser  Limpar
    .btn.btn-default.btn-info onclick={action 'filtrar'}
      .fa.fa-filter Filtrar
