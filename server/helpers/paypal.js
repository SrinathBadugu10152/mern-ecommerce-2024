const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVglfKEklQdcJlP2VmMtFKgghmx62ea8TWL85PEc9gnkyyJ5R5x2H05FVDJKrfjvGFJUp95tGFiIOjxv",
  client_secret: "EJsXvCr___HQsH4mGBLPuV0vCYS5-wRRC9jC4e_QhS1O8EPx2G1EBL3TYkg8HdFNNz8SJvMVWASjWkzp",
});

module.exports = paypal;
