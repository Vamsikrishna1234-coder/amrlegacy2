






// import { useState, useRef, useCallback } from "react";
// import img1 from "../assets/images/Master Plan3.jpeg";

// /* ================= IMAGE SIZE: 2000 x 1125 ================= */
// const IMG_W = 2000, IMG_H = 1125;

// const b = (cx, cy, bw, bh) => ({
//   xPct: +((cx - bw / 2) / IMG_W * 100).toFixed(3),
//   yPct: +((cy - bh / 2) / IMG_H * 100).toFixed(3),
//   wPct: +(bw / IMG_W * 100).toFixed(3),
//   hPct: +(bh / IMG_H * 100).toFixed(3),
// });

// /* ================================================================
//    ✅ HOW TO UPDATE PLOT STATUS DAILY
//    ─────────────────────────────────
//    When a plot is sold, simply add its ID (as a string) to the
//    SOLD_IDS set below.

//    Example — if Plot 10 and Plot 25 get sold today:
//      Before:  new Set(["03","07","12", ...])
//      After:   new Set(["03","07","10","12","25", ...])

//    To mark a plot as available again, remove its ID from the set.

//    ⚠️  Only two statuses exist:
//        "sold"      → plot has been sold
//        "available" → plot is open for purchase

//    IDs must be zero-padded strings: "01","02",...,"09","10","11"
// ================================================================ */
// const SOLD_IDS = new Set([
//   // ── ADD / REMOVE IDs HERE AS PLOTS GET SOLD ──────────────
//   "03","07","12","15","22","26","31","34",
//   "38","42","45","47","52","57","61","66",
//   "69","72","75","79","83","87","91","95",
//   "99","103","108","111",
//   // ─────────────────────────────────────────────────────────
// ]);

// /* ================================================================
//    RAW DATA — [id, area_sqyd, cx, cy, box_w, box_h, facing]
//    Do NOT edit this section unless the master plan image changes.
// ================================================================ */
// const RAW = [
//   /* ── BOTTOM ROW: Plots 01–08 (East facing) ─────────────── */
//   ["01","254.39",   772, 956,  98, 85, "East"],
//   ["02","240.82",   702, 962,  98, 85, "East"],
//   ["03","241.50",   625, 974,  98, 85, "East"],
//   ["04","260.29",   567, 979,  98, 85, "East"],
//   ["05","284.56",   509, 981,  98, 85, "East"],
//   ["06","308.65",   450, 986,  98, 85, "East"],
//   ["07","332.55",   390, 985,  98, 85, "East"],
//   ["08","312.70",   338,1008,  98, 85, "East"],

//   /* ── Plot 09 (West facing) ─────────────────────────────── */
//   ["09","269.83",   291, 840,  84, 72, "West"],

//   /* ── SEVENTH ROW: Plots 10–18 (West facing) ────────────── */
//   ["10","180",      337, 824,  74, 64, "West"],
//   ["11","183.67",   390, 824,  74, 64, "West"],
//   ["12","183.67",   447, 824,  74, 64, "West"],
//   ["13","183.67",   505, 824,  74, 64, "West"],
//   ["14","183.67",   561, 824,  74, 64, "West"],
//   ["15","183.67",   618, 824,  74, 64, "West"],
//   ["16","183.67",   675, 824,  74, 64, "West"],
//   ["17","183.67",   732, 824,  74, 64, "West"],
//   ["18","183.67",   791, 824,  74, 64, "West"],

//   /* ── Plot 19 (North facing) ────────────────────────────── */
//   ["19","219.33",   928, 870,  76, 65, "North"],

//   /* ── Plot 20 (East facing) ─────────────────────────────── */
//   ["20","208.89",  1108, 790,  80, 70, "East"],

//   /* ── Plot 21 (East facing) ─────────────────────────────── */
//   ["21","300",     1020, 800,  86, 76, "East"],

//   /* ── Plot 22 (East facing) ─────────────────────────────── */
//   ["22","235",      928, 795,  88, 76, "East"],

//   /* ── Plot 23 (East facing) ─────────────────────────────── */
//   ["23","183.67",   788, 782,  74, 64, "East"],

//   /* ── SIXTH ROW: Plots 24–31 (East facing) ──────────────── */
//   ["24","183.67",   731, 782,  74, 64, "East"],
//   ["25","183.67",   675, 782,  74, 64, "East"],
//   ["26","183.67",   617, 782,  74, 64, "East"],
//   ["27","183.67",   560, 782,  74, 64, "East"],
//   ["28","183.67",   503, 782,  74, 64, "East"],
//   ["29","183.67",   446, 782,  74, 64, "East"],
//   ["30","183.67",   391, 782,  74, 64, "East"],
//   ["31","183.67",   335, 782,  74, 64, "East"],

//   /* ── Plot 32 (East facing) ─────────────────────────────── */
//   ["32","245.05",   270, 782,  80, 70, "East"],

//   /* ── FIFTH ROW: Plots 33–43 (West facing) ──────────────── */
//   ["33","294.69",   230, 639,  78, 68, "West"],
//   ["34","234.67",   281, 639,  78, 68, "West"],
//   ["35","270.22",   330, 639,  78, 68, "West"],
//   ["36","270.22",   387, 639,  78, 68, "West"],
//   ["37","270.22",   444, 639,  78, 68, "West"],
//   ["38","270.22",   501, 639,  78, 68, "West"],
//   ["39","270.22",   558, 639,  78, 68, "West"],
//   ["40","270.22",   614, 639,  78, 68, "West"],
//   ["41","270.22",   671, 638,  78, 68, "West"],
//   ["42","270.22",   728, 639,  78, 68, "West"],
//   ["43","270.22",   786, 639,  78, 68, "West"],

//   /* ── Plots 44–45 (West facing) ─────────────────────────── */
//   ["44","337.50",  1044, 644,  92, 78, "West"],
//   ["45","337.50",  1111, 644,  92, 78, "West"],

//   /* ── Plots 46–47 (East facing) ─────────────────────────── */
//   ["46","337.50",  1111, 542,  92, 78, "East"],
//   ["47","337.50",  1044, 542,  92, 78, "East"],

//   /* ── FOURTH ROW: Plots 48–57 (East facing) ─────────────── */
//   ["48","300",      782, 557,  78, 68, "East"],
//   ["49","300",      731, 553,  78, 68, "East"],
//   ["50","300",      672, 552,  78, 68, "East"],
//   ["51","300",      614, 553,  78, 68, "East"],
//   ["52","300",      558, 553,  78, 68, "East"],
//   ["53","300",      501, 553,  78, 68, "East"],
//   ["54","300",      443, 553,  78, 68, "East"],
//   ["55","300",      387, 553,  78, 68, "East"],
//   ["56","300",      330, 552,  78, 68, "East"],
//   ["57","300",      273, 552,  78, 68, "East"],

//   /* ── Plot 58 (East facing) ─────────────────────────────── */
//   ["58","328.54",   212, 553,  78, 68, "East"],

//   /* ── THIRD ROW: Plots 59–60 (West facing) ──────────────── */
//   ["59","164.21",   203, 408,  70, 60, "West"],
//   ["60","165",      252, 406,  70, 60, "West"],

//   /* ── Plots 61–68 (West facing) ─────────────────────────── */
//   ["61","200",      305, 400,  70, 60, "West"],
//   ["62","200",      366, 400,  70, 60, "West"],
//   ["63","200",      426, 400,  70, 60, "West"],
//   ["64","200",      486, 400,  70, 60, "West"],
//   ["65","200",      546, 400,  70, 60, "West"],
//   ["66","200",      606, 400,  70, 60, "West"],
//   ["67","200",      666, 400,  70, 60, "West"],
//   ["68","200",      726, 400,  70, 60, "West"],

//   /* ── Plots 69–70 (West facing) ─────────────────────────── */
//   ["69","200",      786, 400,  70, 60, "West"],
//   ["70","200",      907, 401,  70, 60, "West"],

//   /* ── Plots 71–77 (West facing) ─────────────────────────── */
//   ["71","200",      965, 401,  70, 60, "West"],
//   ["72","200",     1026, 402,  70, 60, "West"],
//   ["73","200",     1086, 401,  70, 60, "West"],
//   ["74","200",     1146, 401,  70, 60, "West"],
//   ["75","200",     1206, 401,  70, 60, "West"],
//   ["76","200",     1266, 401,  70, 60, "West"],
//   ["77","180.29",  1326, 401,  70, 60, "West"],

//   /* ── Plot 78 (East facing) ─────────────────────────────── */
//   ["78","179.22",  1326, 354,  68, 58, "East"],

//   /* ── SECOND ROW: Plots 79–84 (East facing) ─────────────── */
//   ["79","200",     1266, 354,  68, 58, "East"],
//   ["80","200",     1207, 354,  68, 58, "East"],
//   ["81","200",     1145, 354,  68, 58, "East"],
//   ["82","200",     1087, 354,  68, 58, "East"],
//   ["83","200",     1026, 354,  68, 58, "East"],
//   ["84","200",      966, 354,  68, 58, "East"],

//   /* ── Plots 85–86 (East facing) ─────────────────────────── */
//   ["85","200",      904, 354,  68, 58, "East"],
//   ["86","200",      786, 353,  68, 58, "East"],

//   /* ── Plots 87–94 (East facing) ─────────────────────────── */
//   ["87","200",      725, 353,  68, 58, "East"],
//   ["88","200",      664, 353,  68, 58, "East"],
//   ["89","200",      607, 353,  68, 58, "East"],
//   ["90","200",      546, 353,  68, 58, "East"],
//   ["91","200",      485, 353,  68, 58, "East"],
//   ["92","200",      426, 353,  68, 58, "East"],
//   ["93","200",      366, 353,  68, 58, "East"],
//   ["94","200",      306, 353,  68, 58, "East"],

//   /* ── Plots 95–96 (East facing) ─────────────────────────── */
//   ["95","165",      251, 346,  68, 58, "East"],
//   ["96","174.94",   199, 346,  68, 58, "East"],

//   /* ── TOP ROW: Plots 97–98 (West facing) ────────────────── */
//   ["97","177.82",   197, 226,  68, 58, "West"],
//   ["98","175",      248, 224,  68, 58, "West"],

//   /* ── Plots 99–101 (West facing) ────────────────────────── */
//   ["99","200",      305, 220,  68, 58, "West"],
//   ["100","200",     365, 221,  68, 58, "West"],
//   ["101","200",     424, 219,  68, 58, "West"],

//   /* ── Plots 102–104 (West facing) ───────────────────────── */
//   ["102","231.15",  667, 236,  68, 58, "West"],
//   ["103","243.28",  722, 218,  68, 58, "West"],
//   ["104","237.43",  781, 218,  68, 58, "West"],

//   /* ── Plots 105–112 (West facing) ───────────────────────── */
//   ["105","220.86",  907, 220,  68, 58, "West"],
//   ["106","212.57",  967, 220,  68, 58, "West"],
//   ["107","204.29", 1026, 220,  68, 58, "West"],
//   ["108","196",    1085, 222,  68, 58, "West"],
//   ["109","187.72", 1145, 223,  68, 58, "West"],
//   ["110","179.44", 1202, 226,  68, 58, "West"],
//   ["111","171.15", 1261, 227,  68, 58, "West"],
//   ["112","180.08", 1319, 231,  68, 58, "West"],
// ];

// /* ── Derive plots (only sold / available — no booked) ──────── */
// const plots = RAW.map(([id, area, cx, cy, bw, bh, facing]) => ({
//   id,
//   area,
//   ...b(+cx, +cy, +bw, +bh),
//   status : SOLD_IDS.has(id) ? "sold" : "available",
//   facing,
// }));

// const S = {
//   available : { label:"Available", dot:"#22c55e", note:"✅ Ready for booking"     },
//   sold      : { label:"Sold",      dot:"#ef4444", note:"❌ This plot has been sold" },
// };

// const ARR = { East:"→", West:"←", North:"↑", South:"↓", "South-East":"↘", "North-West":"↖" };

// /* ================= TOOLTIP ================= */
// function Tooltip({ plot, mx, my, containerWidth, containerHeight }) {
//   if (!plot) return null;
//   const cfg = S[plot.status];

//   const TOOLTIP_W = 220;
//   const TOOLTIP_H = 140;

//   let left = mx + 15;
//   let top  = my + 15;
//   if (left + TOOLTIP_W > containerWidth  - 10) left = mx - TOOLTIP_W - 15;
//   if (top  + TOOLTIP_H > containerHeight - 10) top  = containerHeight - TOOLTIP_H - 10;
//   if (left < 5) left = 5;
//   if (top  < 5) top  = 5;

//   return (
//     <div style={{
//       position     : "absolute",
//       left, top,
//       width        : TOOLTIP_W,
//       background   : "#fff",
//       borderRadius : 10,
//       padding      : 12,
//       boxShadow    : "0 10px 30px rgba(0,0,0,.3)",
//       zIndex       : 999,
//       pointerEvents: "none",
//       fontFamily   : "'Segoe UI', system-ui, sans-serif",
//     }}>
//       <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
//         <span style={{ fontWeight:600, fontSize:12, color:cfg.dot }}>{cfg.label}</span>
//         <span style={{ fontWeight:700, fontSize:14 }}>Plot {plot.id}</span>
//       </div>

//       <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
//         <span style={{ fontSize:12, color:"#6b7280" }}>Area</span>
//         <span style={{ fontSize:12, fontWeight:600 }}>{plot.area} sq.yd</span>
//       </div>

//       <div style={{ display:"flex", justifyContent:"space-between" }}>
//         <span style={{ fontSize:12, color:"#6b7280" }}>Facing</span>
//         <span style={{ fontSize:12, fontWeight:600 }}>{ARR[plot.facing]} {plot.facing}</span>
//       </div>

//       <div style={{ marginTop:8, fontSize:11, color:cfg.dot, textAlign:"center" }}>
//         {cfg.note}
//       </div>
//     </div>
//   );
// }

// /* ================= MAIN COMPONENT ================= */
// export default function AMRMasterPlan() {
//   const [hover, setHover]                 = useState(null);
//   const [pos, setPos]                     = useState({ x:0, y:0 });
//   const [containerSize, setContainerSize] = useState({ w:0, h:0 });
//   const ref = useRef(null);

//   const handleMove = useCallback((e, plot) => {
//     const r = ref.current.getBoundingClientRect();
//     setContainerSize({ w: r.width, h: r.height });
//     setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
//     setHover(plot);
//   }, []);

//   const handleClickMobile = (e, plot) => {
//     const r = ref.current.getBoundingClientRect();
//     setContainerSize({ w: r.width, h: r.height });
//     setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
//     setHover(plot);
//   };

//   return (
//     <div style={{
//       background   : "#f1ecec78",
//       padding      : "40px 16px",
//       display      : "flex",
//       flexDirection: "column",
//       alignItems   : "center",
//     }}>

//       {/* ===== HEADINGS ===== */}
//       <div style={{ textAlign:"center", marginBottom:25 }}>
//         <h1 style={{
//           color       : "#203370",
//           fontSize    : "clamp(22px,4vw,28px)",
//           fontWeight  : 700,
//           marginBottom: 8,
//         }}>
//           Masterplan Layout
//         </h1>
//         <p style={{
//           color   : "#203370df",
//           fontSize: "clamp(14px,3vw,16px)",
//         }}>
//           Place cursor over any plot to see Plot status
//         </p>
//       </div>

//       {/* ===== IMAGE CONTAINER ===== */}
//       <div
//         ref={ref}
//         style={{
//           position : "relative",
//           width    : "100%",
//           maxWidth : "1700px",
//           margin   : "0 auto",
//           padding  : "0 20px",
//           boxSizing: "border-box",
//         }}
//       >
//         <img
//           src={img1}
//           alt="Master Plan"
//           style={{ width:"100%", height:"auto", display:"block", borderRadius:12 }}
//         />

//         {plots.map(p => (
//           <div
//             key={p.id}
//             onMouseMove={(e) => handleMove(e, p)}
//             onMouseLeave={()  => setHover(null)}
//             onClick={(e)      => handleClickMobile(e, p)}
//             style={{
//               position: "absolute",
//               left    : `${p.xPct}%`,
//               top     : `${p.yPct}%`,
//               width   : `${p.wPct}%`,
//               height  : `${p.hPct}%`,
//               cursor  : "pointer",
//             }}
//           />
//         ))}

//         {hover && (
//           <Tooltip
//             plot={hover}
//             mx={pos.x}
//             my={pos.y}
//             containerWidth={containerSize.w}
//             containerHeight={containerSize.h}
//           />
//         )}
//       </div>
//     </div>
//   );
// }




import { useState, useRef, useCallback } from "react";
import img1 from "../assets/images/Master Plan3.jpeg";

/* ================= IMAGE SIZE: 2000 x 1125 ================= */
const IMG_W = 2000, IMG_H = 1125;

const b = (cx, cy, bw, bh) => ({
  xPct: +((cx - bw / 2) / IMG_W * 100).toFixed(3),
  yPct: +((cy - bh / 2) / IMG_H * 100).toFixed(3),
  wPct: +(bw / IMG_W * 100).toFixed(3),
  hPct: +(bh / IMG_H * 100).toFixed(3),
});

/* ================================================================
   ✅ HOW TO UPDATE PLOT STATUS DAILY
   ─────────────────────────────────
   When a plot is sold, simply add its ID (as a string) to the
   SOLD_IDS set below.

   Example — if Plot 10 and Plot 25 get sold today:
     Before:  new Set(["03","07","12", ...])
     After:   new Set(["03","07","10","12","25", ...])

   To mark a plot as available again, remove its ID from the set.

   ⚠️  Only two statuses exist:
       "sold"      → plot has been sold
       "available" → plot is open for purchase

   IDs must be zero-padded strings: "01","02",...,"09","10","11"
================================================================ */
const SOLD_IDS = new Set([
  // ── ADD / REMOVE IDs HERE AS PLOTS GET SOLD ──────────────
  "03","07","12","15","22","26","31","34",
  "38","42","45","47","52","57","61","66",
  "69","72","75","79","83","87","91","95",
  "99","103","108","111",
  // ─────────────────────────────────────────────────────────
]);

/* ================================================================
   RAW DATA — [id, area_sqyd, sqft, cx, cy, box_w, box_h, facing]
   Do NOT edit this section unless the master plan image changes.
================================================================ */
const RAW = [
  /* ── BOTTOM ROW: Plots 01–08 (East facing) ─────────────── */
  ["01","254.39","3284",   772, 956,  98, 85, "East"],
  ["02","240.82","3345",   702, 962,  98, 85, "East"],
  ["03","241.50","3425",   625, 974,  98, 85, "East"],
  ["04","260.29","3836",   567, 979,  98, 85, "East"],
  ["05","284.56","4234",   509, 981,  98, 85, "East"],
  ["06","308.65","4454",   450, 986,  98, 85, "East"],
  ["07","332.55","4819",   390, 985,  98, 85, "East"],
  ["08","312.70","3234",   338,1008,  98, 85, "East"],

  /* ── Plot 09 (West facing) ─────────────────────────────── */
  ["09","269.83","2766",   291, 840,  84, 72, "West"],

  /* ── SEVENTH ROW: Plots 10–18 (West facing) ────────────── */
  ["10","180","2180",      337, 824,  74, 64, "West"],
  ["11","183.67","2530",   390, 824,  74, 64, "West"],
  ["12","183.67","2530",   447, 824,  74, 64, "West"],
  ["13","183.67","2530",   505, 824,  74, 64, "West"],
  ["14","183.67","2530",   561, 824,  74, 64, "West"],
  ["15","183.67","2530",   618, 824,  74, 64, "West"],
  ["16","183.67","2530",   675, 824,  74, 64, "West"],
  ["17","183.67","2530",   732, 824,  74, 64, "West"],
  ["18","183.67","2530",   791, 824,  74, 64, "West"],

  /* ── Plot 19 (North facing) ────────────────────────────── */
  ["19","219.33","3051",   928, 870,  76, 65, "North"],

  /* ── Plot 20 (East facing) ─────────────────────────────── */
  ["20","208.89","2913",  1108, 790,  80, 70, "East"],

  /* ── Plot 21 (East facing) ─────────────────────────────── */
  ["21","300","4207",     1020, 800,  86, 76, "East"],

  /* ── Plot 22 (East facing) ─────────────────────────────── */
  ["22","235","3274",      928, 795,  88, 76, "East"],

  /* ── Plot 23 (East facing) ─────────────────────────────── */
  ["23","183.67","2497",   788, 782,  74, 64, "East"],

  /* ── SIXTH ROW: Plots 24–31 (East facing) ──────────────── */
  ["24","183.67","2530",   731, 782,  74, 64, "East"],
  ["25","183.67","2530",   675, 782,  74, 64, "East"],
  ["26","183.67","2530",   617, 782,  74, 64, "East"],
  ["27","183.67","2530",   560, 782,  74, 64, "East"],
  ["28","183.67","2530",   503, 782,  74, 64, "East"],
  ["29","183.67","2530",   446, 782,  74, 64, "East"],
  ["30","183.67","2530",   391, 782,  74, 64, "East"],
  ["31","183.67","2530",   335, 782,  74, 64, "East"],

  /* ── Plot 32 (East facing) ─────────────────────────────── */
  ["32","245.05","2660",   270, 782,  80, 70, "East"],

  /* ── FIFTH ROW: Plots 33–43 (West facing) ──────────────── */
  ["33","294.69","3809",   230, 639,  78, 68, "West"],
  ["34","234.67","3373",   281, 639,  78, 68, "West"],
  ["35","270.22","4194",   330, 639,  78, 68, "West"],
  ["36","270.22","4080",   387, 639,  78, 68, "West"],
  ["37","270.22","4080",   444, 639,  78, 68, "West"],
  ["38","270.22","4080",   501, 639,  78, 68, "West"],
  ["39","270.22","4080",   558, 639,  78, 68, "West"],
  ["40","270.22","4080",   614, 639,  78, 68, "West"],
  ["41","270.22","4080",   671, 638,  78, 68, "West"],
  ["42","270.22","4080",   728, 639,  78, 68, "West"],
  ["43","270.22","4080",   786, 639,  78, 68, "West"],

  /* ── Plots 44–45 (West facing) ─────────────────────────── */
  ["44","337.50","5127",  1044, 644,  92, 78, "West"],
  ["45","337.50","5127",  1111, 644,  92, 78, "West"],

  /* ── Plots 46–47 (East facing) ─────────────────────────── */
  ["46","337.50","5104",  1111, 542,  92, 78, "East"],
  ["47","337.50","5104",  1044, 542,  92, 78, "East"],

  /* ── FOURTH ROW: Plots 48–57 (East facing) ─────────────── */
  ["48","300","4314",      782, 557,  78, 68, "East"],
  ["49","300","4433",      731, 553,  78, 68, "East"],
  ["50","300","4314",      672, 552,  78, 68, "East"],
  ["51","300","4314",      614, 553,  78, 68, "East"],
  ["52","300","4314",      558, 553,  78, 68, "East"],
  ["53","300","4314",      501, 553,  78, 68, "East"],
  ["54","300","4314",      443, 553,  78, 68, "East"],
  ["55","300","4314",      387, 553,  78, 68, "East"],
  ["56","300","4314",      330, 552,  78, 68, "East"],
  ["57","300","4314",      273, 552,  78, 68, "East"],

  /* ── Plot 58 (East facing) ─────────────────────────────── */
  ["58","328.54","4790",   212, 553,  78, 68, "East"],

  /* ── THIRD ROW: Plots 59–60 (West facing) ──────────────── */
  ["59","164.21","2128",   203, 408,  70, 60, "West"],
  ["60","165","2214",      252, 406,  70, 60, "West"],

  /* ── Plots 61–68 (West facing) ─────────────────────────── */
  ["61","200","2775",      305, 400,  70, 60, "West"],
  ["62","200","2775",      366, 400,  70, 60, "West"],
  ["63","200","2775",      426, 400,  70, 60, "West"],
  ["64","200","2775",      486, 400,  70, 60, "West"],
  ["65","200","2775",      546, 400,  70, 60, "West"],
  ["66","200","2775",      606, 400,  70, 60, "West"],
  ["67","200","2775",      666, 400,  70, 60, "West"],
  ["68","200","2775",      726, 400,  70, 60, "West"],

  /* ── Plots 69–70 (West facing) ─────────────────────────── */
  ["69","200","2759",      786, 400,  70, 60, "West"],
  ["70","200","2761",      907, 401,  70, 60, "West"],

  /* ── Plots 71–77 (West facing) ─────────────────────────── */
  ["71","200","2775",      965, 401,  70, 60, "West"],
  ["72","200","2775",     1026, 402,  70, 60, "West"],
  ["73","200","2775",     1086, 401,  70, 60, "West"],
  ["74","200","2775",     1146, 401,  70, 60, "West"],
  ["75","200","2775",     1206, 401,  70, 60, "West"],
  ["76","200","2775",     1266, 401,  70, 60, "West"],
  ["77","180.29","2392",  1326, 401,  70, 60, "West"],

  /* ── Plot 78 (East facing) ─────────────────────────────── */
  ["78","179.22","2442",  1326, 354,  68, 58, "East"],

  /* ── SECOND ROW: Plots 79–84 (East facing) ─────────────── */
  ["79","200","2776",     1266, 354,  68, 58, "East"],
  ["80","200","2757",     1207, 354,  68, 58, "East"],
  ["81","200","2776",     1145, 354,  68, 58, "East"],
  ["82","200","2776",     1087, 354,  68, 58, "East"],
  ["83","200","2776",     1026, 354,  68, 58, "East"],
  ["84","200","2776",      966, 354,  68, 58, "East"],

  /* ── Plots 85–86 (East facing) ─────────────────────────── */
  ["85","200","2776",      904, 354,  68, 58, "East"],
  ["86","200","2776",      786, 353,  68, 58, "East"],

  /* ── Plots 87–94 (East facing) ─────────────────────────── */
  ["87","200","2776",      725, 353,  68, 58, "East"],
  ["88","200","2776",      664, 353,  68, 58, "East"],
  ["89","200","2776",      607, 353,  68, 58, "East"],
  ["90","200","2776",      546, 353,  68, 58, "East"],
  ["91","200","2776",      485, 353,  68, 58, "East"],
  ["92","200","2776",      426, 353,  68, 58, "East"],
  ["93","200","2776",      366, 353,  68, 58, "East"],
  ["94","200","2776",      306, 353,  68, 58, "East"],

  /* ── Plots 95–96 (East facing) ─────────────────────────── */
  ["95","165","2266",      251, 346,  68, 58, "East"],
  ["96","174.94","2340",   199, 346,  68, 58, "East"],

  /* ── TOP ROW: Plots 97–98 (West facing) ────────────────── */
  ["97","177.82","2308",   197, 226,  68, 58, "West"],
  ["98","175","2362",      248, 224,  68, 58, "West"],

  /* ── Plots 99–101 (West facing) ────────────────────────── */
  ["99","200","2775",      305, 220,  68, 58, "West"],
  ["100","200","2775",     365, 221,  68, 58, "West"],
  ["101","200","2775",     424, 219,  68, 58, "West"],

  /* ── Plots 102–104 (West facing) ───────────────────────── */
  ["102","231.15","2288",  667, 236,  68, 58, "West"],
  ["103","243.28","3152",  722, 218,  68, 58, "West"],
  ["104","237.43","3210",  781, 218,  68, 58, "West"],

  /* ── Plots 105–112 (West facing) ───────────────────────── */
  ["105","220.86","2962",  907, 220,  68, 58, "West"],
  ["106","212.57","2870",  967, 220,  68, 58, "West"],
  ["107","204.29","2742", 1026, 220,  68, 58, "West"],
  ["108","196","2612",    1085, 222,  68, 58, "West"],
  ["109","187.72","2470", 1145, 223,  68, 58, "West"],
  ["110","179.44","2322", 1202, 226,  68, 58, "West"],
  ["111","171.15","2230", 1261, 227,  68, 58, "West"],
  ["112","180.08","2244", 1319, 231,  68, 58, "West"],
];

/* ── Derive plots (only sold / available — no booked) ──────── */
const plots = RAW.map(([id, area, sqft, cx, cy, bw, bh, facing]) => ({
  id,
  area,
  sqft,
  ...b(+cx, +cy, +bw, +bh),
  status : SOLD_IDS.has(id) ? "sold" : "available",
  facing,
}));

const S = {
  available : { label:"Available", dot:"#22c55e", note:"✅ Ready for booking"     },
  sold      : { label:"Sold",      dot:"#ef4444", note:"❌ This plot has been sold" },
};

const ARR = { East:"→", West:"←", North:"↑", South:"↓", "South-East":"↘", "North-West":"↖" };

/* ================= TOOLTIP ================= */
function Tooltip({ plot, mx, my, containerWidth, containerHeight }) {
  if (!plot) return null;
  const cfg = S[plot.status];

  const TOOLTIP_W = 220;
  const TOOLTIP_H = 155;

  let left = mx + 15;
  let top  = my + 15;
  if (left + TOOLTIP_W > containerWidth  - 10) left = mx - TOOLTIP_W - 15;
  if (top  + TOOLTIP_H > containerHeight - 10) top  = containerHeight - TOOLTIP_H - 10;
  if (left < 5) left = 5;
  if (top  < 5) top  = 5;

  return (
    <div style={{
      position     : "absolute",
      left, top,
      width        : TOOLTIP_W,
      background   : "#fff",
      borderRadius : 10,
      padding      : 12,
      boxShadow    : "0 10px 30px rgba(0,0,0,.3)",
      zIndex       : 999,
      pointerEvents: "none",
      fontFamily   : "'Segoe UI', system-ui, sans-serif",
    }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
        <span style={{ fontWeight:600, fontSize:12, color:cfg.dot }}>{cfg.label}</span>
        <span style={{ fontWeight:700, fontSize:14 }}>Plot {plot.id}</span>
      </div>

      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
        <span style={{ fontSize:12, color:"#6b7280" }}>Area</span>
        <span style={{ fontSize:12, fontWeight:600 }}>
          {plot.area} sq.yd, {plot.sqft} sq.ft
        </span>
      </div>

      <div style={{ display:"flex", justifyContent:"space-between" }}>
        <span style={{ fontSize:12, color:"#6b7280" }}>Facing</span>
        <span style={{ fontSize:12, fontWeight:600 }}>{ARR[plot.facing]} {plot.facing}</span>
      </div>

      <div style={{ marginTop:8, fontSize:11, color:cfg.dot, textAlign:"center" }}>
        {cfg.note}
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function AMRMasterPlan() {
  const [hover, setHover]                 = useState(null);
  const [pos, setPos]                     = useState({ x:0, y:0 });
  const [containerSize, setContainerSize] = useState({ w:0, h:0 });
  const ref = useRef(null);

  const handleMove = useCallback((e, plot) => {
    const r = ref.current.getBoundingClientRect();
    setContainerSize({ w: r.width, h: r.height });
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    setHover(plot);
  }, []);

  const handleClickMobile = (e, plot) => {
    const r = ref.current.getBoundingClientRect();
    setContainerSize({ w: r.width, h: r.height });
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    setHover(plot);
  };

  return (
    <div style={{
      background   : "#f1ecec78",
      padding      : "40px 16px",
      display      : "flex",
      flexDirection: "column",
      alignItems   : "center",
    }}>

      {/* ===== HEADINGS ===== */}
      <div style={{ textAlign:"center", marginBottom:25 }}>
        <h1 style={{
          color       : "#203370",
          fontSize    : "clamp(22px,4vw,28px)",
          fontWeight  : 700,
          marginBottom: 8,
        }}>
          Masterplan Layout
        </h1>
        <p style={{
          color   : "#203370df",
          fontSize: "clamp(14px,3vw,16px)",
        }}>
          Place cursor over any plot to see Plot status
        </p>
      </div>

      {/* ===== IMAGE CONTAINER ===== */}
      <div
        ref={ref}
        style={{
          position : "relative",
          width    : "100%",
          maxWidth : "1700px",
          margin   : "0 auto",
          padding  : "0 20px",
          boxSizing: "border-box",
        }}
      >
        <img
          src={img1}
          alt="Master Plan"
          style={{ width:"100%", height:"auto", display:"block", borderRadius:12 }}
        />

        {plots.map(p => (
          <div
            key={p.id}
            onMouseMove={(e) => handleMove(e, p)}
            onMouseLeave={()  => setHover(null)}
            onClick={(e)      => handleClickMobile(e, p)}
            style={{
              position: "absolute",
              left    : `${p.xPct}%`,
              top     : `${p.yPct}%`,
              width   : `${p.wPct}%`,
              height  : `${p.hPct}%`,
              cursor  : "pointer",
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