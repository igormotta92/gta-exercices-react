export const getMedia = async (type: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/discover/${type}?api_key=${process.env.REACT_APP_API_KEY}`);
  const data = await response.json();
  return data.results;
}