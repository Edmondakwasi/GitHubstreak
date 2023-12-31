import React from 'react'
import {useState,useEffect } from 'react'
import supabase from './supabase/supabaseClient'

export default function App() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {  
    async function fetchData() {
      let { data, error } = await supabase
      .from('Users')
      .select();
      
      if(error){
        console.log(error);
      }

      if(data) {
        setUserData(data);
      }
    }
    fetchData();
  },[]);
  return (
    <div>
     {userData && userData.map((user) => (
        <p>{user.userName}</p>
      )) }
    </div>
  )
}
