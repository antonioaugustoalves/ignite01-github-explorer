//https://api.github.com/users/antonioaugustoalves/repos
import { RepositoryItem } from "./RepositoryItem";
import { Counter } from "./Counter";
import '../styles/repositories.scss';
import { useState, useEffect } from "react"; //Hooks do react


export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/antonioaugustoalves/repos')
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, []);

  console.log(repositories)

  const repositoryName = 'Projeto 02';
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
