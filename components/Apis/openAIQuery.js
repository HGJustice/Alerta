fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        model: 'chat-gpt-3.5',
        messages: [
            {role: 'user', content: 'Jest osoba, które obniżyło się tętno praktycznie do 0,' +
                    ' co robić w takiej sytuacji? Wylistuj mi w puntkach zadanie co robić,' +
                    ' maksymalnie 350 znaków. Nie dodawaj nic poza punktami.'}
        ]
    }),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
