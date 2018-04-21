import axios from 'config/axios';

export const clients = {
  new: (data) => (
    axios.post('/clients', data)
  ),
};