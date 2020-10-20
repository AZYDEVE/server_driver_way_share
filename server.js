const express = require("express");

const app = express();


  /*example */
app.get("", (req, res) => {

  const customer = [
    { id: 1, firstName: "John", lastName: "doh" },
    { id: 2, firstName: "Frank", lastName: "Cool" },
    { id: 3, firstName: "Mary", lastName: "Anne" },
  ];
  res.json(customer);
});

const port = 5000;

app.listen(port, () => console.log(`server listening at port ${port}`));
