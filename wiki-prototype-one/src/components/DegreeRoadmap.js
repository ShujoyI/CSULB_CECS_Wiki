import DagreGraph from "dagre-d3-react"

// test data for graph
let tempData = {
    nodes: [
      {
        id: "1",
        label: "<h3>Node 1</h3>",
        labelType: "html"
      },
      {
        id: "2",
        label: "<h3>Node 2</h3>",
        labelType: "html",
        config: {
                style: 'fill: #afa'
            }
      }
    ],
    links: [
      {
        source: '1',
        target: '2',
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
            nodes= {tempData.nodes}
            links= {tempData.links}
            options={{
                rankdir: 'LR',
                align: 'UL',
                ranker: 'tight-tree'
            }}
            width='500'
            height='500'
            animate={1000}
            shape='circle'
            fitBoundaries
            zoomable
            onNodeClick={e => console.log(e)}
            onRelationshipClick={e => console.log(e)}
        />
    </div>
    );
}
    
export default DegreeRoadmap