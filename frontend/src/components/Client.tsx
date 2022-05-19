import { IClients } from "../containers/ClientList";

interface Props {
    client: IClients;
}

const Client: React.FC<Props> = ({ client }) => {
    return (
        <div>
            <p>{client.lastName}</p>
            <p>{client.firstName}</p>
            <p>{client.phone}</p>
            <p>{client.email}</p>
            <p>{client.country}</p>
            <p>{client.state}</p>
            <hr />
        </div>
    );
};

export default Client;
