import HomePageFood from "./HomePageFood";
import Search from "./Search";

export const Home = () => {
  return (
    <>
      <div className="home-page">
        <Search />
        <div className="home-food-container">
          <HomePageFood
            searchText={"fish-curry"}
            url="https://t3.ftcdn.net/jpg/04/04/48/60/360_F_404486093_uS1dUsE2EirKM8nmq9vdaiTDtARbGbW1.jpg"
          />
          <HomePageFood
            searchText={"Biryani"}
            url="https://media.istockphoto.com/id/1333127675/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.webp?b=1&s=612x612&w=0&k=20&c=sBs2vTxEHz9T5tJlmrVqmli-zFYF_O40cTw0nn7Lkfc="
          />
          <HomePageFood
            searchText={"tandoori"}
            url="https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1709078400&semt=ais"
          />
          <HomePageFood
            searchText={"chicken-lolly-pop"}
            url="https://www.shutterstock.com/image-photo/chicken-lollipop-dry-6-pieces-600nw-1936368526.jpg"
          />
          <HomePageFood
            searchText="prawns"
            url="https://www.coastmagazine.co.uk/wp-content/uploads/sites/14/2015/01/web-1-malabar-prawn-biryani.jpg"
          />
          <HomePageFood
            searchText="egg"
            url="https://www.kannammacooks.com/wp-content/uploads/thattu-kadai-style-avicha-muttai-omelette-recipe-1-3.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
