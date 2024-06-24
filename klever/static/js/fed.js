document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedback-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const itemInput = document.getElementById("item");
        const commentInput = document.getElementById("comment");
        const phoneInput = document.getElementById("phone");

        const name = nameInput.value.trim().substring(0, 25); // Ограничение имени до 25 символов
        const email = emailInput.value.trim();
        const item = itemInput.value.trim();
        const comment = commentInput.value.trim();
        const phone = phoneInput.value.trim();

        const comments = `Обращение из обратной связи с сайта Перезвонить клиенту и помочь с выбором. Комментарий: ${comment + "\n" + item}`;

        const url = `https://b24-11t2ms.bitrix24.ru/rest/1/43ln4oz97uozw0uu/crm.lead.add.json?fields[NAME]=${encodeURIComponent(name)}&fields[EMAIL][0][VALUE]=${encodeURIComponent(email)}&fields[ITEM]=${encodeURIComponent(item)}&fields[PHONE][0][VALUE]=${encodeURIComponent(phone)}&fields[COMMENTS]=${encodeURIComponent(comments)}`;

        fetch(url, {
            method: "POST"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Lead added successfully:", data);
            // Показываем сообщение о успешной отправке заявки
            alert("Заявка отправлена!");
            // Дополнительные действия при успешном добавлении лида
        })
        .catch(error => {
            console.error("There was a problem adding the lead:", error);
            // Дополнительные действия в случае ошибки
        });
    });
});
