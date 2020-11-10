import DagreGraph from "dagre-d3-react"

ReactDOM.render(
    <div>
        <DagreGraph
            nodes={nodes}
            links={links}
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
    </div>,
    container
)