.page-header
  h1
    "Usuários
    small
      i.fa.fa-chevron-right
      =link-to " Lista de Usuários" "admin.usuarios"
nav.tool-bar.clearfix
  .pull-right.search-box.hidden-xs
    .input-group
      =input type="text" class="form-control" id="exampleInputAmount" placeholder="Busca"
      .input-group-addon
        i.fa.fa-search
  a.btn.btn-default.btn-filter href="#novo" aria-controls="novo" role="tab" data-toggle="tab" onclick={route-action 'toggleTab' 'novo'}
    i.fa.fa-plus
    span.hidden-xs Novo
  a.btn.btn-default.btn-filter href="#filtros" aria-controls="filtros" role="tab" data-toggle="tab" onclick={route-action 'toggleTab' 'filtro'}
    i.fa.fa-filter
    span.hidden-xs Filtros
  a.btn.btn-default.btn-filter click="requestUpdate" aria-controls="home" role="tab" data-toggle="tab" onclick={route-action 'toggleTab' 'requestUpdate'}
    i.fa.fa-ticket
    span.hidden-xs Requisitar Atualização
.tab-content
  =usuarios/form-usuario reloadModel=(route-action "reloadModel") role="tabpanel" class="tab-pane" id="novo"
  =usuarios/filtro-usuario reloadModel=(route-action "reloadModel") resetParams=(route-action "resetParams") params=params role="tabpanel" class="tab-pane" id="filtros"
=usuarios/lista-usuarios reloadModel=(route-action "reloadModel") usuarios=usuarios count=totalCount currentPage=currentPage perPage=perPage params=params role="tabpanel" class="tab-pane" id="lista"
