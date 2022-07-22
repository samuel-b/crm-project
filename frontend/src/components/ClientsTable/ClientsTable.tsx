import { Table, Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { openNotification } from "./../../utilities/utilities";
import UpdateModal from "./../UpdateModal/UpdateModal";
import styles from "./ClientTable.module.css";

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
            title: "First Name",
            dataIndex: "firstName",
            key: "firstName",
        },
        {
            //Column Title
            title: "Last Name",
            //Object Key
            dataIndex: "lastName",
            key: "lastName",
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
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <UpdateModal
                        client={record}
                        refetchGetQuery={refetchGetQuery}
                    />
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
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table
                className={styles.ClientTableWrapper}
                columns={columns}
                dataSource={clients}
                rowKey={(record) => record.id}
                pagination={false}
            />
        </>
    );
};

export default ClientsTable;
