import Navbar from "./components/global/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Fruit Basket</h1>
      <h2>All Fruit, All The Time</h2>
      <img src = {`${process.env.PUBLIC_URL}/assets/images/manyfruits.jpg`} alt = 'many fruits' />
      <h2>About Us</h2>
      <p>We really love fruit and I bet you do too. Now you can buy all the fruit you need from one place. Wow!</p>
    </div>
  )
}

export default Home;
