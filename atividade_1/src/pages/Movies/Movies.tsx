import { ImageMovie } from "../../components/ImageMovie";

const moviesImages = [
  {
    id: 1,
    title: "The Flash",
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "teste",
  },
  {
    id: 2,
    title: "The Batman",
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "teste 2",
  }
]

function Movies() {
  return (
    <>
      <h1>Movies</h1>
      <ImageMovie images={moviesImages} />
    </>
  )
}

export default Movies;
