import { connection } from "./utils.mjs";

export function deleteWordById (req, res) {
    res.header({"Access-Control-Allow-Origin": "*"});
    connection.connect(err => {});

    connection.query(`DELETE FROM dictionary WHERE id=${req.params.id}`, (err, data, results) => {
        res.send({"status": "ok"});
    });
}