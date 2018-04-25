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
  new: (clientId, data) => (
    axios.post(`/clients/${clientId}/trainings`, data)
  ),
  all: (clientId) => (
    axios.get(`/clients/${clientId}/trainings`)
  ),
  get: (clientId, id) => (
    axios.get(`/clients/${clientId}/trainings/${id}`)
  ),
  put: (clientId, id, data) => (
    axios.put(`/clients/${clientId}/trainings/${id}`, data)
  ),
};
