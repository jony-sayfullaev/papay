const { Mongoose, default: mongoose } = require("mongoose");

exports.member_type_enum = ["USER", "ADMIN", "PEDAL", "RESTAURANT"];
exports.member_status_enum = ["ONPAUSE", "ACTIVE", "DELETED"];
exports.ordenary_enums = ["Y", "N"];
exports.product_collection_enums = ["dish", "salad", "dessert", "drink", "etc"];
exports.product_status_enums = ["PAUSED", "PROCESS", "DELETED"];
exports.product_size_enums = ["small", "normal", "large", "set"];
exports.product_volume_enums = [0.5, 1, 1.2, 1.5, 2];

/****************************
 * MONGODB RELATED COMMANDS *
 ************************** */

exports.shapeIntoMongooseObjectId = (target) => {
  if (typeof taget === "string") {
    return new mongoose.Types.ObjectId(target);
  } else return target;
};
