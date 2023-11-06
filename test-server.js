fetch('https://eval-hack.onrender.com/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: '1+3'})
}).then(res => res.text()).then(console.log)