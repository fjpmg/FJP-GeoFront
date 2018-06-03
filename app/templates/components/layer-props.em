.row.slider-alpha
  .col-xs-12
    h3 Opacidade
    =ui-slider value=item.alpha min=0 max=1 step=0.01 orientation='horizontal' tooltip='before' disabled=false handle='square' reversed=false tooltipPosition='bottom' focus=false naturalArrowKeys=false immediateResponse=false changed='setAlpha'
.row.props
  .col-xs-4
    h3 Tipo
    p Polígono
  .col-xs-4
    h3 Feições
    p 6350
  .col-xs-4
    h3 Status
    p Polígono
if (not-eq item.feicoes undefined)
  .row.props
    .col-xs-12.clearfix
      button.btn.btn-sm.btn-primary.pull-right  Exibir
      h3 Exibindo
      p Uma variável qualquer da feição
.row.props
  .col-xs-6.clearfix
    h3 Fonte
    p IEDE
