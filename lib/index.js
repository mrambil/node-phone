const PhoneModel = require('./PhoneModel');

const Phone = {
  find(id) {
    PhoneModel.find();
    return { id, name: `name${id}` };
  },
};

export default Phone;
