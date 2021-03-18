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
import Course from './Course';
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
  const [courseNum, setCourseNum] = useState("");
  const [courseDes, setCourseDes] = useState("");
  const [courseSucc, setCourseSucc] = useState([]);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementClick = (e, node) => setDetails(node);

  function setDetails(courseNode) {

    setCourseNum(courseNode.data.label);
    const children = getOutgoers(courseNode, elements);

    let courses = [];

    for (var child of children) {   
       
      courses.push(child.data.label);
    }

    setCourseSucc(courses);
    highlightSuccessors(courseNode, courses);
  }


  function highlightSuccessors(clickedNode, courses) {

    setElements((els) =>
      els.map((e) => {

        // check if element is a node in "successors"
        if (isNode(e) && courses.includes(e.data.label)) {

          e.style = {backgroundColor: 'yellow'};
        }

        else if (isNode(e) && !(courses.includes(e.data.label))) {

          e.style = {backgroundColor: ''};
        }

        // check if element is an edge that starts from the clicked node
        else if (isEdge(e) && (e.source == clickedNode.id)) {

          e.animated = false;
          e.style = {stroke: 'purple'};
        }

        else if (isEdge(e) && (e.source != clickedNode.id)) {

          e.animated = true;
          e.style = {stroke: ''};
        }

        return e;
      })
    )}

  return (
    <div style={{ height: 800 }}>
      <div className='courseCard'>
        <Course className="selectedCourse" courseNumber={courseNum} courseDescription={courseDes} successors={courseSucc}/>
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