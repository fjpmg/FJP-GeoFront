if filterModal
  =modal-dialog onClose="toggleModal" targetAttachment="center" translucentOverlay=true
    .modal-dialog.modal-lg role="document"
      .modal-content
        .modal-header
          button.close click={action 'toggleModal'} type="button" aria-label="Close"
            span aria-hidden="true" &times;
          h4.modal-title#myModalLabel
            i.fa.fa-filter
              " Filtrar Feições de
              = selectedLayer.name
        .modal-body
          .row
            .col-md-8
              button.btn.btn-default click={action 'checkAll'}
                i.fa.fa-check-square-o
                "Todos
              button.btn.btn-default click={action 'clearAll'}
                i.fa.fa-remove
                "Limpar Seleção
            .col-md-4
              .input-group
                = input key-up=(action 'search') value=filterText class="form-control" type="text" placeholder="Filtrar" aria-describedby="basic-addon1" focusOut=(action 'clearText')
                span.input-group-addon#basic-addon1
                  i.fa.fa-search
          .row
            .col-md-5 style="padding-right:.5em;"
              ul.category-select
                each regionalizacoes as |regionalizacao|
                  li class={if (eq regionalizacaoSelected regionalizacao) 'active'}
                    a{action 'toggleRegionalizacao' regionalizacao} href="#" = regionalizacao.nome
                    ul
                      each regionalizacao.sortedRegioes as |regiao|
                        li class={if (eq regiaoSelected regiao) 'selected'}
                          a{action 'selectRegiao' regiao} href="#"  = regiao.nome
            .col-md-7
              ul.item-select
                each municipiosList as | municipio |
                  li
                    = item-modal-list item=municipio selectionList=selectionList selected=municipio.selected
        .modal-footer
          button.btn.btn-default click={action 'toggleModal'} type="button" data-dismiss="modal" Fechar
          button.btn.btn-primary click={action 'saveChanges'} type="button" Filtrar
