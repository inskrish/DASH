var config = require("./dbconfig");
const sql = require("mssql");

async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from leaveapp_100");
        console.log(products);
        return products.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function getOrder(orderId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool
            .request()
            .input("input_parameter", sql.NVarChar, orderId)
            .query("SELECT * from leaveapp_100 where id = @input_parameter");
        return product.recordsets;
    } catch (error) {
        console.log(error);
    }
}

async function addOrder(order) {
    try {
        let pool = await sql.connect(config);
        let insertProduct = await pool
            .request()
            .input("id", sql.NVarChar, order.id)
            .input("name", sql.NVarChar, order.name)
            .query("INSERT INTO table1 VALUES (@id,@name);");
        return insertProduct.recordsets;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getOrders: getOrders,
    getOrder: getOrder,
    addOrder: addOrder,
};
