//Use This code if you want to fetch data automatically for this to happen we use UseEffect hook


//   import { useEffect, useState } from "react";
// import React from 'react'
// import User from './user.jsx'
// export default function Github() {
//   const [username, setUserName] = useState("HiiamRaman");
//   const [userdata,setUserData]=useState(null);
//   const[loading,setLoading] = useState(false)
//   async function fetchgithubData() {
//     setLoading(true)
//     const resp = await fetch(`https://api.github.com/users/${username}`);
//   const data = await resp.json()
  
//   console.log(data)


//   if (data){
//     setUserData(data);
//     setLoading(false)

//   }

//   }
  

//   function handleSubmit() {
//     fetchgithubData();
//   }
//   useEffect(() => {
//     fetchgithubData();
//   }, [username]);
//   if (loading){
//      return <h1>Please Wait Data is Loading</h1>
//   }

//   return (
//     <div>
//       <div>
//         <input
//           name="Search by user name"
//           type="text"
//           placeholder="Search github profile"
//           value={username}
//           onChange={(event) =>setUserName(event.target.value)
//           }
//         />
//         <button onClick={handleSubmit}>Search here </button>
//       </div>
//       {
//         userdata!==null? < User user={userdata} /> :null
//       }
//     </div>
//   );
// }
   
import { useState, useEffect } from "react";
import React from 'react';
import User from './user.jsx';

export default function Github() {
  const [username, setUserName] = useState("HiiamRaman");
  const [userdata, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  
  async function fetchgithubData() {
    setLoading(true);
    const resp = await fetch(`https://api.github.com/users/${username}`);
    const data = await resp.json();

    console.log(data);

    if (data) {
      setUserData(data);
      setLoading(false);
    }
  }

  // Trigger API call manually when button is clicked
  function handleSubmit() {
    fetchgithubData();
  }

  if (loading) {
    return <h1>Please Wait, Data is Loading...</h1>;
  }

  return (
    <div>
      <div>
        <input
          name="Search by user name"
          type="text"
          placeholder="Search GitHub profile"
          value={username}
          onChange={(event) => setUserName(event.target.value)} 
        />
        <button onClick={handleSubmit}>Search here</button>
      </div>
      {userdata !== null ? <User user={userdata} /> : null}
    </div>
  );
}
