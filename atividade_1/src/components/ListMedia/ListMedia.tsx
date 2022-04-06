import { Card } from "../Card";

export interface IMediaData {
  id?: number;
  title?: string;
  name?: string;
  poster_path?: string
  alt?: string
}

interface IProps {
  mediaData?: IMediaData[]
}

function ListMedia({ mediaData }: IProps) {
  return (
    <div className="media__container">
      {mediaData?.map((media, i) => (
        <Card
          key={i}
          media={media}
        />
      ))}
    </div>
  )
}

export default ListMedia;
