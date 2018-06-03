.content-container
  .row
    .col-md-7: .form-group
      label for="filtraNome" Nome
      =input class="form-control" type="text" value=filtro.nome id="filtraNome"
    .col-md-5: .form-group
      label for="filtraEmail" CNPJ
      =input class="form-control" type="text" value=filtro.cnpj id="filtraCNPJ"
  .row
    .col-md-6: .form-group
      label for="filtraCpf" Código Emater
      =input class="form-control" type="text" value=filtro.codigoEmater id="filtraCodigoEmater"
    .col-md-6: .form-group
      label for="filtraTelefone" Município
      =input class="form-control" type="text" value=filtro.municipioId id="filtraMunicipio"
  .btn-area
    .btn.btn-default onclick={action 'limpar'}
      .fa.fa-eraser  Limpar
    .btn.btn-default.btn-info onclick={action 'filtrar'}
      .fa.fa-filter Filtrar
