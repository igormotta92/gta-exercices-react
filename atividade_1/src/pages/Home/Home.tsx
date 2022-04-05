
const plans = [
  { id: 1, pacote: 'simple', price: 10 },
  { id: 2, pacote: 'custom', price: 15 },
  { id: 3, pacote: 'combo', price: 20 },
]

const Home: React.FC<{}> = () => {
  const tsxList: any[] = [];
  plans.forEach(item => {
    tsxList.push(<li key={item.id}> {item.pacote} - {item.price}</li>)
  });

  return (
    <>
      <header>
        <h1>Group 3</h1>
      </header>
      <ul>
        {tsxList}
      </ul>
    </>
  )
}

export default Home;
