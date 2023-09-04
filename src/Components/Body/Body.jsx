import React from "react";
import Card from "../Card/Card";
import './Body.css'

const Body = (props) => {
    return (
        <> 
            <div className="body-container">
                <main>
                    <div className="text-container">
                        <span className="text-style">Modern Problems Require Modern Solutions</span>
                    </div>
                    <div className="card-container">
                        <div className="button-container">
                            <div className="button-content"> 
                                <button className="button-style"> ADD NEW </button>
                            </div>
                        </div>
                        <div className="cards-list"> 
                        
                            <Card 
                                hour={'08:30'}
                                date={'tomorrow 28 Jan 2023'}
                                technology={'Java'}
                                name={'Albert Martinez'}
                                city={'Barcelona'}
                            />
                        <br/>

                    
                            <Card 
                                hour={'09:30'}
                                date={'tomorrow 29 Jan 2023'}
                                technology={'React'}
                                name={'Ana Maria'}
                                city={'Palencia'}
                            />
                       <br/>
                            <Card 
                                hour={'10:30'}
                                date={'tomorrow 27 Feb 2023'}
                                technology={'JS'}
                                name={'Yue Martinez'}
                                city={'Madrid'}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Body;