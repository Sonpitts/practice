const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 3000

const peter = {
    'age': 25,
    'name': 'Son pitts',
    'birthLocation': 'nairobi'
}

// app.get('/api', (req, res) => {
//     res.json(peter)
// })

const transactions = {
    'deposits': {
        'msdn': 254727144256,
        'amount': 'Ksh 500',
        'date': '05/07/2022',
        'time': '15:00 hrs',
    },
    'withdrawal': {
        'msdn': 254737144256,
        'amount': 'Ksh 100',
        'date': '05/07/2022',
        'time': '16:00 hrs',
    },
    'bets': {
        'msdn': 254727144256,
        'betId': 247836277,
        'date': '05/07/2022',
        'time': '15:30 hrs',
        'status': 'pending'
    },
    'unknown': {
        'msdn': 'unknown',
        'betId': 'unknown',
        'date': 'unknown',
        'time': 'unknown',
        'status': 'unknown'
    }
}

app.listen(PORT, () => {
    console.log(`Catch up crew we live on port ${PORT}`)
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const transactionName = req.params.name
    if(transactions[transactionName]) {
        res.json(transactions[transactionName])
    }else {
        res.json(transactions['unknown'])
    }
})

