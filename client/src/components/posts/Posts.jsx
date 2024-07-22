import './Posts.scss'
function Posts({ title,  description,  date, image,text,  user,  userProfile}) {
  return (
    <div className='post-container'>
     
          <div  className="post">

        <div className="header">

          <h1>{title}</h1>
          <div className="description">
            <h3>{description}</h3>
            <span>{date}</span>
          </div>

        </div>
        <div className="content">
          <img src={image} alt="freddy" />
          <p>
            {text}
          </p>
        </div>

        <div className='rated'>
          <span>like</span>
          <span >replies
            <span>3</span>
          </span>
        </div>
        <div className="user">
          <img src={userProfile} alt="" />
          <div className="info">
            <span >{user}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>

  
    </div>
  )
}

export default Posts