
const bcrypt = require("bcryptjs");





const hasGeneratePass = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

const compareHashPass =  async (pass,userHashPass) =>{

    const passCheck =  await bcrypt.compare(pass, userHashPass);
    return passCheck;
  } 

module.exports = { hasGeneratePass,compareHashPass }