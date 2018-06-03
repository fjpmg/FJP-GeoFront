import Ember from 'ember';

const { inject: { service }, $ } = Ember;

export default Ember.Component.extend({
  store: service(),
  flashMessages: service(),
  perfilOptions: Ember.A([
    { value: 'u', display: 'Usuario'},
    { value: 't', display: 'Tecnico'},
    { value: 'a', display: 'Administrador'},
  ]),

  init(){
    this._super(...arguments);
    let store = this.get('store');
    let usuario = store.createRecord('usuario', {
      nomeCompleto: '',
      nomeAmigavel: '',
      email: '',
      password: '',
      cpf: '',
      telefone: '',
      perfil: 'u',
    });

    this.set('usuario', usuario);
  },
  didInsertElement(){
    this._super(...arguments);
    var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
      spOptions = {
        onKeyPress: function(val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
      };
    $('.cpf').mask('000.000.000-00')
    $('.telefone').mask(SPMaskBehavior, spOptions);
  },

  actions: {
    criarNovo(){
      const flashMessages = Ember.get(this, 'flashMessages');
      let store = this.get('store');
      let usuario = this.get('usuario');
      if(!usuario.get('password')){
        this.set('usuario.password', '123456');
      }
      usuario.save()
        .then(
          () => {
            let novoUsuario = store.createRecord('usuario', {
              nomeCompleto: '',
              nomeAmigavel: '',
              email: '',
              password: '',
              cpf: '',
              telefone: '',
              perfil: 'u',
            });
            this.set('usuario', novoUsuario);
            flashMessages.success('Usuário criado com sucesso');
            this.get('reloadModel')();
          },
          (error) => {
            console.log(error);
          });
    },
  },
});
