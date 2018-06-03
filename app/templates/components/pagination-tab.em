.clearfix
  nav aria-label="Page navigation" class="pull-right"
    ul class="pagination"
      li
        a href="#" aria-label="Previous"
          span aria-hidden="true" &laquo;
      each pages as |page|
        if (eq page currentPage)
          li class='active'
            a href="#" onclick={action 'changePage' page} = page
        else
          li
            a href="#" onclick={action 'changePage' page} = page


      li
        a href="#" aria-label="Next"
          span aria-hidden="true" &raquo;

