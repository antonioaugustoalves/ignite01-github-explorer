export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <hr />
      <p>{props.repository.description ?? 'Não possui descrição.'}</p>
      <a href={props.repository.html_url}>Link no github</a>
    </li>
  );
}