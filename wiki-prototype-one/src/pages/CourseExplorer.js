import React from 'react'
import '../App.css'
import '../components/DegreeRoadmap'
import DegreeRoadmap from '../components/DegreeRoadmap';

export default function CourseExplorer() {
    return ( 
        <div>
            <h1 className='courseExplorer'> Course Explorer</h1>
            <DegreeRoadmap/>
        </div>
    )

    
}