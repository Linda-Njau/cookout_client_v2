import SearchUsers from "./SearchUsers";
import ExploreRecipes from "./ExploreRecipes";

const ExplorePage = ({ userId }) => {
    return (
        <div>
            <SearchUsers userId={userId}/>
            <ExploreRecipes/>
        </div>
    );
};

export default ExplorePage;
