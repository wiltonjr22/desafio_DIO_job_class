
import passwordGenerator from 'password-generator';

import Queue from '../lib/Queue';

export default {
  async store(req, res) {
    const { name, email } = req.body;

    const user = {
      name,
      email,
      password: passwordGenerator(15, false),
    };

    await Queue.add('RegistrationMail', { user });

    return res.json(user);
  },
  async FindUser(req, res) {
    const { id } = req.params.id
    
    const user = {
      id
    }
    try {
      
      await Queue.add('Find_user', { user });
    
      return res.json(user);
    } catch (error) {
     
     throw new Error
    
    }
  }
};