import SearchRecipes from "./SearchRecipes";
import FollowedRecipes from "./FollowedRecipes";

const HomePage = ({userId}) => {
    return (
    <div>
      <SearchRecipes />
      <FollowedRecipes userId={userId} />
    </div>
    );
  };

  export default HomePage;
