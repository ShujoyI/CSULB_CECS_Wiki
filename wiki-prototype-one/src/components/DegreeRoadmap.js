import React from "react"
import DagreGraph from "dagre-d3-react"
import './DegreeRoadmap.css'
// import PREREQS from "./Prereqs.json"
// import CourseCard from "./CourseCard"

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
      label: "<h3>CECS 323</h3>",
      labelType: "html"
    },
    {
      id: "15",
      label: "<h3>CECS 327</h3>",
      labelType: "html"
    },
    {
      id: "16",
      label: "<h3>CECS 343</h3>",
      labelType: "html"
    },
  ],

  links: [
    {
      // CECS 225 -> CECS 341
      source: '1',
      target: '8',
    },
    {
      // CECS 274 -> CECS 282
      source: '4',
      target: '7',
    },
    {
      // CECS 274 -> CECS 328
      source: '4',
      target: '6',
    },
    {
      // CECS 328 -> CECS 329
      source: '6',
      target: '9',
    },
    {
      // CECS 228 -> CECS 229
      source: '2',
      target: '3',
    },
    {
      // CECS 328 -> CECS 342
      source: '6',
      target: '10',
    },
    {
      // CECS 228 -> CECS 328
      source: '2',
      target: '6',
    },
    {
      // CECS 277 -> CECS 282
      source: '5',
      target: '7',
    },
    {
      // CECS 282 -> CECS 343
      source: '7',
      target: '16',
    },
    {
      // CECS 228 -> CECS 323
      source: '7',
      target: '14',
    },
    {
      // CECS 282 -> CECS 323
      source: '2',
      target: '14',
    },
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
      <CourseCard
      />
      
    </div>
  );
}

export default DegreeRoadmap