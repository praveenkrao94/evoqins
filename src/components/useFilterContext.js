import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FilterContext = createContext();

export function FilterProvider({ children, initialPageNumber }) {
  const [filterData, setFilterData] = useState({
    page_num: initialPageNumber || 1, // Use the initialPageNumber prop or default to 1
    filter_id: null,
    segment_id: null,
    price_type: null,
    rating_by: null,
    application_type: null,
    min_price_limit: 0,
    max_price_limit: 29500000,
    min_investment_limit: 0,
    max_investment_limit: 100000000,
    sort_by: null,
    searchQuery: '',
  });

  const [segments, setSegments] = useState([]);

  useEffect(() => {
    fetchSegments();
  }, []);

  const fetchSegments = async () => {
    const url =
      'https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/filter';
    const headers = {
      'Content-Type': 'application/json',
      'Access-Token': 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ', // Replace with your actual access token
    };

    try {
      const response = await axios.post(url, filterData, { headers });
      setSegments(response.data.data.segments);
    } catch (error) {
      console.error('Error fetching segments:', error);
    }
  };

  return (
    <FilterContext.Provider value={{ filterData, setFilterData, segments }}>
      {children}
    </FilterContext.Provider>
  );
}
