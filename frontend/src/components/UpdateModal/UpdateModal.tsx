import { Button, Modal, Input } from "antd";
import React, { useState } from "react";
import { openNotification } from "./../../utilities/utilities";

interface IClient {
    lastName: string;
    firstName: string;
    phone: string;
    email: string;
    id: string;
}

interface Props {
    client: IClient;
    refetchGetQuery: () => void;
}

const UpdateModal: React.FC<Props> = ({ client, refetchGetQuery }) => {
    const initialState = {
        lastName: client.lastName,
        firstName: client.firstName,
        phone: client.phone,
        email: client.email,
        id: client.id,
    };

    const handleInput = (e: any) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setState((prev) => ({ ...prev, [inputName]: inputValue }));
    };

    const [state, setState] = useState(initialState);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        for (let key in state) {
            if (state[key as keyof typeof state].length < 2) {
                openNotification("error", `Please enter a valid ${key}`);
                return;
            }
        }
        const response = await fetch(
            `https://crm-project-function-app.azurewebsites.net/api/clients/${client.id}`,
            {
                method: "PUT",
                body: JSON.stringify(state),
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
        setIsModalVisible(false);
        openNotification("success", "Client updated");
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Update
            </Button>
            <Modal
                title="Update Client"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <label htmlFor="firstName">First Name:</label>
                <Input
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleInput}
                />
                <label htmlFor="lastName">Last Name:</label>
                <Input
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleInput}
                />
                <label htmlFor="phone">Phone:</label>
                <Input
                    type="text"
                    name="phone"
                    value={state.phone}
                    onChange={handleInput}
                />
                <label htmlFor="email">Email:</label>
                <Input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleInput}
                />
            </Modal>
        </>
    );
};

export default UpdateModal;
