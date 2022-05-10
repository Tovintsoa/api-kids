module.exports = {
    HOST : 'mysql-tsiky.alwaysdata.net',
    USER : 'tsiky',
    PWD : 'tsikynacks06',
    DB : 'tsiky_kids',
    dialect : 'mysql',

    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    } 
}