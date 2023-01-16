const user = require("./user.route");
const nftpark = require("./nftpark.route");
const mq = require("../RabbitMQ/rabbitmq-api");

module.exports = (app) => {
  app.post("/send_msg", mq.send_message);
  app.get("/get_msg", mq.recv_message);
  app.use("/user", user);
  app.use("/nftpark", nftpark);
};
