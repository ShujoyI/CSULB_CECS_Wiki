const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const CourseNodes = ({
elements: [
  
  // 1
  {
    id: 'CECS_174',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 174' },
    position,
  },

  // 2
  {
    id: 'ENGR_361',
    sourcePosition: 'right',
    data: { label: 'ENGR 361' },
    position,
  },
  // 3
  {
    id: 'GE',
    sourcePosition: 'right',
    data: { label: 'GE' },
    position,
  },
  // 4
  {
    id: 'CS_g1',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CS Group 1 Elective' },
    position,
  },
  // 5
  {
    id: 'CS_g2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CS Group 2 Elective' },
    position,
  },
  // 6
  {
    id: 'CS_g1_g2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CS Group 1 or 2 Elective' },
    position,
  },
  // 7
  {
    id: 'CECS_228',
    sourcePosition: 'right',
    data: { label: 'CECS 228' },
    position,
  },
  // 8
  {
    id: 'CECS_274',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 274' },
    position,
  },
  // 9
  {
    id: 'CECS_277',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 277' },
    position,
  },
  // 10
  {
    id: 'CECS_225',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 225' },
    position,
  },
  // 11
  {
    id: 'CECS_328',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 328' },
    position,
  },
  // 12
  {
    id: 'CECS_229',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 229' },
    position,
  },
  // 13
  {
    id: 'CECS_282',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 282' },
    position,
  },
  // 14
  {
    id: 'CECS_341',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 341' },
    position,
  },
  // 15
  {
    id: 'CECS_329',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 329' },
    position,
  },
  // 16
  {
    id: 'CECS_342',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 342' },
    position,
  },
  // 17
  {
    id: 'CECS_378',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 378' },
    position,
  },
  // 18
  {
    id: 'CECS_323',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 323' },
    position,
  },
  // 19
  {
    id: 'CECS_326',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 326' },
    position,
  },
  // 20
  {
    id: 'EE_381',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'EE 381' },
    position,
  },
  // 21
  {
    id: 'CECS_350',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 350' },
    position,
  },
  // 22
  {
    id: 'CECS_343',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 343' },
    position,
  },
  // 23
  {
    id: 'CECS_327',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 327' },
    position,
  },
  // 24
  {
    id: 'CECS_491A',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 491A' },
    position,
  },
  // 25
  {
    id: 'CECS_491B',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'CECS 491B' },
    position,
  },
   

    /**********************Course Links*************************/
    {
      id: 'e_CECS_174_CECS_274',
      source: 'CECS_174',
      type: edgeType,
      target: 'CECS_274',
      animated: true,
    },
    {
      id: 'e_CECS_174_CECS_228',
      source: 'CECS_174',
      type: edgeType,
      target: 'CECS_228',
      animated: true,
    },
    {
      id: 'e_CECS_174_CECS_277',
      source: 'CECS_174',
      type: edgeType,
      target: 'CECS_277',
      animated: true,
    },
    {
      id: 'e_CECS_228_CECS_328',
      source: 'CECS_228',
      type: edgeType,
      target: 'CECS_328',
      animated: true,
    },
    {
      id: 'e_CECS_228_CECS_323',
      source: 'CECS_228',
      type: edgeType,
      target: 'CECS_323',
      animated: true,
    },
    {
      id: 'e_CECS_228_CECS_229',
      source: 'CECS_228',
      type: edgeType,
      target: 'CECS_229',
      animated: true,
    },
    {
      id: 'e_CECS_274_CECS_328',
      source: 'CECS_274',
      type: edgeType,
      target: 'CECS_328',
      animated: true,
    },
    {
      id: 'e_CECS_274_CECS_282',
      source: 'CECS_274',
      type: edgeType,
      target: 'CECS_282',
      animated: true,
    },
    {
      id: 'e_CECS_277_CECS_282',
      source: 'CECS_277',
      type: edgeType,
      target: 'CECS_282',
      animated: true,
    },
    {
      id: 'e_CECS_225_CECS_341',
      source: 'CECS_225',
      type: edgeType,
      target: 'CECS_341',
      animated: true,
    },
    {
      id: 'e_CECS_328_CECS_329',
      source: 'CECS_328',
      type: edgeType,
      target: 'CECS_329',
      animated: true,
    },
    {
      id: 'e_CECS_328_CECS_342',
      source: 'CECS_328',
      type: edgeType,
      target: 'CECS_342',
      animated: true,
    },
    {
      id: 'e_CECS_229_CECS_378',
      source: 'CECS_229',
      type: edgeType,
      target: 'CECS_378',
      animated: true,
    },
    {
      id: 'e_CECS_229_CECS_381',
      source: 'CECS_229',
      type: edgeType,
      target: 'CECS_381',
      animated: true,
    },
    {
      id: 'e_CECS_282_CECS_323',
      source: 'CECS_282',
      type: edgeType,
      target: 'CECS_323',
      animated: true,
    },
    {
      id: 'e_CECS_282_CECS_326',
      source: 'CECS_282',
      type: edgeType,
      target: 'CECS_326',
      animated: true,
    },
    {
      id: 'e_CECS_282_CECS_343',
      source: 'CECS_282',
      type: edgeType,
      target: 'CECS_343',
      animated: true,
    },
    {
      id: 'e_CECS_341_CECS_326',
      source: 'CECS_341',
      type: edgeType,
      target: 'CECS_326',
      animated: true,
    },
    {
      id: 'e_CECS_326_CECS_327',
      source: 'CECS_326',
      type: edgeType,
      target: 'CECS_327',
      animated: true,
    },
    {
      id: 'e_CECS_350_CECS_491A',
      source: 'CECS_350',
      type: edgeType,
      target: 'CECS_491A',
      animated: true,
    },
    {
      id: 'e_CECS_343_CECS_491A',
      source: 'CECS_343',
      type: edgeType,
      target: 'CECS_491A',
      animated: true,
    },
    {
      id: 'e_CECS_491A_CECS_491B',
      source: 'CECS_491A',
      type: edgeType,
      target: 'CECS_491B',
      animated: true,
    },
    // 22
    
  ],

  
})

export default CourseNodes