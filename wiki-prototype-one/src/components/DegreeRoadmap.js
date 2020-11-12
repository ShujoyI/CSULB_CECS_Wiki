import DagreGraph from "dagre-d3-react"

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