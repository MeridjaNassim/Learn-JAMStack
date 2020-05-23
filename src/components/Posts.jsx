import React, { useEffect, useState } from "react"
import "./posts.css"
const Posts = () => {

  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [displayed, setDisplayed] = useState(3)
  
  const fetchPostData = url => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setPosts(json)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchPostData("https://jsonplaceholder.typicode.com/posts")
  }, [])

  return loading ? (
    <PostLoader></PostLoader>
  ) : (
    <div className="posts-wrapper">
      <ul className="posts-list">
        {posts.slice(0, displayed).map((post,index) => (
          <li className="post" key={`post-${index}`}>
            <Post post={post}></Post>
          </li>
        ))}
      </ul>
      <button
        className="btn"
        onClick={e => {
          setLoading(true)
          fetchPostData("https://jsonplaceholder.typicode.com/posts")
        }}
      >
        Refrech posts
      </button>
      <button
        className="btn"
        onClick={e => {
          if(displayed< posts.length) {
            setDisplayed(Math.min(posts.length,(displayed+3)))
          }
        }}
      >
        Show More
      </button>
    </div>
  )
}

const Post = ({ post }) => (
  <>
    <img
      src={require("../images/profile.jpg")}
      width="80px"
      height="80px"
      className="avatar"
    ></img>
    <h3 className="post-title">{post.title}</h3>

    <p className="post-body">{post.body}</p>
  </>
)
const PostPlaceholder = () => (
  <div className="post-loader">
    <div className="post-user-placeholder fadeInOut"></div>
    <div className="title-placeholder fadeInOut"></div>
    <div className="body-placeholder fadeInOut"></div>
  </div>
)
const PostLoader = () => (
  <div className="loader">
    <ul className="posts-list">
      <li className="post">
        <PostPlaceholder></PostPlaceholder>
      </li>
      <li className="post">
        <PostPlaceholder></PostPlaceholder>
      </li>
      <li className="post">
        <PostPlaceholder></PostPlaceholder>
      </li>
    </ul>
  </div>
)

export default Posts
export {PostLoader,Post}