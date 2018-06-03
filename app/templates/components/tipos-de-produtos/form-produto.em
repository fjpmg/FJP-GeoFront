= em-form model=usuario action="criarNovo" submitButton=false as |form|
  .content-container
    .row
      .col-md-12: .form-group
        label for="nome" Nome
        =form.input property="nome" type="text" cid="nomeAmigavel" required=true
    .row
      .col-md-12: .form-group
        label for="descricao" Descricao
        =form.input property="codIbge" type="text" cid="descricao" required=true
    .row
      .col-md-4: .form-group
        label for="pib" Area/unidade
        =form.input property="pib" type="text" cid="pib" required=true
      .col-md-4: .form-group
        label for="idhm" Produtividade/unidade
        =form.input property="idhm" type="text" cid="idhm" required=true
      .col-md-4: .form-group
        label for="imrs" Producao/unidade
        =form.input property="imrs" type="text" cid="imrs" required=true
    .row
      .col-md-4: .form-group
        label for="pib" Municipio
        =form.select property="mun" cid="mun" content="" optionsValuePath="id" optionLabelPath="nomeCompleto" prompt=" "
      .col-md-4: .form-group
        label for="idhm" Propriedade
        =form.select property="prop" cid="prop" content="" optionsValuePath="id" optionLabelPath="nomeCompleto" prompt=" "
      .col-md-4: .form-group
        label for="imrs" Regiao
        =form.select property="regiao" cid="regiao" content="" optionsValuePath="id" optionLabelPath="nomeCompleto" prompt=" "
    .btn-area
       input.btn.btn-default type="submit"
