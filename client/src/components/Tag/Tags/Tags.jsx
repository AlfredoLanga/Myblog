import  './Tags.scss'

function Tags({ name}) {
  return (
    <div className='tags-container'>
        <div className="content">
              <span>{name}</span>
        </div>
            

      
    </div>
  )
}

export default Tags