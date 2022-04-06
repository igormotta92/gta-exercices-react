import { IProps } from "../../common/types";

const imgUrl = 'https://image.tmdb.org/t/p/original/'
function Card({ media }: IProps) {
  const { id, title, name, poster_path } = media;

  return (
    <li className="card">
      <img className="card__img" key={id} src={`${imgUrl}${poster_path}`} alt={name || title} loading="lazy" />
      <h4 className="card__title" >{name || title}</h4>
    </li>
  )
}

export default Card;
