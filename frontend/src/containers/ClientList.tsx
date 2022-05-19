import Client from "./../components/Client";

export interface IClients {
    id: number;
    lastName: string;
    firstName: string;
    phone: string;
    email: string;
    country: string;
    state: string;
}

interface Props {
    clients: Array<IClients>;
}

const ClientList: React.FC<Props> = ({ clients }) => {
    return (
        <>
            {clients.map((client) => {
                return <Client key={client.id} client={client} />;
            })}
        </>
    );
};

export default ClientList;
