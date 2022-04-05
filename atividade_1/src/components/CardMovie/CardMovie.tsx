import "./styles.css";
interface IMovieData {
  id: number;
  title: string;
  src: string
  alt: string
}
interface IProps {
  movieData: IMovieData[]
}

function CardMovie({ movieData }: IProps) {
  return (
    <>
      {movieData.map(item => (
        <div className="c-card">
          <img className="img" key={item.id} src={item.src} alt={item.alt} />
          <h2>{item.title}</h2>
        </div>
      ))}
    </>
  )
}

export default CardMovie;
