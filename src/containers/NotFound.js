import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>

      <Link
        to='/'
        style={{ textDecoration: 'none', color: 'rgb(241, 53, 109' }}
      >
        Back to the homepage....
      </Link>
    </div>
  )
}

export default NotFound
