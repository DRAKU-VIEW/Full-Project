import React, {useState} from "react";
import Header from '../ViewsComponents/Header/Header.jsx';
import LinkButtons from "../Components/LinkButtons/LinkButtons.jsx";
import { arrModelFollowing } from "../Components/LinkButtons/ModelFollowing.js";
import NormalGrid from "../ViewsComponents/NormalGrid/NormalGrid.jsx";
import BodyGrid from "../ViewsComponents/Grid/BodyGrid.jsx";


const Following = () => {
    const [checkSubButton1, setCheckSubButton1] = useState(true);
    const [checkSubButton2, setCheckSubButton2] = useState(false);
    const [checkSubButton3, setCheckSubButton3] = useState(false);
    const [selected1, setSelected1] = useState(true);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);

    const handleClick = (e) => {
        switch (e){
            case 1:
                setCheckSubButton1(true);
                setCheckSubButton2(false);
                setCheckSubButton3(false);
                setSelected1(true);
                setSelected2(false);
                setSelected3(false);
                break;
            case 2:
                setCheckSubButton1(false);
                setCheckSubButton2(true);
                setCheckSubButton3(false);
                setSelected1(false);
                setSelected2(true);
                setSelected3(false);
                break;
            case 3:
                setCheckSubButton1(false);
                setCheckSubButton2(false);
                setCheckSubButton3(true);
                setSelected1(false);
                setSelected2(false);
                setSelected3(true);
                break;
            case 4:
                setCheckSubButton1(false);
                setCheckSubButton2(false);
                setCheckSubButton3(false);
                setSelected1(false);
                setSelected2(false);
                setSelected3(false);
                break;
        };
    }
    return (
        <>
            <Header />
            <div className="colorBack">
                <LinkButtons
                    butLinking={handleClick}
                    models={arrModelFollowing}
                    select={[checkSubButton1, checkSubButton2, checkSubButton3]}
                />
                <div className={selected1 ? "d-block" : "d-none"}>
                    <h5 className="color-title d-flex justify-content-center mt-3">Following Channels</h5>
                    <NormalGrid />
                </div>
                <div className={selected2 ? "d-block" : "d-none"}>
                    <BodyGrid />
                </div>
                <div className={selected3 ? "d-block" : "d-none"}>
                    <h5 className="color-title d-flex justify-content-center">Recent Broadcast</h5>
                    <BodyGrid />
                    <h5 className="color-title d-flex justify-content-center">Oldest Videos</h5>
                    <BodyGrid />
                </div>
            </div>
        </>
    );
};

export default Following;