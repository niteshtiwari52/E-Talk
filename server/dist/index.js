"use strict";

var _express = _interopRequireDefault(require("express"));
var _data = require("./data/data");
var _db = _interopRequireDefault(require("./config/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const dotenv = require("dotenv");
dotenv.config();
(0, _db.default)();
const app = (0, _express.default)();
app.use(_express.default.json());
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to E-Talk Server"
  });
});
app.get('/api/chat', (req, res) => {
  res.send(_data.chats);
});
app.get('/api/chat/:id', (req, res) => {
  console.log(req.params.id);
  const singleChat = _data.chats.find(c => c._id === req.params.id);
  res.send(singleChat);
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is Running on PORT: http://localhost:${PORT}`);
});