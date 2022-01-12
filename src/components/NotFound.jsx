import { Link } from 'react-router-dom'

const NotFound = () => (
    <div>
        <h1>404 - Page not found</h1>
        <h3>This is not the page you were looking for :(</h3>
        <h4>Click <Link to="/">here</Link> to go home</h4>
    </div>
)

export default NotFound