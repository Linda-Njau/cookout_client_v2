import SearchUsers from "./SearchUsers";
import ExploreRecipes from "./ExploreRecipes";

const ExplorePage = ({ userId }) => {
    return (
        <div>
            <SearchUsers userId={userId}/>
            <ExploreRecipes userId={userId}/>
        </div>
    );
};

export default ExplorePage;
