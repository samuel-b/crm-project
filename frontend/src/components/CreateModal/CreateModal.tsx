import { Button, Modal, Input } from "antd";
import React, { useState } from "react";
import { openNotification } from "./../../utilities/utilities";

interface Props {
    refetchGetQuery: () => void;
}

const CreateModal: React.FC<Props> = ({ refetchGetQuery }) => {
    const initialState = {
        lastName: "",
        firstName: "",
        phone: "",
        email: "",
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
            "https://crm-project-function-app.azurewebsites.net/api/clients/",
            {
                method: "POST",
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
        openNotification("success", "Client added to database");
        setState(initialState)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Client
            </Button>
            <Modal
                title="Create Client"
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

export default CreateModal;
