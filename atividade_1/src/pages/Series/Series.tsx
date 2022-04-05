import { ImageMovie } from "../../components/ImageMovie";

const series = [
  {
    id: 1,
    title: "The Flash",
    src: "https://geekblog.com.br/wp-content/uploads/2022/04/the-flash-2.jpg",
    alt: "The Flash"
  },
  {
    id: 2,
    title: "The Batman",
    src: "https://i2p5c7k3.rocketcdn.me/wp-content/uploads/2021/10/The-Batman-Filme-2022.jpg",
    alt: "The Batman"
  }
]

function Series() {
  return (
    <div>
      <h1>Series</h1>
      <ImageMovie images={series} />
    </div>
  )
}

export default Series;
