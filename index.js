'use strict';

const express = require('express');
const avatarService = require('./getAvatars');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/:username', async (req, res) => {
  let avatarServiceClass = new avatarService;
  console.log(req.params.username);
  let avatar = await avatarServiceClass.getAvatar(req.params.username);
  res.send(avatar);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);