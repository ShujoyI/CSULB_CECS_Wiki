import React, { useEffect, useState } from 'react';
import ReactFlow, { removeElements, 
  Background,
  Controls,
  addEdge, 
  isNode, 
  isEdge,
  getConnectedEdges, 
  getOutgoers,
} from 'react-flow-renderer';
import dagre from 'dagre';
import { Card } from 'react-bootstrap';
import '../styles/Card.css';
import CourseNodes from './CourseNodes.js';
import '../styles/DegreeRoadmap.css';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
// const onNodeMouseEnter = (event, node) => console.log('mouse enter:', node);
// const onNodeMouseMove = (event, node) => console.log('mouse move:', node);
// const onNodeMouseLeave = (event, node) => console.log('mouse leave:', node);
const onNodeContextMenu = (event, node) => {
  event.preventDefault();
  console.log('context menu:', node);
};

/**** Using Dagre to automatically position nodes efficiently */
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const getLayoutedElements = (elements, direction = 'LR') => {
  const isVertical = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });
  elements.forEach((el) => {
    if (isNode(el)) {
      dagreGraph.setNode(el.id, { width: 150, height: 50 });
    } else {
      dagreGraph.setEdge(el.source, el.target);
    }
  });
  dagre.layout(dagreGraph);
  return elements.map((el) => {
    if (isNode(el)) {
      const nodeWithPosition = dagreGraph.node(el.id);
      el.targetPosition = isVertical ? 'left' : 'top';
      el.sourcePosition = isVertical ? 'right' : 'bottom';
      // unfortunately we need this little hack to pass a slightly different position
      // in order to notify react flow about the change
      el.position = {
        x: nodeWithPosition.x + Math.random() / 1000,
        y: nodeWithPosition.y,
      };
    }
    return el;
  });
};

const layoutedElements = getLayoutedElements(CourseNodes.elements);

export default () => {
  const [elements, setElements] = useState(layoutedElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = (e, node) => setDetails(node);

  function setDetails(courseNode) {

    const children = getOutgoers(courseNode, elements);

    for (var child of children) {

      console.log(child.id);
    }
  
  }

  return (
    <div style={{ height: 800 }}>
      <div className='courseCard'>
        <Card className='myCard'>
          <Card.Header className='cardHead'>Course Not Selected Yet</Card.Header>
              <Card.Body className='cardBody'>
                  <Card.Text className='cardText'>Select a class from the list to learn more about it.</Card.Text>
              </Card.Body>
        </Card>
      </div>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        nodesDraggable = {false}
        selectNodesOnDrag={false}
        zoomOnScroll = {false}
        onElementClick={onElementClick}
        onNodeContextMenu={onNodeContextMenu}
      >
        <Controls
        showInteractive = {false}
        />
        <Background
        variant = "dots"
        gap = {16}
        size = {1}
        color = "#02decc" 
        />
      </ReactFlow>
    </div>
  );
};