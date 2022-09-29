import React from 'react'

import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Groups2Icon from '@mui/icons-material/Groups2';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import wordCloud from '../../word-cloud.png'

import './HomeDashboard.css'
import MatchModal from '../MatchModal/MatchModal';
import DoughnutChart from '../DoughnutChart/DoughnutChart';

function HomeDashboard() {
  return (
    <div className='HomeDashboardParent'>
        <div className='stats-wrapper'>
            <div className='container'>
                <i><PanoramaFishEyeIcon sx={{ fontSize: 50 }}/></i>
                <span className='num' data-val='400'>3.7 / 5</span>
                <span className='text'>Circle Average</span>
            </div>

            <div className='container'>
                <i><Groups2Icon sx={{ fontSize: 70 }}/></i>
                <span className='num' data-val='400'>87%</span>
                <span className='text'>Team Percentile</span>
            </div>

            <div className='container'>
                <i><StarBorderIcon sx={{ fontSize: 60 }}/></i>
                <span className='num' data-val='400'>4 / 5</span>
                <span className='text'>Personal Rating</span>
            </div>
        </div>

        <div className='match-wrapper'>
            <div className='container'>
                <i><NotificationsActiveIcon sx={{ fontSize: 40 }}/></i>
                <span className='text'>
                    <span className='US'>US1665385&nbsp;</span> on team <span className='team-name'>&nbsp;MostlyCloudy&nbsp;</span> overlaps with your work!
                </span>
                <MatchModal/>
            </div>
        </div>

        <div className='trending-wrapper'>
            <div className='container'>
                <DoughnutChart/>
            </div>

            <div className='container'>
                <DoughnutChart/>
            </div>

            <div className='container'>
                <img src={wordCloud} alt="Logo"></img>
            </div>
        </div>
    </div>
  )
}

export default HomeDashboard