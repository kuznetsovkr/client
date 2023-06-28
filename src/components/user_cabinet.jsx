import React from 'react';
import '../style/lk.css';
import Header from "./header";
const UserCabinet = () => {
    return (
        <div className="container">
            <div className="wrap">
                <Header/>
                <div id="body_lk">
                    <h1>k1rysha</h1>
                    <div id = "state" style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom:"10px"}}>
                        <h4 style={{margin:0}}>Победа: {5} </h4>
                        <h4 style={{margin:0}}>Ничья: {1} </h4>
                        <h4 style={{margin:0}}>Проигрыш: {2} </h4>
                    </div>

                    <body id = "history">
                        <p>k1rysha 1 - 0 Savva</p>
                        <hr/>
                        <p>k1rysha 0 - 1 r_kuznetsov</p>
                        <hr/>
                        <p>k1rysha 1 - 0 user_no_name</p>
                        <hr/>
                        <p>k1rysha 1/2 - 1/2 Savva</p>
                        <hr/>
                        <p>k1rysha 1 - 0 Savva</p>
                        <hr/>
                        <p>k1rysha 0 - 1 r_kuznetsov</p>
                        <hr/>
                    </body>
                </div>
            </div>
        </div>
    );
};

export default UserCabinet;
