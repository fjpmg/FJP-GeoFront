.container
  if errorMessage
    br
    .alert.alert-danger.alert-dismissable
      a.close href="#" data-dismiss="alert" aria-label="close" &times;
      "Email e/ou senha incorretos
form.form-signin{{action 'authenticate' on='submit'}}
  h3.form-signin-heading.text-center Faça seu login
  label.sr-only for="identification" Email
  =input#identification.form-control placeholder='Digite seu email' value=email
  label.sr-only for="password" Senha
  =input#password.form-control placeholder='Digite sua Senha' type='password' value=password
  button.btn.btn-lg.btn-primary.btn-block type="submit" Login
