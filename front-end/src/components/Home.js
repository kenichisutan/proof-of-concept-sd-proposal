import {useState} from "react";

const Home = () => {
    const [text, setText] = useState("");

    const handleSubmit = async () => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include',
        };

        const backendUrl = 'http://localhost:5000';

        try {
            const response = await fetch(backendUrl, requestOptions)

            const data = await response.json();

            if (response.ok) {
                setText(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="text-center">
            <h2>Home</h2>
            <br/>
            <br/>
            <h1>Test: {text}</h1>
            <button type="submit" className="btn btn-outline-danger" onClick={handleSubmit}>Decline</button>
        </div>
    )
}

export default Home;