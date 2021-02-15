import React from "react"
import DagreGraph from "dagre-d3-react"

export const CourseNodes = ({
elements: [
  
  // 1
  {
    id: 'CECS_174',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 174' },
    position: { x: 0, y: 720 },
  },

  // 2
  {
    id: 'ENGR_361',
    sourcePosition: 'right',
    data: { label: 'ENGR 361' },
    position: { x: 0, y: 800 },
  },
  // 3
  {
    id: 'GE',
    sourcePosition: 'right',
    data: { label: 'GE' },
    position: { x: 0, y: 880 },
  },
  // 4
  {
    id: 'CS_g1',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CS Group 1 Elective' },
    position: { x: 0, y: 960 },
  },
  // 5
  {
    id: 'CS_g2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CS Group 2 Elective' },
    position: { x: 0, y: 1020 },
  },
  // 6
  {
    id: 'CS_g1_g2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CS Group 1 or 2 Elective' },
    position: { x: 0, y: 1080 },
  },
  // 7
  {
    id: 'CECS_228',
    sourcePosition: 'right',
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
  // 9
  {
    id: 'CECS_277',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 277' },
    position: { x: 200, y: 300 },
  },
  // 10
  {
    id: 'CECS_225',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 225' },
    position: { x: 200, y: 380 },
  },
  // 11
  {
    id: 'CECS_328',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 328' },
    position: { x: 400, y: 60 },
  },
  // 12
  {
    id: 'CECS_229',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 229' },
    position: { x: 400, y: 140 },
  },
  // 13
  {
    id: 'CECS_282',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 282' },
    position: { x: 400, y: 220 },
  },
  // 14
  {
    id: 'CECS_341',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 341' },
    position: { x: 400, y: 380 },
  },
  // 15
  {
    id: 'CECS_329',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 329' },
    position: { x: 600, y: 60 },
  },
  // 16
  {
    id: 'CECS_342',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 342' },
    position: { x: 600, y: 140 },
  },
  // 17
  {
    id: 'CECS_378',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 378' },
    position: { x: 600, y: 220 },
  },
  // 18
  {
    id: 'CECS_323',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 323' },
    position: { x: 600, y: 300 },
  },
  // 19
  {
    id: 'CECS_326',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 326' },
    position: { x: 600, y: 380 },
  },
  // 20
  {
    id: 'EE_381',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'EE 381' },
    position: { x: 600, y: 460 },
  },
  // 21
  {
    id: 'CECS_350',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 350' },
    position: { x: 600, y: 540 },
  },
  // 22
  {
    id: 'CECS_343',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 343' },
    position: { x: 600, y: 600 },
  },
  // 23
  {
    id: 'CECS_327',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 327' },
    position: { x: 800, y: 600 },
  },
  // 24
  {
    id: 'CECS_491A',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 491A' },
    position: { x: 800, y: 720 },
  },
  // 25
  {
    id: 'CECS_491B',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 491B' },
    position: { x: 1000, y: 720 },
  },
   

    /**********************Course Links*************************/
    {
      id: 'e_CECS_174_CECS_274',
      source: 'CECS_174',
      type: 'smoothstep',
      target: 'CECS_274',
      animated: true,
    },
    {
      id: 'e_CECS_174_CECS_228',
      source: 'CECS_174',
      type: 'smoothstep',
      target: 'CECS_228',
      animated: true,
    },
    
  ],

  
})

export default CourseNodes