import { notification } from "antd";

export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

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
