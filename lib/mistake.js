const { model } = require("mongoose");

class Definer {
  /* general errors */
  static general_err1 = "att: something went wrong!";
  static general_err2 = "att: there is no data with that params!";
  static general_err3 = "att: file upload err!";

  /* member auth related  errors*/
  static auth_err1 = "att: mongodb validation failed!";
  static auth_err3 = "att: no member with that member nick: failed!";
  static auth_err4 = "att: your credentials does not match!";

  /* product related errors */
  static product_err1 = "att: product creation failed";
}

module.exports = Definer;
