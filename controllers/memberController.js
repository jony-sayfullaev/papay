let memberController = module.exports;

memberController.signup = (req, res) => {
  try {
    console.log("POST: cont/signup");
    const data = req.body;
    console.log("body_data", data);
    res.send("done");
  } catch (err) {
    console.log(`ERROR: cont/signup`);
  }
};

memberController.login = (req, res) => {
  console.log("POST cont.login");
  res.send("Login Page");
};

memberController.logout = (req, res) => {
  console.log("GET cont.logout");
  res.send("Logout Page");
};
