import axios from 'config/axios';

export const clients = {
  new: (data) => (
    axios.post('/clients', data)
  ),
  get: (id) => (
    axios.get(`/clients/${id}`)
  ),
  put: (id, data) => (
    axios.put(`/clients/${id}`, data)
  ),
};

export const trainings = {
  new: (client_id, data) => (
    axios.post(`/clients/${client_id}/trainings`, data)
  ),
  all: (client_id) => (
    axios.get(`/clients/${client_id}/trainings`)
  ),
  get: (client_id, id) => (
    axios.get(`/clients/${client_id}/trainings/${id}`)
  ),
  put: (client_id, id, data) => (
    axios.put(`/clients/${client_id}/trainings/${id}`, data)
  ),
};
