import { useAsync } from "../../hooks/useAsync";
import { ListMedia } from "../../components/ListMedia";
import { getMedia } from "../../api/getMedia";
import { Loading } from "../../components/Loading";

function Movies() {
  const { value, status } = useAsync(() => getMedia('movie'));

  if (status === "pending") {
    return <Loading />
  }

  return <ListMedia mediaData={value} />
}

export default Movies;
