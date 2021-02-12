import React from "react"
import DagreGraph from "dagre-d3-react"
import CourseNodes from './CourseNodes.js'
import '../styles/DegreeRoadmap.css'
import Course from "./Course.js"
// import PREREQS from "./Prereqs.json"
// import CourseCard from "./CourseCard"

function DegreeRoadmap(){
  return (
    <div>
        <DagreGraph
          nodes={CourseNodes.nodes}
          links={CourseNodes.links}
          config={{
              rankdir: 'LR',
              align: 'DL',
              ranker: 'tight-tree',
              edgesep: 70,
              ranksep: 200,
          }}
          width='900'
          height='900'
          animate={1000}
          shape='rect'
          fitBoundaries='true'
          //zoomable
          // onNodeClick={e => alert("I was clicked\n" + tempData.nodes[0].id)}
          onRelationshipClick={e => console.log(e)}
      />
      
    </div>
  );
}

export default DegreeRoadmap