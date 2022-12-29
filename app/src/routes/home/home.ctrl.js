"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["test", "test1", "test2"],
  psword: ["1234", "12345", "123123"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인 실패",
    });
  },
};

module.exports = {
  output,
  process,
};
