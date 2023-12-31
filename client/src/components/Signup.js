import React from 'react'
import { signInWithGithub } from '../services/signin'

export default function Signup() {
  return (
    <div>
        <p>
            Add your name to the leaderboard
            <button onClick={signInWithGithub}>Signup</button>
        </p>
    </div>
  )
}
