import MyNavbar from "./MyNavbar";

const MyLayout = (props) => (
    <>
        <MyNavbar />
        {props.children}
        <footer className="footer">
            <div className="container">
                <p className="text-muted">Strivestaurant {new Date().getFullYear()}</p>
            </div>
        </footer>
    </>
)

export default MyLayout