import React, { useState, useEffect } from 'react';

const imgPathVal = process.env.PUBLIC_URL + '/images/';
function Keywords() {
    const DataApi = process.env.PUBLIC_URL + '/project.json';
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(DataApi)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    //  console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            )        
    },[DataApi]);
    return(
    <div className="container">
    <div className="related-eds-wrap  rlt-edswrap">
        <div className="related-eds-header">Related search topics</div>
            <ul>
                {items.map( kw => (
                    <li className={'kw-block kw-'+kw.id} key={kw.id}>
                    <div className="kw-wrap">                        
                        <div className="img_wrap">
                            <img src={imgPathVal + kw.imgPath} className="dispImg" alt="" />
                        </div>
                        <div className="cont-wrap">
                            <div className="numberBlock">0{kw.id}</div>
                            <div className="arrow"></div>
                            <div className="anchortext"><span>{kw.kw}</span></div>
                        </div>
                    <div className="anchorhref og_kw track_click" target="_blank" ></div>
                    </div>
                </li>    
                ))}
                
            </ul>
        </div>
    </div>
    )
}

export default Keywords;