import  './PopularPosts.scss'
function PopularPosts({title, userProfile, description}) {
  return (
    <div className='popular-container'>
       <div className="content-post">
          <img src={userProfile} alt="User" />
          <div className="info">
           <h3>{title} </h3>
          <span>{description}</span>
          </div>
         
          </div>
        </div>
  )
}

export default PopularPosts