import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.set('pages',['1']);
  },
  didReceiveAttrs(){
    this._super(...arguments);
    let currentPage = this.get('currentPage');
    let totalPages =  Math.ceil(this.get('count')/this.get('perPage'));
    var pages = [];
    for( var i=0; i <= totalPages; i++){
      pages.push(i);
    }
    if(currentPage < 4){
      this.set('pages', pages.slice(1, 6));
    } else if (currentPage > totalPages - 3){
      this.set('pages', pages.slice(totalPages-4, totalPages+1));
    } else {
      this.set('pages', pages.slice(currentPage-2, currentPage+3));
    }


  },
  actions: {
    changePage(page){
      let perPage = this.get('perPage');
      this.set('currentPage', page);
      this.set('params.skip', (page-1)*perPage);
      this.get('reloadModel')();
    }
  }
});
