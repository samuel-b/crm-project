//Imports
import { notification } from "antd";

//Antd Components
type NotificationType = "success" | "info" | "warning" | "error";
export const openNotification = (
    type: NotificationType,
    title: string,
    description?: any,
) => {
    notification[type]({
        message: title,
        description: description,
    });
};
