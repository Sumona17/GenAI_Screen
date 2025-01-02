const con = require("../mySqlConn");


const getMessages = (req, res) => {
    const sql ="SELECT * FROM employee_management_portal.message";
    con.query(sql, (error, result) => {
        if (error) {
            res.json({error});
        } else {
            res.json({"messages": result})
        }
    });
};

const countUnreadMessages = (req, res) => {
    const sql ="SELECT count(*) as totalCount FROM employee_management_portal.message where read_status = 'false'";
    con.query(sql, (error, result) => {
        if (error) {
            res.json({error});
        } else {
            res.json({"totalCount": result[0].totalCount})
        }
    });
};

module.exports = { getMessages, countUnreadMessages }