import './Subscribe.scss'

function Subscribe() {
  return (
    <div className='subscribe-container'>
        <h1>Subscribe</h1>
        <div className="form-content">
            <p>Enter your e-mail below and get notified on the latest blog posts.</p>
        <form action="">
            <input type="email" name="email" id="email" placeholder='Enter Your Email' />
            <button>subscribe</button>
        </form>
        </div>
        
    </div>
  )
}

export default Subscribe