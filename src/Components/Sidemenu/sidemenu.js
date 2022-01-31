// import React from 'react';
// import {useSelector , useDispatch} from 'react-redux';
// import {incrementCounter , decrementCounter , toggleState } from '../../Actions/counter';
// import { Button } from 'antd';

// function Main(){

//     const counter = useSelector(state => {
//         return state.counter;
//       })
//       const tog = useSelector(state => {
//         return state.toggle;
//       })
//       let dispatch = useDispatch();

//     return(
//      <div className={!tog ? "App" : "darkmode"}>
//         <h1 className={!tog ? "App" : "darkmode"} >Hi</h1>
//       <h2 className={!tog ? "App" : "darkmode"}>Counter : {counter}</h2>
//       <Button type="primary" onClick={() => dispatch(incrementCounter())}>Increment</Button>
//       <Button type="primary" danger onClick={() => dispatch(decrementCounter())}>Decrement</Button>
//       <Button type="primary" onClick={() => dispatch(toggleState())}>Change Theme</Button>
//    </div>
//     )
// }
// export default Main;

import React, { useEffect, useState } from 'react';
import './sidemenu.scss';
import { Menu } from 'antd';
import { ApiServices } from '../../Services/apiService';

const { SubMenu } = Menu;

function Sidemenu() {
  const handleClick = (e) => {
    console.log('click ', e);
  };

  const [iframeUrl, setIframeUrl] = useState();

  useEffect(() => {
    ApiServices.getIframe()
      .then((response) => {
        console.log(response.data.data);
        setIframeUrl(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <iframe src={iframeUrl} className='iframe_div' />
      <h1>{iframeUrl ? 'Iframe Content' : 'Iframe Loading...'}</h1>
    </>
  );
}

export default Sidemenu;
