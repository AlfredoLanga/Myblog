import  './Tag.scss'
import { tags } from '../../../utils/data'
import Tags from './Tags/Tags'
function Tag() {
  return (
    <div className='tag-container'>
        <h1>Tags</h1>
        <div className="tags">
            {
                tags.map((tag)=>(
                   <Tags
                   key={tag.id}
                   id={tag.id}
                   name={tag.name}
                   /> 
                ))
            }
        </div>
    </div>
  )
}

export default Tag