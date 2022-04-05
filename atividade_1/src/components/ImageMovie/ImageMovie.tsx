interface IImage {
  id: number
  src: string
  alt: string
}

interface IProps {
  images: IImage[]
}

const ImageMovie: React.FC<IProps> = ({ images }) => {

  return (
    <>
      {images.length > 0 ? images.map(item => {
        <img key={item.id} src={item.src} alt={item.alt} />
      }) : 'teste'}
    </>
  )
}

// function ImageMovie2({ images }: IProps) {
//   return (
//     <>
//       {images.map(item => {
//         <img key={item.id} src={item.src} alt={item.alt} />
//       })}
//     </>
//   )
// }

export default ImageMovie
