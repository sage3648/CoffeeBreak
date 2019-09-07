class LocalNotification {
    constructor(message, title = "Coffee Break", icon = "images/icon.png"){

        new Notification(title,
            {
                body:message,
                icon:icon
            });

    }
}