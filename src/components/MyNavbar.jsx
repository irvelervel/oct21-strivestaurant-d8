import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// js normally follows a syntax standard called camelCase
// thisIsAWordInCamelCase

// instead React Components follow PascalCase
// ThisIsAReactComponent


// props is always an object
// it will contain any prop I'm invoking the component with

// const MyNavbar = (props) => {
//     console.log(props)
//     return (
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Navbar.Brand href="#home">Strivestaurant - {props.payoff}</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="ml-auto">
//                     {
//                         props.links.map(link => (
//                             <Nav.Link key={link} href={'#' + link}>{link.slice(0, 1).toUpperCase() + link.slice(1)}</Nav.Link>
//                         ))
//                     }
//                     {/* <Nav.Link href="#features">Menu</Nav.Link>
//                     <Nav.Link href="#pricing">Booking</Nav.Link>
//                     <Nav.Link href="#contact">Contact us!</Nav.Link> */}
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     )
// }

// this is a neater syntax, destructuring the payoff prop
// so you don't have to put props. props. etc.

const MyNavbar = ({ payoff }) => {

    const location = useLocation()
    // useLocation is a hook, MUST be used in a functional react component
    // and ALWAYS at the top level, before the return statement
    const navigate = useNavigate()

    const handleClick = () => {
        // how to redirect the user via JS?
        console.log('you clicked me!', location)
        // setTimeout(() => {
        navigate(location.pathname === '/' ? '/booking' : '/')
        // }, 3000)
        // programmatically redirect you to a specific route!

        // location is an object and will give you some info on where you currently sit
        // navigate is a function and will accept a new path and bring you there
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* the Link component is used to WRAP jsx elements and make them clickable */}
            {/* and clicking on the wrapped elements can bring the user wherever you want */}
            <Link to="/">
                <Navbar.Brand>Strivestaurant - {payoff}</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/menu">
                        <div className={location.pathname === '/menu' ? 'nav-link active' : 'nav-link'}>Menu</div>
                    </Link>
                    <Link to="/booking">
                        <div className={location.pathname === '/booking' ? "nav-link active" : "nav-link"}>Booking</div>
                    </Link>
                    <Link to="/contact">
                        <div className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact us!</div>
                    </Link>
                    <Link to="/roberta">
                        <div className="nav-link">Roberta!</div>
                    </Link>
                    <Button onClick={handleClick}>{location.pathname === '/' ? 'GO BOOKING!' : 'GO HOME!'}</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

// if Link is working with JSX elements, how can I programmatically redirect the user, from code?

export default MyNavbar