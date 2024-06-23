const router = require("express").Require();
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

router.use("/api-docs", swaggerUI.serve);
router.use("/api-docs", swaggerUI(swaggerDocument));

module.exports = router;