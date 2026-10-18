import { useState } from "react";

function BotaoLike() {
  const [curtido, setCurtido] = useState(false);

  return (
    <div>
      <h2>Exercício 1 - Botão de curtir</h2>

      <button onClick={() => setCurtido(!curtido)}>
        {curtido ? "Curtido ❤️" : "Curtir 🤍"}
      </button>
    </div>
  );
}

function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div>
      <h2>Exercício 2 - Contador</h2>

      <button onClick={() => setValor(v => v + 1)}>
        +1
      </button>

      <span> {valor} </span>

      <button onClick={() => setValor(v => v - 1)}>
        -1
      </button>
    </div>
  );
}

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  function aoEnviar(event) {
    event.preventDefault();

    if (nome.trim() === "" || email.trim() === "") {
      setErro("Preencha o nome e o e-mail.");
      return;
    }

    if (!email.includes("@")) {
      setErro("O e-mail precisa conter @.");
      return;
    }

    setErro("");

    console.log("Nome:", nome);
    console.log("E-mail:", email);
  }

  return (
    <div>
      <h2>Exercício 3 - Formulário</h2>

      <form onSubmit={aoEnviar}>
        <div>
          <label>Nome: </label>
          <input
            type="text"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />
        </div>

        <div>
          <label>E-mail: </label>
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        {erro && <p style={{ color: "red" }}>{erro}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function ContadorComLimite({ limite = 5 }) {
  const [valor, setValor] = useState(0);

  return (
    <div>
      <h2>Exercício 4 - Contador com limite</h2>

      <p>Valor: {valor}</p>
      <p>Limite: {limite}</p>

      <button
        onClick={() => setValor(v => v < limite ? v + 1 : v)}
        disabled={valor >= limite}
      >
        +1
      </button>
    </div>
  );
}

function FormularioComTentativas() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [tentativas, setTentativas] = useState(0);

  function aoEnviar(event) {
    event.preventDefault();

    if (nome.trim() === "") {
      setTentativas(t => t + 1);
      setErro("O nome é obrigatório.");
      return;
    }

    if (email.trim() === "") {
      setErro("O e-mail é obrigatório.");
      return;
    }

    if (!email.includes("@")) {
      setErro("O e-mail precisa conter @.");
      return;
    }

    setErro("");

    console.log("Nome:", nome);
    console.log("E-mail:", email);
  }

  return (
    <div>
      <h2>Exercício 5 - Tentativas de envio</h2>

      <form onSubmit={aoEnviar}>
        <div>
          <label>Nome: </label>
          <input
            type="text"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />
        </div>

        <div>
          <label>E-mail: </label>
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        {erro && <p style={{ color: "red" }}>{erro}</p>}

        {tentativas >= 3 && (
          <p style={{ color: "blue" }}>
            Dica: o campo nome não pode ficar vazio.
          </p>
        )}

        <p>Tentativas com nome vazio: {tentativas}</p>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default function Atividade() {
  return (
    <div>
      <h1>Aula 03 - React</h1>

      <BotaoLike />

      <hr />

      <Contador />

      <hr />

      <Formulario />

      <hr />

      <ContadorComLimite />

      <hr />

      <ContadorComLimite limite={3} />

      <hr />

      <FormularioComTentativas />
    </div>
  );
}