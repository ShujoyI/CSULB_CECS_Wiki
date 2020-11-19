import React from "react"
import DagreGraph from "dagre-d3-react"
import './DegreeRoadmap.css'
// import PREREQS from "./Prereqs.json"
import CourseCard from "./CourseCard"

// let nodes = []
// let temp = [1,2,3]
// PREREQS.array.forEach(element => {
//   console.log(element)
// });

// test data for graph
let tempData = {
  nodes: [
    
    {
      id: "CECS_225",
      label: "<h3>CECS 225</h3>",
      labelType: "html",
    },
    {
      id: "CECS_229",
      label: "<h3>CECS 229</h3>",
      labelType: "html",
    },
    {
      id: "CECS_341",
      label: "<h3>CECS 341</h3>",
      labelType: "html",
    }, 
    {
      id: "CECS_326",
      label: "<h3>CECS 326</h3>",
      labelType: "html"
    },
    {
      id: "CECS_378",
      label: "<h3>CECS 378</h3>",
      labelType: "html"
    },
  ],

  links: [
    {
      source: 'CECS_225',
      target: 'CECS_341',
    },
    {
      source: 'CECS_225',
      target: 'CECS_229',
    },
    {
      source: 'CECS_341',
      target: 'CECS_326',
    },
    {
      source: 'CECS_326',
      target: 'CECS_378',
    }
  ]

}
function DegreeRoadmap(){
  return (
    <div>
      <h1>Course Roadmap</h1>
      <figure className='roadMap' data-category="Road Map">
        <img src="images/img-roadmap.jpg" alt='Travel Image' className="roadMapImage"/>
      </figure>
      {/* <DagreGraph
          nodes={tempData.nodes}
          links={tempData.links}
          options={{
              rankdir: 'TB',
              align: 'UR',
              ranker: 'tight-tree'
          }}
          width='200'
          height='500'
          animate={1000}
          shape='rect'
          fitBoundaries='true'
          //zoomable
          // onNodeClick={e => alert("I was clicked\n" + tempData.nodes[0].id)}
          onRelationshipClick={e => console.log(e)}
      />
      <CourseCard
      /> */}
    </div>
  );
}

export default DegreeRoadmap