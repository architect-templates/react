const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/build'));

app.listen(app.get('port'), () => {
  console.log(`Node app is running at: ${app.get('port')}`);
});
