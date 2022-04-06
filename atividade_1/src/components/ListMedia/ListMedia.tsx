import { Card } from "../Card";
import { IListMediaProps } from "../../common/types";

function ListMedia({ mediaData }: IListMediaProps) {
  return (
    <ul className="media__container">
      {mediaData?.map((media, i) => (
        <Card
          key={i}
          media={media}
        />
      ))}
    </ul>
  )
}

export default ListMedia;
