import { useEffect, useState } from "react";
import ClientList from "./containers/ClientList";
import ClientForm from "./components/ClientForm";

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
            <ClientForm/>
        </>
    );
}

export default App;
