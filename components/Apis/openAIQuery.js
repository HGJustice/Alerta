const queryOpenAI = async () => {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer sk-HTCzjKXC02Arbrwe6QxdT3BlbkFJ5mnxQGe0ZWm6W6sky7xiks`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {role: 'user', content: 'Jest osoba, które obniżyło się tętno praktycznie do 0, co robić w takiej sytuacji? Wylistuj mi w punktach zadanie co robić, maksymalnie 350 znaków. Nie dodawaj nic poza punktami.'}
                ]
            }),
        });

        const data = await response.json();
        // Wyodrębnienie zawartości pierwszej wiadomości z pierwszego wyboru
        const messageContent = data.choices[0].message.content;
        console.log(messageContent); // Opcjonalnie: wyświetlenie w konsoli
        return messageContent; // Zwrócenie zawartości wiadomości
    } catch (error) {
        console.error('Error:', error);
        return null; // lub obsłuż błąd inaczej, zależnie od potrzeb
    }
};

// Eksport funkcji
export default queryOpenAI;
