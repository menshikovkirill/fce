import mysql from 'mysql';

export const connection = mysql.createConnection({
    socketPath: "/var/run/mysqld/mysqld.sock",
    user: "c46622_fce_sait_na4u_ru",
    password: "ToTtoWofdusah87", 
    database: 'c46622_fce_sait_na4u_ru'
});

export const sendResponse = (res, data) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.json(data);
}

export const selectQuery = (req, res, table, condition) => {
    connection.connect(err => {});

    const select = `SELECT * FROM ${table}${condition ? " WHERE " + condition : ""}`;
    connection.query(select, (err, data, results) => {
        sendResponse(res, data);
    });
}