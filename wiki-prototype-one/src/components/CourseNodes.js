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
    position: { x: 0, y: 220 },
  },

  // 2
  {
    id: 'ENGR_361',
    sourcePosition: 'right',
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
    // {
    //   id: "2",
    //   label: "<h3>CECS 228</h3>",
    //   labelType: "html",
    // },
    // {
    //   id: "3",
    //   label: "<h3>CECS 229</h3>",
    //   labelType: "html",
    // },
    // {
    //   id: "4",
    //   label: "<h3>CECS 274</h3>",
    //   labelType: "html",
    // },
    // {
    //   id: "5",
    //   label: "<h3>CECS 277</h3>",
    //   labelType: "html",
    // },
    // {
    //   id: "6",
    //   label: "<h3>CECS 328</h3>",
    //   labelType: "html",
    // },
    // {
    //   id: "7",
    //   label: "<h3>CECS 282</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "8",
    //   label: "<h3>CECS 341</h3>",
    //   labelType: "html"
    // }, 
    // {
    //   id: "9",
    //   label: "<h3>CECS 329</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "10",
    //   label: "<h3>CECS 342</h3>",
    //   labelType: "html"
    // },
    
    // {
    //   id: "12",
    //   label: "<h3>CECS 378</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "13",
    //   label: "<h3>ENGR 361</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "14",
    //   label: "<h3>CECS 323</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "15",
    //   label: "<h3>CECS 327</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "16",
    //   label: "<h3>CECS 343</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "17",
    //   label: "<h3>EE 381</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "18",
    //   label: "<h3>CECS 326</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "19",
    //   label: "<h3>CECS 350</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "20",
    //   label: "<h3>GE </h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "21",
    //   label: "<h3>CECS 491A</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "22",
    //   label: "<h3>CECS 491B</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "23",
    //   label: "<h3>CS Group 1 Elective</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "24",
    //   label: "<h3>CS Group 1 Elective</h3>",
    //   labelType: "html"
    // },
    // {
    //   id: "25",
    //   label: "<h3>CS Group 1 or 2 Elective</h3>",
    //   labelType: "html"
    // },

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

  // links: [
  //   {
  //     // CECS 174 -> CECS 274
  //     source: '11',
  //     target: '4',
  //   },
  //   {
  //     // CECS 174 -> CECS 277
  //     source: '11',
  //     target: '5',
  //   },
  //   {
  //     // CECS 174 -> CECS 228
  //     source: '11',
  //     target: '2',
  //   },
  //   {
  //     // CECS 225 -> CECS 341
  //     source: '1',
  //     target: '8',
  //   },
  //   {
  //     // CECS 274 -> CECS 282
  //     source: '4',
  //     target: '7',
  //   },
  //   {
  //     // CECS 274 -> CECS 328
  //     source: '4',
  //     target: '6',
  //   },
  //   {
  //     // CECS 328 -> CECS 329
  //     source: '6',
  //     target: '9',
  //   },
  //   {
  //     // CECS 228 -> CECS 229
  //     source: '2',
  //     target: '3',
  //   },
  //   {
  //     // CECS 328 -> CECS 342
  //     source: '6',
  //     target: '10',
  //   },
  //   {
  //     // CECS 228 -> CECS 328
  //     source: '2',
  //     target: '6',
  //   },
  //   {
  //     // CECS 277 -> CECS 282
  //     source: '5',
  //     target: '7',
  //   },
  //   {
  //     // CECS 282 -> CECS 343
  //     source: '7',
  //     target: '16',
  //   },
  //   {
  //     // CECS 228 -> CECS 323
  //     source: '7',
  //     target: '14',
  //   },
  //   {
  //     // CECS 282 -> CECS 323
  //     source: '2',
  //     target: '14',
  //   },
  //   {
  //     // CECS 229 -> CECS 381
  //     source: '3',
  //     target: '17',
  //   },
  //   {
  //     // CECS 326 -> CECS 327
  //     source: '18',
  //     target: '15',
  //   },
  //   {
  //     // CECS 341 -> CECS 326
  //     source: '8',
  //     target: '18',
  //   },
  //   {
  //     // CECS 282 -> CECS 326
  //     source: '7',
  //     target: '18',
  //   },
  //   {
  //     // CECS 491A -> CECS 491B
  //     source: '21',
  //     target: '22',
  //   },
  //   {
  //     // CECS 229 -> CECS 378
  //     source: '3',
  //     target: '12',
  //   },
  //   {
  //     // CECS 282 -> CECS 323
  //     source: '7',
  //     target: '14',
  //   },
  //   {
  //     // CECS 343-> CECS 491A
  //     source: '16',
  //     target: '21',
  //   },
  //   {
  //     // ENGR 350-> CECS 491A
  //     source: '19',
  //     target: '21',
  //   },
  //   {
  //     // CECS 174 -> CECS 225
  //     source: '11',
  //     target: '1',
  //   },
  // ]
})

export default CourseNodes