import { useQuery } from "@tanstack/react-query";
import ClientsTable from "./components/ClientsTable/ClientsTable";
import { Spin } from "antd";
import CreateModal from "./components/CreateModal/CreateModal";

function App() {
    const fetchData = async () => {
        const res = await fetch(
            "https://crm-project-function-app.azurewebsites.net/api/clients",
        );
        return res.json();
    };

    const { isLoading, isError, data, refetch } = useQuery(
        ["clients"],
        fetchData,
    );

    const handleRefresh = (): void => {
        refetch();
    };

    //If still loading/fetching render spin component
    if (isLoading) {
        return <Spin size="large" />;
    }

    //If there is an error render a error
    if (isError) {
        return <span>Error...</span>;
    }

    return (
        <>
            {/* <h1>Client Database</h1> */}
            <ClientsTable clients={data} refetchGetQuery={handleRefresh} />
            <CreateModal refetchGetQuery={handleRefresh} />
        </>
    );
}

export default App;
