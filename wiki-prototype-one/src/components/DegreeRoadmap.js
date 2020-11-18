import React from "react"
import DagreGraph from "dagre-d3-react"
import './DegreeRoadmap.css'
import PREREQS from "./Prereqs.json"

let nodes = []
let temp = [1,2,3]
PREREQS.array.forEach(element => {
  console.log(element)
});

// test data for graph
let tempData = {
  // nodes: [
    
  //   {
  //     id: "CECS_225",
  //     label: "<h3>CECS 225</h3>",
  //     labelType: "html"
  //   },
  //   {
  //     id: "CECS_341",
  //     label: "<h3>CECS 341</h3>",
  //     labelType: "html",
  //     config: {
  //             style: 'fill: #afa'
  //         }
  //   }, 
  //   {
  //     id: "3",
  //     label: "<h3>CECS 326</h3>",
  //     labelType: "html"
  //   },
  // ],
  links: [
    {
      source: 'CECS_225',
      target: 'CECS_341',
    },
    {
      source: 'CECS_341',
      target: '3',
    }
  ]

}
function DegreeRoadmap(){
    return (
        <div>
        <DagreGraph
            nodes={nodes}
            links={tempData.links}
            options={{
                rankdir: 'RL',
                align: 'UL',
                ranker: 'tight-tree'
            }}
            width='500'
            height='500'
            animate={1000}
            shape='rect'
            fitBoundaries
            //zoomable
            onNodeClick={e => console.log(e)}
            onRelationshipClick={e => console.log(e)}
        />
    </div>
    );
}
    
export default DegreeRoadmap