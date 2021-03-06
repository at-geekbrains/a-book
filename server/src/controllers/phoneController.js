const pool = require('../configs/configDB');
const table = `phones`;

class Phone  {
    constructor(){
        this.id = 0,
        this.userId = 0,
        this.contactId = 0,
        this.phone = ''        
    }

    get(page = 1, limit = 1, userId, contactId){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);                
                const offset = (page-1)*limit;
                const sqlAll = `select * from  ${table} where userId = ? and contactId = ?;`;
                const sqlPage = `select * from ${table} limit ?,? where userId = ? and contactId = ?;`;                
                if (limit = 0) {
                    const data = [userId, contactId];
                    connection.query(sqlAll, data,(err, result) => {
                        if (err) return reject(err);
                        connection.release();
                        resolve(result);
                    });
                } else {
                    const data = [offset, limit, userId, contactId];
                    connection.query(sqlPage, data, (err, result) => {
                        if (err) return reject(err);
                        connection.release();
                        resolve(result);
                    });
                }
            })
        })
    };

    details(id){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                const sql = `select * from ${table} where id = ?;`;
                const data = [id];
                connection.query(sql,data,(err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };

    add(phone){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                sql = `insert into ${table} set ?;`;
                data = [phone];
                connection.query(sql, data, (err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };

    update(id,phone){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                const sql = `update ${table} set ? where id = ?;`;
                const data = [phone,id];
                connection.query(sql, data,(err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };

    delete(id){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) return reject(err);
                const sql = `delete from ${table} where id = ?;`;
                const data = [id];
                connection.query(sql,data, (err, result) => {
                    if (err) return reject(err);
                    connection.release();
                    resolve(result);
                });
            })
        })
    };
};

module.exports = Phone;