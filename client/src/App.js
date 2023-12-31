import React from 'react'
import {useState,useEffect } from 'react'
import supabase from './supabase/supabaseClient'
import userTable from './components/UserTable';
import UserTable from './components/UserTable';
import Header from './components/Header';
import Signup from './components/Signup';

export default function App() {
  return (
    <main>
    <Header/>
    <Signup />
    <UserTable/>
    </main>
  )
}
