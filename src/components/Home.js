

const Home = (props) => {

    return(
        <div>
            <h1>Home</h1>
            <div className="container">
            <h1 className="mt-5 text-center" id="greeting">Hello</h1>
            <h1 className="mt-5 text-center" id="greeting2">{props.name}!</h1>
            </div>
        </div>        
    );
}


export default Home;