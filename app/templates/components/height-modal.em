if heightModal
  =modal-dialog onClose="toggleModal" targetAttachment="center" translucentOverlay=true
    .modal-dialog.modal-md role="document"
      .modal-content
        .modal-header
          button.close click={action 'toggleModal'} type="button" aria-label="Close"
            span aria-hidden="true" &times;
          h4.modal-title#myModalLabel
            i.fa.fa-filter
              "Filtro de Altimetria
        .modal-body
          .row
            .col-md-6
              .form-group
                label for="altitudeMinima"
                "Mínima (m)
                = input value=altitudeMinima type="text" class="form-control text-right" placeholder="800"
            .col-md-6
              .form-group
                label for="altitudeMaxima"
                "Máxima (m)
                = input value=altitudeMaxima type="text" class="form-control text-right" placeholder="1200"
        .modal-footer
          button.btn.btn-default click={action 'toggleModal'} type="button" data-dismiss="modal" Fechar
          button.btn.btn-primary click={action 'saveChanges'} type="button" Filtrar
