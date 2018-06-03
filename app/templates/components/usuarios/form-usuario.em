= em-form model=usuario action="criarNovo" submitButton=false as |form|
  .content-container
    .row
      .col-md-7: .form-group
        label for="nomeCompleto" Nome Completo
        =form.input property="nomeCompleto" type="text" cid="nomeCompleto" required=true
      .col-md-5: .form-group
        label for="nomeAmigavel" Nome Amigavel
        =form.input property="nomeAmigavel" type="text" cid="nomeAmigavel" required=true
    .row
      .col-md-5: .form-group
        label for="cpf" CPF
        =form.input property="cpf" elementClass="cpf" type="text" cid="cpf" required=true
      .col-md-5: .form-group
        label for="telefone" Telefone
        =form.input property="telefone" elementClass="telefone" type="text" cid="telefone" required=true
      .col-md-2: .form-group
        label for="perfil" Perfil
        =form.select property="perfil" content=perfilOptions optionValuePath="value" optionLabelPath="display"  prompt=""
    .row
      .col-md-4: .form-group
        label for="email" Email
        =form.input property="email" type="email" cid="email" required=true
      .col-md-4: .form-group
        label for="password" Senha (padrão '123456')
        =form.input property="password" type="text" cid="password"
    .btn-area
       input.btn.btn-default type="submit"
