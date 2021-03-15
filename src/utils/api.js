import axios from 'axios';

require('dotenv').config();

export const getRecords = async () => {
  const { data } = await axios.get('https://musicrecordsapi.azurewebsites.net/api/records', { headers: { Authorization: `Bearer ${process.env.token}` } });
  const records = data.data;
  return records;
};

export const getRecordLikes = async (id) => {
  const { data } = await axios.get(`/records/${id}/likes`);
  const likes = data.data;
  return likes;
};
