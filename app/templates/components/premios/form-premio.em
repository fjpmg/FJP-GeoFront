= em-form model=usuario action="criarNovo" submitButton=false as |form|
  .content-container
    .row
      .col-md-8: .form-group
        label for="nome" Nome
        =form.input property="nome" type="text" cid="nome" required=true
      .col-md-4: .form-group
        label for="nome" Data
        =form.input property="data" type="date" cid="data" required=true
    .row
      .col-md-12: .form-group
        label for="descricao" Descricao
        =form.input property="descricao" type="text" cid="descricao" required=true
      .col-md-12: .form-group
        label for="user" Propriedade
        =form.select property="regiao" cid="propriedade" content="" optionsValuePath="propriedade" optionLabelPath="display" prompt=""
    .row
      .col-md-12
        label for="logo-premio" Logo do prêmio
        =form.input property="logo-premio" type="file" cid="logo-premio" required=true
    .btn-area
       input.btn.btn-default type="submit"
