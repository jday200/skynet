function App() {
    console.log("App");
    return ( 
        <form action="/save.html">
            <label>username:</label>
            <input type="text" name="username">

            </input>
            <label>password:</label>
            <input type="text" name="password">

            </input>
            <input type="submit" value="Submit">
            </input>
        </form>
    );
}

export default App;