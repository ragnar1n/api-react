import './App.css';
import {useState} from "react"
import axios from "axios";

function App() {
    const [paymentLink, setPaymentLink] = useState(null);
    const [sum, setSum] = useState('');

    // useEffect(() => {
    //     fetch(`http://localhost:3006/jrk/${jrk}`)
    //         .then(res => res.json())
    //         .then(json => setToode(json));
    // }, []);
    // const item = async (event) => {
    //     event.preventDefault()
    //     try {
    //         const response = await axios.get(`http://localhost:3006/jrk/${jrk}`)
    //         setToode(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    const ylekanne = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.get(`http://localhost:3006/payment/${sum}`)
            setPaymentLink(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <form onSubmit={ylekanne}>
                <label>Üle kantav summa:</label><br/>
                <input type="number" value={sum} onChange={(event) => setSum(event.target.value)}/><br/>
                <button type='submit'>Maksa</button>
            </form>
            {paymentLink && (<a href={paymentLink} target="_blank">Ülekande link</a>)}
        </div>
    )
}

export default App;