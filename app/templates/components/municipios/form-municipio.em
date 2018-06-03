= em-form model=usuario action="criarNovo" submitButton=false as |form|
  .content-container
    .row
      .col-md-5: .form-group
        label for="codIbge" Codigo IBGE
        =form.input property="codIbge" type="text" cid="nomeCompleto" required=true
      .col-md-5: .form-group
        label for="nome" Nome
        =form.input property="nome" type="text" cid="nomeAmigavel" required=true
      .col-md-2: .form-group
        label for="user" Regiao
        =form.select property="regiao" cid="regiao" content=perfilOptions optionsValuePath="regiao" optionLabelPath="display" prompt=""
    .row
      .col-md-12: .form-group
        label for="descricao" Descricao
        =form.input property="codIbge" type="text" cid="descricao" required=true
    .row
      .col-md-4: .form-group
        label for="area" Area
        =form.input property="area" elementClass="cpf" type="text" cid="cpf" required=true
      .col-md-4: .form-group
        label for="areaCafe" Area com cafe
        =form.input property="areaCafe" type="text" cid="areaCafe" required=true
      .col-md-4: .form-group
        label for="areaPreservacao" Area de preservacao
        =form.input property="areaPreservacao" type="text" cid="areaPreservacao" required=true
    .row
      .col-md-6: .form-group
        label for="producao" Producao
        =form.input property="producao" type="text" cid="producao" required=true
      .col-md-6: .form-group
        label for="produtividade" Produtividade
        =form.input property="produtividade" type="text" cid="produtividade" required=true
    .row
      .col-md-4: .form-group
        label for="pib" PIB
        =form.input property="pib" type="text" cid="pib" required=true
      .col-md-4: .form-group
        label for="idhm" IDHM
        =form.input property="idhm" type="text" cid="idhm" required=true
      .col-md-4: .form-group
        label for="imrs" IMRS
        =form.input property="imrs" type="text" cid="imrs" required=true
    .row
      .col-md-12: .form-group
        label for="geometria" Geometria
        =form.input property="geometria" type="text" cid="geometria" required=true
    .row
      .col-md-12
        label for="logo-premio" Fotografias
        =form.input property="logo-premio" type="file" cid="foto1" required=true
        =form.input property="logo-premio" type="file" cid="foto2" required=true
        =form.input property="logo-premio" type="file" cid="foto3" required=true
    .btn-area
       input.btn.btn-default type="submit"
