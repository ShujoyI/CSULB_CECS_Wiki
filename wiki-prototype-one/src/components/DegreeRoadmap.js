import DagreGraph from "dagre-d3-react"

// test data for graph
let tempData = {
  nodes: [
    {
      id: "CECS_225",
      label: "<h3>CECS 225</h3>",
      labelType: "html"
    },
    {
      id: "CECS_341",
      label: "<h3>CECS 341</h3>",
      labelType: "html",
      config: {
              style: 'fill: #afa'
          }
    }
  ],
  links: [
    {
      source: 'CECS_225',
      target: 'CECS_341',
      label: 'TO',
      config: {
              arrowheadStyle: 'display: none',
      }
    },
  ]
}

function DegreeRoadmap(){
    return (
        <div>
        <DagreGraph
            nodes={1, 2, 3}
            links={links}
            options={{
                rankdir: 'LR',
                align: 'UL',
                ranker: 'tight-tree'
            }}
            width='500'
            height='500'
            animate={1000}
            shape='rect'
            fitBoundaries
            zoomable
            onNodeClick={e => console.log(e)}
            onRelationshipClick={e => console.log(e)}
        />
    </div>
    );
}
    
export default DegreeRoadmap