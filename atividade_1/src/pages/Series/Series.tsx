import { getMedia } from "../../api/getMedia";
import { ListMedia } from "../../components/ListMedia";
import { Loading } from "../../components/Loading";
import { useAsync } from "../../hooks/useAsync";

function Series() {
  const { value, status } = useAsync(() => getMedia('tv'));
  console.timeLog(value)
  if (status === "pending") {
    return <Loading />
  }

  return <ListMedia mediaData={value} />
}

export default Series;
