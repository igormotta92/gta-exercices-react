interface IImage {
  id: number;
  title: string;
  src: string
  alt: string
}
interface IProps {
  images: IImage[]
}

function ImageMovie({ images }: IProps) {
  return (
    <figure>
      {images.map(item => (
        <>
          <h2>{item.title}</h2>
          <img className="img" key={item.id} src={item.src} alt={item.alt} />
        </>
      ))}
    </figure>
  )
}

export default ImageMovie;
