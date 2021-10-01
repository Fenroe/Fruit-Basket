const Home = () => {
  return (
    <div>
      <h1>Fruit Basket</h1>
      <h2>All Fruit, All The Time</h2>
      <img src = {`${process.env.PUBLIC_URL}/assets/images/manyfruits.jpg`} alt = 'many fruits' />
    </div>
  )
}

export default Home;
