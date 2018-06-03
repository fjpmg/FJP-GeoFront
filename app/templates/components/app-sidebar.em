#btn-expand
  a href="#"
    i.fa.fa-bars
    span MENU
.sidebar
  .brand
    img src="assets/img/logo.png"
  .logged-user.clearfix
    //i.fa.fa-user
    //span = model.usuario.nomeCompleto
  .filter-block
    button.btn.btn-primary click={action 'showFilterModal'}
      "Filtrar

  form.search-bar
    label.sr-only for="txSearch" Buscar
    input name="txSearch" type="text" placeholder="Busca rápida"
    i.fa.fa-search
    ul.result
      li
        a href="#"
          i class="fa fa-home"
          "Propriedade 001
      li
        a href="#"
          i class="fa fa-home"
          "Propriedade 001
      li
        a href="#"
          i class="fa fa-home"
          "Propriedade 001
  =sortable-objects sortableObjectList=layersList enableSort=true useSwap=true inPlace=false sortingScope="sortingGroup" class='layers' tagName='ul' role='menu'
     each layersList as |item|
       =draggable-object content=item isSortable=true sortingScope="sortingGroup" overrideClass='sortObject' class=(if (eq item.show true) 'active') tagName='li'
        .title.clearfix
          if item.showProps
            i.fa.fa-caret-down click={action 'toggleProps' item}
          else
            i.fa.fa-caret-right click={action 'toggleProps' item}
          a.switch.pull-right href="#" click={action 'displayLayer' item}
          span role="menuitem" href="#" click={action 'toggleProps' item}
            =item.name
        =layer-props class="layer-props" item=item isVisible=item.showProps setAlpha=setAlpha selectedLayer=selectedLayer

  = filter-all-modal model=model filterModal=filterModal loadLayers=loadLayers filterOptions=filterOptions

