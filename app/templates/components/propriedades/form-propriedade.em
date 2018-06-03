 = em-form model=propriedade action="criarNovo" submitButton=false as |form|
  .content-container
    .row
      .col-md-7: .form-group
        label for="nome" Nome
        =form.input property="nome" type="text" cid="nome" required=true
      .col-md-5: .form-group
        label for="codEmater" Código Emater
        =form.input property="codEmater" type="text" cid="codEmater" required=true
    .row
      .col-md-6: .form-group
        label for="codCar" Código Car
        =form.input property="codCar" type="text" cid="codCar" required=true
      .col-md-6: .form-group
        label for="cnpj" CNPJ
        =form.input property="cnpj" elementClass="cnpj" type="text" cid="cnpj"
    .row
      .col-md-6: .form-group
        label for="user" Proprietário
        =form.select property="idProprietario" cid="idProprietario" content=proprietarios optionsValuePath="id" optionLabelPath="nomeCompleto" prompt=" "
      .col-md-6: .form-group
        label for="cnpj" Técnico
        =form.select property="idTecnico" cid="idTecnico" content=tecnicos optionsValuePath="id" optionLabelPath="nomeCompleto" prompt=" "
    .row
      .col-md-4: .form-group
        label for="latitude" Latitude
        =form.input property="latitude" type="text" cid="latitude"  required=true
      .col-md-4: .form-group
        label for="longitude" Longitude
        =form.input property="longitude" type="text" cid="longitude"  required=true
      .col-md-4: .form-group
        label for="idMunicipio" Município
        =form.select property="idMunicipio" cid="idMunicipio" content=municipios optionsValuePath="id" optionLabelPath="nome" prompt=" " required=true

    if moreOptions
      .row
        .col-md-12: .form-group
          label for="historico" Histórico
          =form.text property="historico" rows=10 cid="historico"
      .row
        .col-md-4: .form-group
          label for="imagemDestaque" Imagem de Destaque
          =form.input property="imagemDestaque" type="text" cid="imagemDestaque"
        .col-md-4: .form-group
          label for="variedade" Variedade
          =form.input property="variedade" type="text" cid="variedade"
        .col-md-4: .form-group
          label for="especies" Espécies
          =form.input property="especies" type="text" cid="especies"
      .row
        .col-md-4: .form-group
          label for="espacamento" Espaçamento
          =form.input property="espacamento" type="text" cid="espacamento"
        .col-md-4: .form-group
          label for="area" Área
          =form.input property="area" type="text" cid="area"
        .col-md-4: .checkbox-inline
          =form.checkbox property="exibirArea" cid="exibirArea" label="Exibir Área"
      .row
        .col-md-4: .form-group
          label for="site" Site
          =form.input property="site" type="text" cid="site"
        .col-md-4: .form-group
          label for="facebook" Facebook
          =form.input property="facebook" type="text" cid="facebook"
        .col-md-4: .checkbox-inline
          =form.checkbox property="propriedadeCertificada" cid="propriedadeCertificada" label="Propriedade Certificada"
      .row
        .col-md-4: .form-group
          label for="anoPlantio" Ano do Plantio
          =form.input property="anoPlantio" type="text" cid="anoPlantio"
        .col-md-2: .checkbox-inline
          =form.checkbox property="exibirAnoPlantio" cid="exibirAnoPlantio" label="Exibir Ano do Plantio"
        .col-md-4: .form-group
          label for="areaCafe" Área de Plantio de Café
          =form.input property="areaCade" type="text" cid="areaCafe"
        .col-md-2: .checkbox-inline
          =form.checkbox property="exibirAreaCafe" cid="exibirAreaCafe" label="Exibir Area de Plantio de Café"
      .row
        .col-md-4: .form-group
          label for="areaPreservacao" Área de Preservação
          =form.input property="areaPreservacao" type="text" cid="areaPreservacao"
        .col-md-2: .checkbox-inline
          =form.checkbox property="exibirAreaPreservacao" cid="exibirAreaPreservacao" label="Exibir Area de Preservação"
        .col-md-4: .form-group
          label for="producao" Produção
          =form.input property="producao" type="text" cid="producao"
        .col-md-2: .checkbox-inline
          =form.checkbox property="exibirProducao" cid="exibirProducao" label="Exibir Produção"
      .row
        .col-md-4: .form-group
          label for="produtividade" Produtividade
          =form.input property="produtividade" type="text" cid="produtividade"
        .col-md-2: .checkbox-inline
          =form.checkbox property="exibirProdutividade" cid="exibirProdutividade" label="Exibir Produtividade"
        .col-md-4: .form-group
          label for="nomeProprietario" Nome Proprietário
          =form.input property="nomeProprietario" type="text" cid="nomeProprietario"
        .col-md-2: .checkbox-inline
          =form.checkbox property="exibirNomeProprietario" cid="exibirNomeProprietario" label="Exibir Nome do Proprietário"
      .row
        .col-md-4: .form-group
          label for="emailProprietario" Email do Proprietário
          =form.input property="emailProprietario" type="email" cid="emailProprietario"
        .col-md-2: .checkbox-inline
          =form.checkbox property="exibirEmailProprietario" cid="exibirEmailProprietario" label="Exibir Email do Proprietário"
        .col-md-4: .form-group
          label for="telefoneProprietario" Telefone do Proprietário
          =form.input property="telefoneProprietario" type="text" cid="telefoneProprietario"
        .col-md-2: .checkbox-inline
          =form.checkbox property="exibirTelefoneProprietario" cid="exibirTelefoneProprietario" label="Exibir Telefone do Proprietário"
      .row
        .col-md-3: .checkbox-inline
          =form.checkbox property="perfilPublico" cid="perfilPublico" label="Perfil Público"
        .col-md-3: .checkbox-inline
          =form.checkbox property="liberado" cid="liberado" label="Liberado"
        .col-md-3: .checkbox-inline
          =form.checkbox property="publicado" cid="publicado" label="Publicado"
        .col-md-3: .checkbox-inline
          =form.checkbox property="edicaoProprietario" cid="edicaoProprietario" label="Edição do Proprietário"
      .row
        .col-md-12: .form-group
          label for="alteracoesProprietario" Alterações do Proprietário
          =form.text property="alteracoesProprietario" rows=10 cid="alteracoesProprietario"
      .row
        .col-md-12: .form-group.center
          button.btn.btn-default{action 'toggleMoreOptions'}
            i.fa.fa-minus  Menos informações
    else
      .row
        .col-md-12: .form-group.center
          button.btn.btn-default{action 'toggleMoreOptions'}
            i.fa.fa-plus  Mais informações

    .btn-area
      input.btn.btn-default type="submit"
