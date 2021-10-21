interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string,
  }

}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <hr />
      <p>{props.repository.description ?? 'Não possui descrição.'}</p>
      <a href={props.repository.html_url}>Link no github</a>
    </li>
  );
}