import React from 'react'
import {useEffect,useState} from 'react'
import supabase from '../supabase/supabaseClient';
import retrieveContributionData from "../services/github"
import axios from "axios"

export default function UserTable() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
   async function fetchData(){
    let result = await retrieveContributionData("Asaadziad");
    console.log(result);
   }
   fetchData();

  },[]);
  return (
    <table id="leaderboard">
        <tbody>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Profile Picture</th>
          <th>Streak Count</th>
          <th>Github Profile</th>
        </tr>
        {userData && userData.map((user) => (
          <tr>
          <td>{user.id}</td>
          <td>{user.userName}</td>
          <td>{user.profileImage}</td>
          <td>{user.currentStreak}</td>
          <td>{user.githubProfile}</td>
          </tr>
        ))}
        
        
      </tbody>
    </table>
  )
}
