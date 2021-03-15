import axios from 'axios';

require('dotenv').config();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkODRmYjQzZC00MjAxLTQ2NjktYjIzZS1mOTFlNWY0YTIyODQiLCJuYW1lIjoiU3Jpc2h0aSIsInJvbGUiOjAsInN1YmplY3QiOiJUZWNoIFVuaXYgMjAyMSIsImVhc3Rlcl9lZ2ciOiJHb29kIGx1Y2shIiwiYXVkIjoibXVzaWNyZWNvcmRzLnRlY2h1bml2LmNvbSIsIm5iZiI6MTYxNTc4NDU0MCwiZXhwIjoxNjE4Mzc2NTQwLCJpYXQiOjE2MTU3ODQ1NDAsImlzcyI6Ik11c2ljIFJlY29yZHMifQ.vSvQTgLBB5Ft_UemJCGpQqSDFR3kR_P9cChu9JOuD0I';
export const getRecordLikes = async (id) => {
  const { data } = await axios.get(`/records/${id}/likes`, { headers: { Authorization: `Bearer ${token}` } });
  const likes = data.data;
  return likes;
};

export const getRecords = async () => {
  const { data } = await axios.get('/records', { headers: { Authorization: `Bearer ${token}` } });
  const records = data.data;
  return records;
};

export const getRecordWithLikes = async () => {
  const { data } = await axios.get('/records', { headers: { Authorization: `Bearer ${token}` } });
  const records = data.data;
  const finalRes = [];
  records.forEach(async (record) => {
    const { id } = record;
    let like = await axios.get(`/records/${id}/likes`, { headers: { Authorization: `Bearer ${token}` } });
    like = like.data.data;
    const newRecord = { ...record, ...like };

    finalRes.push(newRecord);
  });
  console.log(finalRes);
  return finalRes;
};
