nav.navbar.navbar-inverse.navbar-fixed-top
  .container
    .navbar-header
      button.navbar-toggle.collapsed type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"
        span.sr-only Toggle navigation
        span.icon-bar
        span.icon-bar
        span.icon-bar
      =link-to "Geo Emater" 'admin' class='navbar-brand'
    #navbar.navbar-collapse.collapse
      ul.nav.navbar-nav
        li= link-to 'Inicio' 'admin'
        li= link-to 'Usuários' 'admin.usuarios'
        li= link-to 'Propriedades' 'admin.propriedades'
        li= link-to 'Municipios' 'admin.municipios'
        li= link-to 'Premios' 'admin.premios'
        li= link-to 'Tipos de produtos' 'admin.tipos-de-produtos'
        li= link-to 'FERRAMENTA' 'ferramenta'
      ul.nav.navbar-nav.navbar-right
        li.dropdown
          a.dropdown-toggle href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
            i.fa.fa-gear
            span.caret
          ul.dropdown-menu
            li
              a href="#" Perfil
            li.divider role="separator"
            li
              a{{action 'invalidateSession'}} Sair
.container.main
  each flashMessages.queue as |flash|
    =flash-message flash=flash
  outlet
