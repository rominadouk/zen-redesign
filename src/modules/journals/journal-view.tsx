import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios";

const JournalView = () => {
    
    //declare types
    type Journal= {
        title: string;
        post: string;
        createdAt: string;
        updatedAt: string;
        _id: string
    }

    const { id } = useParams();
    const [oneJournal, setOneJournal] = useState({} as Journal);
    //Get a single journal using the parameters in the url, Display the info for that.

    const getOneJournal = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/journals/${id}`);
            setOneJournal(response.data)
            console.log(response.data)
            console.log(oneJournal)
        } catch(err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getOneJournal();
    }, []);




    return (
        <div>
            <h1>This is the Journal View page</h1>
            <p>{oneJournal.title}</p>
            <p>{oneJournal.post}</p>
        </div>
    );
}
 
export default JournalView;