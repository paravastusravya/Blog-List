import BlogItem from '../BlogItem'

// Write your JS code here
const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list-items">
      {blogsList.map(blogDetails => (
        <BlogItem blogDetails={blogDetails} key={blogDetails.id} />
      ))}
    </ul>
  )
}
export default BlogList
