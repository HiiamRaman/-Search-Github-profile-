// import { useEffect, useState } from "react";
// import React from 'react';
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
//         <button onClick={handleSubmit}>Search</button>
//       </div>
//       {
//         userdata!==null? < User user={userdata} /> :null
//       }
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import React from 'react';
import User from './user.jsx';

export default function Github() {
  const [username, setUserName] = useState("HiiamRaman");
  const [userdata, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch GitHub user data
  async function fetchGithubData() {
    setLoading(true);
    const resp = await fetch(`https://api.github.com/users/${username}`);
    const data = await resp.json();

    if (resp.ok) {
      setUserData(data);
    } else {
      setUserData(null); // Clear user data if the user does not exist
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchGithubData();
  }, [username]);

  // Display loading state
  if (loading) {
    return <h1>Loading data...</h1>;
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
        <button onClick={fetchGithubData}>Search</button>
      </div>

      {/* Display user data if available */}
      {userdata ? <User user={userdata} /> : <h2>User not found</h2>}
    </div>
  );
}
