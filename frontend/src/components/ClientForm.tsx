import { useState } from "react";

const ClientForm: React.FC = () => {
    
  const initialState = {
        lastName: "",
        firstName: "",
        phone: 0,
        email: "",
        country: "",
        state: "",
    };

    const [client, setClient] = useState(initialState);

    const handleInput = (e: any) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setClient((prev) => ({ ...prev, [inputName]: inputValue }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(client);
        fetch("http://localhost:8080/api/v1/clients/", {
            method: "POST",
            body: JSON.stringify(client),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
    };

    return (
        <>
            <form>
                <input
                    name="lastName"
                    type="text"
                    value={client.lastName}
                    onChange={handleInput}
                />
                <input
                    name="firstName"
                    type="text"
                    value={client.firstName}
                    onChange={handleInput}
                />
                <input
                    name="phone"
                    type="phone"
                    value={client.phone}
                    onChange={handleInput}
                />
                <input
                    name="email"
                    type="email"
                    value={client.email}
                    onChange={handleInput}
                />
                <input
                    name="country"
                    type="text"
                    value={client.country}
                    onChange={handleInput}
                />
                <input
                    name="state"
                    type="text"
                    value={client.state}
                    onChange={handleInput}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    );
};

export default ClientForm;
