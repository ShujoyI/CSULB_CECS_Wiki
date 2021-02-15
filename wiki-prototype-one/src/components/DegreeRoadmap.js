import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';
import CourseNodes from './CourseNodes.js';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
const onNodeMouseEnter = (event, node) => console.log('mouse enter:', node);
const onNodeMouseMove = (event, node) => console.log('mouse move:', node);
const onNodeMouseLeave = (event, node) => console.log('mouse leave:', node);
const onNodeContextMenu = (event, node) => {
  event.preventDefault();
  console.log('context menu:', node);
};
const onNodeClick = (e, node) => alert(node.id, node);

const initialElements = [
  // 1
  {
    id: 'CECS_174',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 174' },
    position: { x: 0, y: 220 },
  },

  // 2
  {
    id: 'ENGR_361',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'ENGR 361' },
    position: { x: 0, y: 300 },
  },
  // 3
  {
    id: 'GE',
    sourcePosition: 'right',
    data: { label: 'GE' },
    position: { x: 0, y: 380 },
  },
  // 4
  {
    id: 'CS_g1',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CS Group 1 Elective' },
    position: { x: 0, y: 460 },
  },
  // 5
  {
    id: 'CS_g2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CS Group 2 Elective' },
    position: { x: 0, y: 540 },
  },
  // 6
  {
    id: 'CS_g1_g2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CS Group 1 or 2 Elective' },
    position: { x: 0, y: 620 },
  },
  // 7
  {
    id: 'CECS_228',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 228' },
    position: { x: 200, y: 140 },
  },
  // 8
  {
    id: 'CECS_274',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 274' },
    position: { x: 200, y: 220 },
  },
  {
    id: 'horizontal-7',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node 7' },
    position: { x: 1000, y: 50 },
  },
  {
    id: 'horizontal-8',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Node 8' },
    position: { x: 750, y: 300 },
  },
  {
    id: 'e_CECS_174_CECS_274',
    source: 'CECS_174',
    type: 'smoothstep',
    target: 'CECS_274',
    animated: true,
  },
  {
    id: 'horizontal-e1-3',
    source: 'horizontal-1',
    type: 'smoothstep',
    target: 'horizontal-3',
    animated: true,
  },
  {
    id: 'horizontal-e1-4',
    source: 'horizontal-2',
    type: 'smoothstep',
    target: 'horizontal-4',
    label: 'edge label',
  },
  {
    id: 'horizontal-e3-5',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-5',
    animated: true,
  },
  {
    id: 'horizontal-e3-6',
    source: 'horizontal-3',
    type: 'smoothstep',
    target: 'horizontal-6',
    animated: true,
  },
  {
    id: 'horizontal-e5-7',
    source: 'horizontal-5',
    type: 'smoothstep',
    target: 'horizontal-7',
    animated: true,
  },
  {
    id: 'horizontal-e6-8',
    source: 'horizontal-6',
    type: 'smoothstep',
    target: 'horizontal-8',
    animated: true,
  },
];
export default () => {
  const [elements, setElements] = useState(CourseNodes.elements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const changeClassName = () => {
    setElements((elms) =>
      elms.map((el) => {
        if (el.type === 'input') {
          el.className = el.className ? '' : 'dark-node';
        }
        return { ...el };
      })
    );
  };
  return (
    <div style={{ height: 800 }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onLoad={onLoad}
        selectNodesOnDrag={false}
        zoomOnScroll = {false}
        onElementClick={onNodeClick}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseMove={onNodeMouseMove}
        onNodeMouseLeave={onNodeMouseLeave}
        onNodeContextMenu={onNodeContextMenu}
      />
    </div>
  );
};