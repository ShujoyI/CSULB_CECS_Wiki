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
      id: "1",
      label: "<h3>CECS 225</h3>",
      labelType: "html",
    },
    {
      id: "2",
      label: "<h3>CECS 228</h3>",
      labelType: "html",
    },
    {
      id: "3",
      label: "<h3>CECS 229</h3>",
      labelType: "html",
    },
    {
      id: "4",
      label: "<h3>CECS 274</h3>",
      labelType: "html",
    },
    {
      id: "5",
      label: "<h3>CECS 277</h3>",
      labelType: "html",
    },
    {
      id: "6",
      label: "<h3>CECS 328</h3>",
      labelType: "html",
    },
    {
      id: "7",
      label: "<h3>CECS 282</h3>",
      labelType: "html"
    },
    {
      id: "8",
      label: "<h3>CECS 341</h3>",
      labelType: "html"
    }, 
    {
      id: "9",
      label: "<h3>CECS 329</h3>",
      labelType: "html"
    },
    {
      id: "10",
      label: "<h3>CECS 342</h3>",
      labelType: "html"
    },
    {
      id: "11",
      label: "<h3>ENGR 350</h3>",
      labelType: "html"
    },
    {
      id: "12",
      label: "<h3>CECS 378</h3>",
      labelType: "html"
    },
    {
      id: "13",
      label: "<h3>ENGR 361</h3>",
      labelType: "html"
    },
    {
      id: "14",
      label: "<h3>ENGR 323</h3>",
      labelType: "html"
    },
    {
      id: "15",
      label: "<h3>ENGR 327</h3>",
      labelType: "html"
    },
    {
      id: "16",
      label: "<h3>ENGR 343</h3>",
      labelType: "html"
    },
  ],

  links: [
    {
      source: '1',
      target: '8',
    },
    {
      source: '4',
      target: '7',
    },
    {
      source: '4',
      target: '6',
    },
    {
      source: '6',
      target: '9',
    },
    {
      source: '2',
      target: '3',
    }
  ]

}
function DegreeRoadmap(){
  return (
    <div>
      {/* <h1>Course Roadmap</h1>
      <figure className='roadMap' data-category="Road Map">
          <img src="images/img-roadmap.jpg" alt='Travel Image' className="roadMapImage"/>
        </figure> */}
        <DagreGraph
          nodes={tempData.nodes}
          links={tempData.links}
          config={{
              rankdir: 'LR',
              align: 'DR',
              ranker: 'tight-tree'
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
      <CourseCard
      />
      
    </div>
  );
}

export default DegreeRoadmap