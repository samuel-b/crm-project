import { IClients } from "../containers/ClientList";

interface Props {
    client: IClients;
}

const Client: React.FC<Props> = ({ client }) => {
    const handleDelete = () => {
        fetch(`http://localhost:8080/api/v1/clients/${client.id}`, {
            method: "DELETE",
        });
    };
    return (
        <div>
            <p>{`${client.lastName}, ${client.firstName}, ${client.phone} ${client.email}, ${client.country}, ${client.state}`}</p>
            <button onClick={handleDelete}> Delete</button>
            <hr />
        </div>
    );
};

export default Client;
