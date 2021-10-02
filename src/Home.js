import Navbar from "./components/global/Navbar";

const Home = () => {
  return (
    <div className ='home-page'>
      <Navbar />
      <div className = 'home-page-content'>
        <div className = 'home-heading-container'>
          <h1 className = 'home-heading'>Fruit Basket</h1>
          <h2 className = 'home-subheading'>All Fruit, All The Time</h2>
        </div>
      </div>
    </div>
  )
}

export default Home;
