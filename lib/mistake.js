const { model } = require("mongoose");

class Definer {
  /* member auth related */
  static auth_err1 = "att: mongodb validation failed";
  static auth_err3 = "att: no member with that member nick: failed";
  static auth_err4 = "att: your credentials does not match";
}

module.exports = Definer;
