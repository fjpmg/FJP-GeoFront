.content-container
  .row
    .col-md-7: .form-group
      label for="filtraNome" Nome
      =input class="form-control" type="text" value=filtro.nome_completo id="filtraNome"
    .col-md-5: .form-group
      label for="filtraEmail" Email
      =input class="form-control" type="text" value=filtro.email id="filtraEmail"
  .row
    .col-md-5: .form-group
      label for="filtraCpf" CPF
      =input class="form-control cpf" type="text" value=filtro.cpf id="filtraCpf"
    .col-md-5: .form-group
      label for="filtraTelefone" Telefone
      =input class="form-control telefone" type="text" value=filtro.telefone id="filtraTelefone"
    .col-md-2: .form-group
      label for="filtraPerfil" Perfil
      select class="form-control" id="filtraPerfil" onchange={action (mut filtro.perfil) value="target.value"} value="target.value"
        option value='u' selected={eq 'u' newUser.perfil} Usuario
        option value='t' selected={eq 't' newUser.perfil} Técnico
        option value='a' selected={eq 'a' newUser.perfil} Administrador
  .btn-area
    .btn.btn-default onclick={action 'limpar'}
      .fa.fa-eraser  Limpar
    .btn.btn-default.btn-info onclick={action 'filtrar'}
      .fa.fa-filter Filtrar
