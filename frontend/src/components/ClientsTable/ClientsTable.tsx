import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { openNotification } from "./../../utilities/utilities";

interface IClient {
    lastName: string;
    firstName: string;
    phone: string;
    email: string;
    country: string;
    state: string;
    id: string;
}

interface Props {
    clients: IClient[];
    refetchGetQuery: () => void;
}

const ClientsTable: React.FC<Props> = ({ clients, refetchGetQuery }) => {
    const columns: ColumnsType<IClient> = [
        {
            //Column Title
            title: "Last Name",
            //Object Key
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "First Name",
            dataIndex: "firstName",
            key: "firstName",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
        },
        {
            title: "State",
            dataIndex: "state",
            key: "state",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Button
                    danger={true}
                    onClick={async () => {
                        const response = await fetch(
                            `https://crm-project-function-app.azurewebsites.net/api/clients/${record.id}`,
                            {
                                method: "DELETE",
                            },
                        );
                        if (!response.ok) {
                            openNotification(
                                "error",
                                "Something went wrong",
                                `${response.status}: ${response.statusText}`,
                            );
                            return;
                        }
                        refetchGetQuery();
                        openNotification(
                            "success",
                            "Client deleted from database",
                        );
                    }}>
                    Delete
                </Button>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={clients}
                rowKey={(record) => record.id}
                pagination={false}
            />
        </>
    );
};

export default ClientsTable;
