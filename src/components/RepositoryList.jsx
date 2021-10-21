//https://api.github.com/users/antonioaugustoalves/repos
import { RepositoryItem } from "./RepositoryItem";
import { Counter } from "./Counter";
import '../styles/repositories.scss';
import { useState, useEffect } from "react"; //Hooks do react


export function RepositoryList() {
  //Sempre inicie o estado com o mesmo tipo de dados
  const [repositories, setRepositories] = useState([]);

  /*Serve para disparar uma função quando alguma coisa acontecer
  Exemplo quando ocorre a alteração de valores em alguma variavel
  Na lista temos as dependencias do useEffect, quando o array estiver vazio ele 
  será executado uma única vez : Se tirar o segundo parametro, o useEffect ele 
  entra em loop, isso acontece tambem se eu atualizar uma variavel dentro useEffect*/
  useEffect(() => {
    fetch('https://api.github.com/users/antonioaugustoalves/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  console.log(repositories)

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          //Quando usar a função map preciso informar a propriedade key (interna do React ) 
          //Para que ele possa indexar os repositorios na hora de excluir ou alterar.
          return <RepositoryItem key={repository.name} repository={repository} />
        })}


      </ul>
    </section>
  );
}