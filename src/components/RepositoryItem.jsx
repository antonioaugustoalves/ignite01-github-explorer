export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <hr />
      <p>{props.repository.description ?? 'Default'}</p>
      <a href={props.repository.html_url}>Link no github</a>
    </li>
  );
}