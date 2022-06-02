import { IClients } from "../containers/ClientList";

interface Props {
    client: IClients;
}

const Client: React.FC<Props> = ({ client }) => {
    return (
        <div>
            <p>Last Name, First Name, Phone, Email, Country, State</p>
            <p>{`${client.lastName}, ${client.firstName}, ${client.phone} ${client.email}, ${client.country}, ${client.state}`}</p>
            <hr />
        </div>
    );
};

export default Client;
