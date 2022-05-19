import { useEffect, useState } from "react";
import ClientList from "./containers/ClientList";

function App() {
    const [clients, setClients] = useState([]);

    const fetchData = async () => {
        const res = await fetch("http://localhost:8080/api/v1/clients/");
        const data = await res.json();
        setClients(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <ClientList clients={clients}></ClientList>
        </>
    );
}

export default App;
