import React, { useEffect, useState } from 'react';
import './compTest.scss';
import { ApiServices } from '../../Services/apiService';
import { Divider, message, Spin } from 'antd';

function Sidemenu() {
  const [apiData, setApiData] = useState({
    name: '',
    emailID: '',
  });
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = () => {
    setShowLoader(true);
    ApiServices.getDetails()
      .then((response) => {
        let email;
        let name;
        console.log(response.data);
        response.data.results.map((item) => {
          email = item.email;
          name = item.name.first + ' ' + item.name.last;
        });
        setApiData({
          ...apiData,
          name: name,
          emailID: email,
        });
        setShowLoader(false);
      })
      .catch((err) => {
        console.log(err);
        message.error('Failed to Load Data');
        setShowLoader(false);
      });
  };

  return (
    <div className="main-div">
      <h1 className="header">Details</h1>
      <Divider />
      <div className="details-div">
        {showLoader ? (
          <Spin />
        ) : (
          <>
            <p className="user-name">{apiData?.name}</p>
            <p className="user-email">{apiData?.emailID}</p>
          </>
        )}
      </div>
      <Divider />

      <button className="reload-btn" onClick={apiCall}>
        Reload
      </button>
    </div>
  );
}

export default Sidemenu;
