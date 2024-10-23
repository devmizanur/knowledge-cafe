import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handelBookmarks,handelReadingTime }) => {

  const {title,cover,author,posted_date,author_img,reading_time,hashtags}=blog;
  return (
    <div className='gap-2 my-2'>
      <img className='w-full my-2' src={cover} />
      <div className='flex justify-between'>
        <div className='flex items-center'>
        <img className='w-14' src={author_img} />
        <div className='ml-6'>
          <h3 className='text-2xl'>{author}</h3>
          <p>{posted_date}</p>
        </div>
        </div>
        <div className='flex items-center gap-1'>
      <span className=''>{reading_time} min read</span>
      <button onClick={()=>handelBookmarks(blog)}><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <h3 className='text-3xl'> {title}</h3>
      <p>
        {
         hashtags.map((hash,idx)=><span key={idx}>{hash}</span>)
        }
      </p>
      <button onClick={()=>handelReadingTime(reading_time)}  className='text-purple-500 underline cursor-pointer my-1'>Mark as read</button>
    </div>
  );
};

Blog.propTypes = {
blog:PropTypes.object.isRequired,
handelBookmarks:PropTypes.func,
handelReadingTime:PropTypes.func

}
export default Blog;