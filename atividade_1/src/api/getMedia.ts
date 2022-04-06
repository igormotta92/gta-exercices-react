const url = 'https://api.themoviedb.org/3'

export const getMedia = async (type: string) => {
  const response = await fetch(`${url}/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}`);
  const data = await response.json();
  return data.results;
}