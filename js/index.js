import { plansList } from './data.js'

const generateTable = () => {
    const tbl = document.createElement('table')
    tbl.setAttribute('class', 'styled-table')
    const tblBody = document.createElement('tbody')

    const table_rows = [
        'name',
        'gamesCount',
        'coins',
        'specialAvatar',
        'tShirt',
        'customerCare',
    ]
    // creating all cells
    for (let i = 0; i < table_rows.length; i++) {
        // creates a table row
        const row = document.createElement('tr')
        row.setAttribute('scope', 'col')
        const feature_row = document.createElement('th')
        feature_row.setAttribute('scope', 'col')
        if (i != 0) {
            const featureText = document.createTextNode(table_rows[i])
            feature_row.appendChild(featureText)
        }
        row.appendChild(feature_row)

        for (let j = 0; j < plansList.length; j++) {
            const cell = document.createElement('td')
            const cellText = document.createTextNode(
                plansList[j][table_rows[i]]
            )
            cell.appendChild(cellText)

            if (table_rows[i] === 'name') {
                cell.appendChild(document.createElement('br'))
                const planButton = document.createElement('button')
                planButton.onclick = () => {
                    // console.log(j)
                    window.location.href = './billing_cycle.html?plan_num=' + j
                }
                planButton.innerHTML = plansList[j]['yearlySubPrice'] + '$'
                if (j == plansList.length - 1) {
                    planButton.setAttribute('class', 'btn-gold')
                } else {
                    planButton.setAttribute('class', 'btn-silver')
                }
                cell.appendChild(planButton)
            }
            row.appendChild(cell)
        }

        // add the row to the end of the table body
        tblBody.appendChild(row)
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody)
    // appends <table> into <body>
    const grid_elem = document.getElementById('grid_id')
    grid_elem.appendChild(tbl)
    // document.body.appendChild(tbl)
}

generateTable()
