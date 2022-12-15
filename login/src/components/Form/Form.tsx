import "../styles/style.css";

const Form = () => {

  return (
    <div className="main">
      <div className="container-login">
        <div className="header-login">
          <h1>Login</h1>

          <form action="" className="form">
            <input
              type="email"
              className="username"
              placeholder="nome de usuário"
            />
            <input
              type="password"
              className="password"
              placeholder="sua senha"
            />
            <a href="#" className="btn-login">
              Entrar
            </a>
            <div className="forgot">
              <p>Ainda não tem uma conta? </p>
              <a href="#" className="forgot-a">
                Criar Conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Form;
