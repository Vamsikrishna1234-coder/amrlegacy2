// import { useState, useRef, useCallback } from "react";
// import img1 from "../assets/images/AMR-Master-plan.jpg";

// /* ================= IMAGE SIZE ================= */
// const IMG_W = 2000, IMG_H = 1649;

// const b = (cx, cy, bw, bh) => ({
//   xPct: +((cx - bw / 2) / IMG_W * 100).toFixed(3),
//   yPct: +((cy - bh / 2) / IMG_H * 100).toFixed(3),
//   wPct: +(bw / IMG_W * 100).toFixed(3),
//   hPct: +(bh / IMG_H * 100).toFixed(3),
// });

// /* ================= RAW DATA (UNCHANGED) ================= */
// const RAW = [
//   ["01","254.39",916,1355,95,115], ["02","240.82",823,1365,95,115],
//   ["03","241.50",745,1375,95,115], ["04","260.29",665,1382,95,115],
//   ["05","284.56",585,1384,95,115], ["06","308.65",503,1392,95,115],
//   ["07","332.55",422,1389,95,115], ["08","312.70",350,1422,95,115],
//   ["09","269.83",286,1191,80,90],  ["10","180",354,1170,72,80],
//   ["11","183.67",417,1170,72,80],  ["12","183.67",499,1170,72,80],
//   ["13","183.67",578,1169,72,80],  ["14","183.67",662,1170,72,80],
//   ["15","183.67",733,1169,72,80],  ["16","183.67",818,1170,72,80],
//   ["17","183.67",890,1169,72,80],  ["18","183.67",970,1169,72,80],
//   ["19","219.33",1132,1178,72,80], ["20","208.89",1306,1112,72,80],
//   ["21","300",1224,1132,85,100],   ["22","235",1127,1112,85,100],
//   ["23","183.67",969,1113,72,80],  ["24","183.67",891,1112,72,80],
//   ["25","183.67",813,1109,72,80],  ["26","183.67",733,1112,72,80],
//   ["27","183.67",650,1113,72,80],  ["28","183.67",577,1112,72,80],
//   ["29","183.67",500,1112,72,80],  ["30","183.67",424,1112,72,80],
//   ["31","183.67",349,1112,72,80],  ["32","245.05",258,1112,80,90],
//   ["33","294.69",204,917,80,90],   ["34","234.67",272,916,80,90],
//   ["35","270.22",340,917,80,90],   ["36","270.22",418,917,80,90],
//   ["37","270.22",497,915,80,90],   ["38","270.22",574,916,80,90],
//   ["39","270.22",652,915,80,90],   ["40","270.22",730,915,80,90],
//   ["41","270.22",804,916,80,90],   ["42","270.22",887,915,80,90],
//   ["43","270.22",966,916,80,90],   ["44","337.50",1318,922,80,90],
//   ["45","337.50",1410,922,80,90],  ["46","337.50",1409,784,100,110],
//   ["47","337.50",1313,784,100,110],["48","300",959,802,80,90],
//   ["49","300",888,798,80,90],      ["50","300",808,798,80,90],
//   ["51","300",730,798,80,90],      ["52","300",652,798,80,90],
//   ["53","300",580,798,80,90],      ["54","300",496,797,80,90],
//   ["55","300",418,798,80,90],      ["56","300",340,798,80,90],
//   ["57","300",262,797,80,90],      ["58","328.54",179,798,80,90],
//   ["59","164.21",166,601,72,80],   ["60","165",233,596,72,80],
//   ["61","200",307,588,72,80],      ["62","200",389,588,72,80],
//   ["63","200",472,588,72,80],      ["64","200",553,588,72,80],
//   ["65","200",636,587,72,80],      ["66","200",718,588,72,80],
//   ["67","200",800,587,72,80],      ["68","200",882,587,72,80],
//   ["69","200",963,586,72,80],      ["70","200",1128,589,72,80],
//   ["71","200",1210,588,72,80],     ["72","200",1293,589,72,80],
//   ["73","200",1375,589,72,80],     ["74","200",1458,589,72,80],
//   ["75","200",1545,590,72,80],     ["76","200",1621,589,72,80],
//   ["77","180.29",1698,588,72,80],  ["78","179.22",1704,525,72,80],
//   ["79","200",1627,526,72,80],     ["80","200",1540,526,72,80],
//   ["81","200",1459,526,72,80],     ["82","200",1371,526,72,80],
//   ["83","200",1294,526,72,80],     ["84","200",1210,526,72,80],
//   ["85","200",1127,526,72,80],     ["86","200",964,524,72,80],
//   ["87","200",882,523,72,80],      ["88","200",799,524,72,80],
//   ["89","200",719,524,72,80],      ["90","200",635,523,72,80],
//   ["91","200",553,524,72,80],      ["92","200",472,525,72,80],
//   ["93","200",390,523,72,80],      ["94","200",308,524,72,80],
//   ["95","165",232,515,72,80],      ["96","174.94",161,515,72,80],
//   ["97","177.82",158,349,72,80],   ["98","175",229,347,72,80],
//   ["99","200",306,342,72,80],      ["100","200",392,343,72,80],
//   ["101","200",463,340,72,80],     ["102","231.15",801,364,72,80],
//   ["103","243.28",877,339,72,80],  ["104","237.43",958,339,72,80],
//   ["105","220.88",1129,341,72,80], ["106","212.57",1210,342,72,80],
//   ["107","204.29",1286,342,72,80], ["108","196",1379,344,72,80],
//   ["109","187.72",1461,345,72,80], ["110","179.44",1539,349,72,80],
//   ["111","171.15",1615,352,72,80], ["112","180.08",1694,356,72,80],
//   // 🔥 keep rest of your RAW array here (unchanged)
// ];

// /* ================= STATUS ================= */
// const SOLD_IDS = new Set(["03","07","12","15","22","26","31","34","38","42","45","47","52","57","61","66","69","72","75","79","83","87","91","95","99","103","108","111"]);
// const BOOKED_IDS = new Set(["05","10","17","25","29","36","40","49","54","59","63","68","73","80","85","90","96","101","106","110"]);
// const FACINGS = ["East","East","North","North","West","South","South-East","North-West"];

// const plots = RAW.map(([id, area, cx, cy, bw, bh]) => ({
//   id,
//   area,
//   ...b(cx, cy, bw, bh),
//   status: SOLD_IDS.has(id) ? "sold" : BOOKED_IDS.has(id) ? "booked" : "available",
//   facing: FACINGS[parseInt(id) % 8],
// }));

// const S = {
//   available:{label:"Available",dot:"#22c55e",note:"✅ Ready for booking"},
//   sold:{label:"Sold",dot:"#ef4444",note:"❌ This plot has been sold"},
//   booked:{label:"Booked",dot:"#f59e0b",note:"🔒 Booking in progress"},
// };

// const ARR = {East:"→",West:"←",North:"↑",South:"↓","South-East":"↘","North-West":"↖"};

// /* ================= TOOLTIP ================= */
// function Tooltip({ plot, mx, my }) {
//   if (!plot) return null;
//   const cfg = S[plot.status];

//   return (
//     <div
//       style={{
//         position:"absolute",
//         left:mx+15,
//         top:my+15,
//         width:220,
//         background:"#fff",
//         borderRadius:10,
//         padding:12,
//         boxShadow:"0 10px 30px rgba(0,0,0,.4)",
//         zIndex:999,
//         pointerEvents:"none"
//       }}
//     >
//       <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
//         <span style={{fontWeight:600,fontSize:12,color:cfg.dot}}>
//           {cfg.label}
//         </span>
//         <span style={{fontWeight:700,fontSize:14}}>
//           Plot {plot.id}
//         </span>
//       </div>

//       <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
//         <span style={{fontSize:12,color:"#6b7280"}}>Area</span>
//         <span style={{fontSize:12,fontWeight:600}}>
//           {plot.area} sq.yd
//         </span>
//       </div>

//       <div style={{display:"flex",justifyContent:"space-between"}}>
//         <span style={{fontSize:12,color:"#6b7280"}}>Facing</span>
//         <span style={{fontSize:12,fontWeight:600}}>
//           {ARR[plot.facing]} {plot.facing}
//         </span>
//       </div>

//       <div style={{marginTop:8,fontSize:11,color:cfg.dot,textAlign:"center"}}>
//         {cfg.note}
//       </div>
//     </div>
//   );
// }

// /* ================= MAIN COMPONENT ================= */
// export default function AMRMasterPlan() {
//   const [hover, setHover] = useState(null);
//   const [pos, setPos] = useState({x:0,y:0});
//   const ref = useRef(null);

//   const handleMove = useCallback((e, plot) => {
//     const r = ref.current.getBoundingClientRect();
//     setPos({x:e.clientX-r.left,y:e.clientY-r.top});
//     setHover(plot);
//   },[]);

//   return (
//     <div style={{
//       background:"#f1ecec78",
//       minHeight:"100vh",
//       padding:"60px 20px",
//       display:"flex",
//       flexDirection:"column",
//       alignItems:"center"
//     }}>

//       {/* ===== HEADINGS ===== */}
//       <div style={{textAlign:"center",marginBottom:30}}>
//         <h1 style={{
//           color:"#203370",
//           fontSize:28,
//           fontWeight:700,
//           marginBottom:8
//         }}>
//           Masterplan Layout
//         </h1>

//         <p style={{
//           color:"#203370df",
//           fontSize:16
//         }}>
//           Place cursor over any plot to see Plot status
//         </p>
//       </div>

//       {/* ===== IMAGE CONTAINER (Smaller) ===== */}
//       <div
//         ref={ref}
//         style={{
//           position:"relative",
//           width:"100%",
//           maxWidth:"980px"   // 👈 Reduced size
//         }}
//       >
//         <img
//           src={img1}
//           alt="Master Plan"
//           style={{
//             width:"100%",
//             height:"auto",
//             display:"block",
//             borderRadius:12
//           }}
//         />

//         {plots.map(p=>(
//           <div
//             key={p.id}
//             onMouseMove={e=>handleMove(e,p)}
//             onMouseLeave={()=>setHover(null)}
//             style={{
//               position:"absolute",
//               left:`${p.xPct}%`,
//               top:`${p.yPct}%`,
//               width:`${p.wPct}%`,
//               height:`${p.hPct}%`,
//               cursor:"crosshair"
//             }}
//           />
//         ))}

//         {hover && (
//           <Tooltip plot={hover} mx={pos.x} my={pos.y}/>
//         )}
//       </div>
//     </div>
//   );
// }




import { useState, useRef, useCallback } from "react";
import img1 from "../assets/images/AMR-Master-plan.jpg";

/* ================= IMAGE SIZE ================= */
const IMG_W = 2000, IMG_H = 1649;

const b = (cx, cy, bw, bh) => ({
  xPct: +((cx - bw / 2) / IMG_W * 100).toFixed(3),
  yPct: +((cy - bh / 2) / IMG_H * 100).toFixed(3),
  wPct: +(bw / IMG_W * 100).toFixed(3),
  hPct: +(bh / IMG_H * 100).toFixed(3),
});

/* ================= RAW DATA ================= */
 const RAW = [
  ["01","254.39",916,1355,95,115], ["02","240.82",823,1365,95,115],
  ["03","241.50",745,1375,95,115], ["04","260.29",665,1382,95,115],
  ["05","284.56",585,1384,95,115], ["06","308.65",503,1392,95,115],
  ["07","332.55",422,1389,95,115], ["08","312.70",350,1422,95,115],
  ["09","269.83",286,1191,80,90],  ["10","180",354,1170,72,80],
  ["11","183.67",417,1170,72,80],  ["12","183.67",499,1170,72,80],
  ["13","183.67",578,1169,72,80],  ["14","183.67",662,1170,72,80],
  ["15","183.67",733,1169,72,80],  ["16","183.67",818,1170,72,80],
  ["17","183.67",890,1169,72,80],  ["18","183.67",970,1169,72,80],
  ["19","219.33",1132,1178,72,80], ["20","208.89",1306,1112,72,80],
  ["21","300",1224,1132,85,100],   ["22","235",1127,1112,85,100],
  ["23","183.67",969,1113,72,80],  ["24","183.67",891,1112,72,80],
  ["25","183.67",813,1109,72,80],  ["26","183.67",733,1112,72,80],
  ["27","183.67",650,1113,72,80],  ["28","183.67",577,1112,72,80],
  ["29","183.67",500,1112,72,80],  ["30","183.67",424,1112,72,80],
  ["31","183.67",349,1112,72,80],  ["32","245.05",258,1112,80,90],
  ["33","294.69",204,917,80,90],   ["34","234.67",272,916,80,90],
  ["35","270.22",340,917,80,90],   ["36","270.22",418,917,80,90],
  ["37","270.22",497,915,80,90],   ["38","270.22",574,916,80,90],
  ["39","270.22",652,915,80,90],   ["40","270.22",730,915,80,90],
  ["41","270.22",804,916,80,90],   ["42","270.22",887,915,80,90],
  ["43","270.22",966,916,80,90],   ["44","337.50",1318,922,80,90],
  ["45","337.50",1410,922,80,90],  ["46","337.50",1409,784,100,110],
  ["47","337.50",1313,784,100,110],["48","300",959,802,80,90],
  ["49","300",888,798,80,90],      ["50","300",808,798,80,90],
  ["51","300",730,798,80,90],      ["52","300",652,798,80,90],
  ["53","300",580,798,80,90],      ["54","300",496,797,80,90],
  ["55","300",418,798,80,90],      ["56","300",340,798,80,90],
  ["57","300",262,797,80,90],      ["58","328.54",179,798,80,90],
  ["59","164.21",166,601,72,80],   ["60","165",233,596,72,80],
  ["61","200",307,588,72,80],      ["62","200",389,588,72,80],
  ["63","200",472,588,72,80],      ["64","200",553,588,72,80],
  ["65","200",636,587,72,80],      ["66","200",718,588,72,80],
  ["67","200",800,587,72,80],      ["68","200",882,587,72,80],
  ["69","200",963,586,72,80],      ["70","200",1128,589,72,80],
  ["71","200",1210,588,72,80],     ["72","200",1293,589,72,80],
  ["73","200",1375,589,72,80],     ["74","200",1458,589,72,80],
  ["75","200",1545,590,72,80],     ["76","200",1621,589,72,80],
  ["77","180.29",1698,588,72,80],  ["78","179.22",1704,525,72,80],
  ["79","200",1627,526,72,80],     ["80","200",1540,526,72,80],
  ["81","200",1459,526,72,80],     ["82","200",1371,526,72,80],
  ["83","200",1294,526,72,80],     ["84","200",1210,526,72,80],
  ["85","200",1127,526,72,80],     ["86","200",964,524,72,80],
  ["87","200",882,523,72,80],      ["88","200",799,524,72,80],
  ["89","200",719,524,72,80],      ["90","200",635,523,72,80],
  ["91","200",553,524,72,80],      ["92","200",472,525,72,80],
  ["93","200",390,523,72,80],      ["94","200",308,524,72,80],
  ["95","165",232,515,72,80],      ["96","174.94",161,515,72,80],
  ["97","177.82",158,349,72,80],   ["98","175",229,347,72,80],
  ["99","200",306,342,72,80],      ["100","200",392,343,72,80],
  ["101","200",463,340,72,80],     ["102","231.15",801,364,72,80],
  ["103","243.28",877,339,72,80],  ["104","237.43",958,339,72,80],
  ["105","220.88",1129,341,72,80], ["106","212.57",1210,342,72,80],
  ["107","204.29",1286,342,72,80], ["108","196",1379,344,72,80],
  ["109","187.72",1461,345,72,80], ["110","179.44",1539,349,72,80],
  ["111","171.15",1615,352,72,80], ["112","180.08",1694,356,72,80],
  // 🔥 keep rest of your RAW array here (unchanged)
];

/* ================= STATUS ================= */
const SOLD_IDS = new Set(["03","07","12","15","22","26","31","34","38","42","45","47","52","57","61","66","69","72","75","79","83","87","91","95","99","103","108","111"]);
const BOOKED_IDS = new Set(["05","10","17","25","29","36","40","49","54","59","63","68","73","80","85","90","96","101","106","110"]);
const FACINGS = ["East","East","North","North","West","South","South-East","North-West"];

const plots = RAW.map(([id, area, cx, cy, bw, bh]) => ({
  id,
  area,
  ...b(cx, cy, bw, bh),
  status: SOLD_IDS.has(id) ? "sold" : BOOKED_IDS.has(id) ? "booked" : "available",
  facing: FACINGS[parseInt(id) % 8],
}));

const S = {
  available:{label:"Available",dot:"#22c55e",note:"✅ Ready for booking"},
  sold:{label:"Sold",dot:"#ef4444",note:"❌ This plot has been sold"},
  booked:{label:"Booked",dot:"#f59e0b",note:"🔒 Booking in progress"},
};

const ARR = {East:"→",West:"←",North:"↑",South:"↓","South-East":"↘","North-West":"↖"};

/* ================= TOOLTIP ================= */
function Tooltip({ plot, mx, my, containerWidth, containerHeight }) {
  if (!plot) return null;
  const cfg = S[plot.status];

  const TOOLTIP_W = 220;
  const TOOLTIP_H = 140;

  let left = mx + 15;
  let top  = my + 15;

  // Prevent overflow right
  if (left + TOOLTIP_W > containerWidth - 10) {
    left = mx - TOOLTIP_W - 15;
  }

  // Prevent overflow bottom
  if (top + TOOLTIP_H > containerHeight - 10) {
    top = containerHeight - TOOLTIP_H - 10;
  }

  return (
    <div
      style={{
        position:"absolute",
        left,
        top,
        width:TOOLTIP_W,
        background:"#fff",
        borderRadius:10,
        padding:12,
        boxShadow:"0 10px 30px rgba(0,0,0,.3)",
        zIndex:999,
        pointerEvents:"none"
      }}
    >
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
        <span style={{fontWeight:600,fontSize:12,color:cfg.dot}}>
          {cfg.label}
        </span>
        <span style={{fontWeight:700,fontSize:14}}>
          Plot {plot.id}
        </span>
      </div>

      <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
        <span style={{fontSize:12,color:"#6b7280"}}>Area</span>
        <span style={{fontSize:12,fontWeight:600}}>
          {plot.area} sq.yd
        </span>
      </div>

      <div style={{display:"flex",justifyContent:"space-between"}}>
        <span style={{fontSize:12,color:"#6b7280"}}>Facing</span>
        <span style={{fontSize:12,fontWeight:600}}>
          {ARR[plot.facing]} {plot.facing}
        </span>
      </div>

      <div style={{marginTop:8,fontSize:11,color:cfg.dot,textAlign:"center"}}>
        {cfg.note}
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function AMRMasterPlan() {
  const [hover, setHover] = useState(null);
  const [pos, setPos] = useState({x:0,y:0});
  const [containerSize, setContainerSize] = useState({w:0,h:0});
  const ref = useRef(null);

  const handleMove = useCallback((e, plot) => {
    const r = ref.current.getBoundingClientRect();
    setContainerSize({w:r.width, h:r.height});
    setPos({x:e.clientX-r.left, y:e.clientY-r.top});
    setHover(plot);
  },[]);

  const handleClickMobile = (e, plot) => {
    const r = ref.current.getBoundingClientRect();
    setContainerSize({w:r.width, h:r.height});
    setPos({x:e.clientX-r.left, y:e.clientY-r.top});
    setHover(plot);
  };

  return (
    <div style={{
      background:"#f1ecec78",
      
      padding:"40px 16px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }}>

      {/* ===== HEADINGS ===== */}
      <div style={{textAlign:"center",marginBottom:25}}>
        <h1 style={{
          color:"#203370",
          fontSize:"clamp(22px,4vw,28px)",
          fontWeight:700,
          marginBottom:8
        }}>
          Masterplan Layout
        </h1>

        <p style={{
          color:"#203370df",
          fontSize:"clamp(14px,3vw,16px)"
        }}>
          Place cursor over any plot to see Plot status
        </p>
      </div>

      {/* ===== IMAGE CONTAINER ===== */}
      <div
        ref={ref}
        style={{
          position:"relative",
          width:"100%",
          maxWidth:"980px",
          margin: "0 auto"
        }}
      >
        <img
          src={img1}
          alt="Master Plan"
          style={{
            width:"100%",
            height:"auto",
            display:"block",
            borderRadius:12
          }}
        />

        {plots.map(p=>(
          <div
            key={p.id}
            onMouseMove={(e)=>handleMove(e,p)}
            onMouseLeave={()=>setHover(null)}
            onClick={(e)=>handleClickMobile(e,p)} // mobile tap support
            style={{
              position:"absolute",
              left:`${p.xPct}%`,
              top:`${p.yPct}%`,
              width:`${p.wPct}%`,
              height:`${p.hPct}%`,
              cursor:"pointer"
            }}
          />
        ))}

        {hover && (
          <Tooltip
            plot={hover}
            mx={pos.x}
            my={pos.y}
            containerWidth={containerSize.w}
            containerHeight={containerSize.h}
          />
        )}
      </div>
    </div>
  );
}
