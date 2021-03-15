/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { getRecords } from '../../utils/api';

const AllRecords = () => {
  const [allRecords, setAllRecords] = useState([]);
  useEffect(async () => {
    console.log(await getRecords());
    const orders = await getRecords();
    setAllRecords(orders);
  }, []);
  return (
    <div>
      all records
    </div>
  );
};
export default AllRecords;
