import SearchUsers from "./SearchUsers";

const ExplorePage = ({ userId }) => {
    return (
        <div>
            <SearchUsers userId={userId}/>
        </div>
    );
};

export default ExplorePage;
