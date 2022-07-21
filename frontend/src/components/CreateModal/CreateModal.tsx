import { Button, Modal, Input } from "antd";
import { log } from "console";
import React, { useState } from "react";
import { openNotification, emailRegex } from "./../../utilities/utilities";

interface Props {
    refetchGetQuery: () => void;
}

const CreateModal: React.FC<Props> = ({ refetchGetQuery }) => {
    const initialState = {
        lastName: "",
        firstName: "",
        phone: "",
        email: "",
        country: "",
        state: "",
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
            if (
                state[key as keyof typeof state].length < 2 ||
                (key == "email" && !emailRegex.test(state.email))
            ) {
                openNotification("error", `Please enter a valid ${key}`);
                return;
            }
        }
        // const response = await fetch(
        //     "https://crm-project-function-app.azurewebsites.net/api/clients/",
        //     {
        //         method: "POST",
        //         body: JSON.stringify(state),
        //     },
        // );
        // if (!response.ok) {
        //     openNotification(
        //         "error",
        //         "Something went wrong",
        //         `${response.status}: ${response.statusText}`,
        //     );
        //     return;
        // }
        // refetchGetQuery();
        // setIsModalVisible(false);
        // openNotification("success", "Client added to database");
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
                <Input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleInput}
                />
                <Input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={state.firstName}
                    onChange={handleInput}
                />
                <Input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={state.phone}
                    onChange={handleInput}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleInput}
                />
                <Input
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={state.country}
                    onChange={handleInput}
                />
                <Input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={state.state}
                    onChange={handleInput}
                />
            </Modal>
        </>
    );
};

export default CreateModal;
