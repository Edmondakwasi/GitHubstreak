import React from 'react'
import {useEffect,useState} from 'react'
import supabase from '../supabase/supabaseClient';
import retrieveContributionData, { calculateStreak } from "../services/github"

export default function UserTable() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
   async function fetchData(){
    let {data,error} = await supabase.from('Users').select('userName');
    let users_arr = [];
    if(data){
      for(const user in data){
        let result = await retrieveContributionData(data[user].userName);
        let streak = await calculateStreak(result);
        const current_user = {
          userName: data[user].userName,
          currentStreak: streak.currentStreak.days,
        }
        users_arr.push(current_user);
        users_arr.sort((a,b) => {
          return a.currentStreak < b.currentStreak;
        });
      }
    }
    if(error) {
      console.log(error);
    }  
    
    setUserData(users_arr);
   }
   
   fetchData();

  },[]);
  return (
    <table id="leaderboard">
        <tbody>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Streak Count</th>
          <th>Github Profile</th>
        </tr>
        {userData && userData.map((user,i) => (
          <tr key={i}>
          <td>{i + 1}</td>
          <td>{user.userName}</td>
          <td>{user.currentStreak}</td>
          <td><a href={`https://github.com/${user.userName}`}>Link</a></td>
          </tr>
        ))}
        
        
      </tbody>
    </table>
  )
}
