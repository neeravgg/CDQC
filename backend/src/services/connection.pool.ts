

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'mysql-348cb790-cdqc-test.a.aivencloud.com',
    port: 24475,
    user: 'avnadmin',
    password: 'AVNS_PFbQwWHlK6VBl-hMWyf',
    database: 'defaultdb',

});

export default pool