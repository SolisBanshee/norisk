import './card-list-container.scss';
function CardListContainer(props) {
  return <ul className="card-list-container">{props.children}</ul>;
}

export default CardListContainer;
