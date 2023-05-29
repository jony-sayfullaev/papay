const mongoose = require("mongoose");
const {
  member_type_enum,
  member_status_enum,
  ordenary_enums,
} = require("../lib/config");

const memberSchema = new mongoose.Schema({
  mb_nick: {
    type: String,
    required: true,
    index: { unique: true, sparse: true },
  },
  mb_phone: {
    type: String,
    required: true,
  },
  mb_password: {
    type: String,
    required: true,
    select: false,
  },
  mb_type: {
    type: String,
    required: false,
    default: "USER",
    enum: {
      values: member_type_enum,
      message: "{VALUES} is not among permitted",
    },
  },
  mb_status: {
    type: String,
    required: false,
    default: "ACTIVE",
    enum: {
      values: member_status_enum,
      message: "{VALUES} is not among permitted",
    },
  },
  mb_address: {
    type: String,
    required: false,
  },
  mb_description: {
    type: String,
    required: false,
  },
  mb_image: {
    type: String,
    required: false,
  },
  mb_point: {
    type: Number,
    required: false,
    default: 0,
  },
  mb_top: {
    type: String,
    required: false,
    default: "N",
    enum: {
      values: ordenary_enums,
      message: "{VALUES} is not among permitted",
    },
  },
  mb_views: {
    type: Number,
    required: false,
    default: 0,
  },
  mb_like: {
    type: Number,
    required: false,
    default: 0,
  },
  mb_follow_cnt: {
    type: Number,
    required: false,
    default: 0,
  },
  mb_subscriber: {
    type: Number,
    required: false,
    default: 0,
  },
  timestamps: true,
});

module.exports = mongoose.model("Member", memberSchema);
