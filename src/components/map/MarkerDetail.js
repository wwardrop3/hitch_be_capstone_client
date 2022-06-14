// import { InfoBox, InfoWindow } from "@react-google-maps/api"
// import { Link } from "react-router-dom"
// import "./map.css"

// export const MarkerPopUp = ({selectedPoint, showInfoBox, infoBox, setSelectedPoint}) => {
//     return (
//         <>
//         {infoBox?
//             <InfoWindow
//             position={selectedPoint.origin}
//             clickable={true}
//             onCloseClick={()=>
//                 setSelectedPoint({})}
//             >
//                 <div className='popup-window'>
//                 <Link to={`/trips/${selectedPoint.id}`}> <h2> {selectedPoint.start_date}</h2></Link>
//                     <div className='image-container'>
//                         <img id='prop-image' src = {selectedPoint.driver.profile_image_url} height="150px"></img>
                    
//                     </div>
                     
                    
//                     </div>
//                 </InfoWindow>

//             // <InfoBox
//             //             position={trip?.origin}
//             //             options={{ closeBoxURL: ``, enableEventPropagation: true}}
//             //         >
//             //             <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
//             //             <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
//             //                 <p>{trip.id}</p>
//             //             </div>
//             //             </div>
//             //         </InfoBox>
//             :""
//         }
                        
                                                
//         </>
//     )
// }