
import Navbar from "../../components/Navbar/Navbar"
import Posts from "../../components/posts/Posts"
import Hero from "../../components/Hero/Hero";
import Sidebar from "../../components/Sidebar/Sidebar";
import {post} from "../../../utils/data"
import './Home.scss'
function Home() {
  return (
    <>
    <Navbar/>
    <div className="home-container">
    <Hero/>
    <div className="home">
      <div className="post-home"  >
        {
        post.map((item)=>(
          <Posts key={item.id}
          title = {item.title}
          description ={item.description}
          date ={item.date}
          image = {item.image}
          text ={item.text}
          user = {item.user}
          userProfile = {item.userProfile}
          />
        ))
       }
      </div>
      <div className="side-home">
         <Sidebar/>
      </div>
       
   
    </div>
   
    </div>

   </>
  )
}

export default Home