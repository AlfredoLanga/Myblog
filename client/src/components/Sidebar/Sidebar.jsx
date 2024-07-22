import './Sidebar.scss';
import Me from '../Me/Me';
import Advertise from '../Advertise/Advertise';
import PopularPosts from '../PopularPosts/PopularPosts';
import { Popular } from '../../../utils/data';
import Tag from '../Tag/Tag';
import Subscribe from '../Subscribe/Subscribe';

function Sidebar() {
  return (
    <div className="sidebar-container" style={{ flex: 6 }}>
      <Me />
      <div className="popular mt-4">
        <h1 className="h4 mb-3">Popular Posts</h1>
        {Popular.map((post) => (
          <PopularPosts
            key={post.id}
            id={post.id}
            title={post.title}
            user={post.user}
            userProfile={post.userProfile}
            description={post.description}
          />
        ))}
      </div>
      <Advertise className="mt-4" />
      <Tag className="mt-4" />
      <Subscribe className="mt-4" />
    </div>
  );
}

export default Sidebar;
