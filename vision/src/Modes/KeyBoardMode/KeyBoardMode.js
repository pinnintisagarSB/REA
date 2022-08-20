import React from 'react'
import './KeyBoardMode.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'
import { yellow } from '@mui/material/colors';

export const KeyBoardMode = () => {
  return (
    <div className='keyboard'>
      <div className='back'>
        <Link to="/">
        <ArrowBackIcon sx={{fontSize: "4rem", color: yellow[500]}}/>
        </Link>
      </div>
      <div className='opt'>
      <Link className="box" to="/LearnTypingMode">
        <div className='mode'>
            Learn Typing
        </div>
        </Link>
        <Link className='box' to="/TestTypingMode">
        <div className='mode'>
            Test Mode
        </div>
        </Link>
        </div>
    </div>
  )
}
