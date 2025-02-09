import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className="w-1/3 bg-gray-300 ml-4 rounded-lg mt-2 pt-4">
      <h3 className="text-3xl text-center"> Reading Time: {readingTime}</h3>
      <h2 className="text-2xl text-center bg-gray-300 rounded-xl">Bookmarked Blogs :{bookmarks.length}</h2>
      {
        bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  );
};
Bookmarks.propTypes={
  bookmarks:PropTypes.array,
  readingTime:PropTypes.number
}

export default Bookmarks;