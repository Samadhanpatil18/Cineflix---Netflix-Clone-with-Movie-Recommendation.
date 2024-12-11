import React, {lazy, Suspense} from 'react';
import Loader from "react-js-loader";
import GPTSearchBar from "./GPTSearchBar.jsx";
import {useSelector} from "react-redux";
import GolLoader from "../browse/GolLoader.jsx";

const GPTSuggestion = lazy(() => import("./GPTSuggestion.jsx"));


const GPTSearch = () => {
    const loadingState = useSelector((store) => store.loader.loadingState);
    return (
        <div className={"w-screen h-screen login"}>
            <GPTSearchBar/>
            {
                loadingState ? <div className="md:top-[43%] top-[37%]">
                    <Loader type='hourglass' bgColor="yellow" color="white" title={loadingState} size={100}/>
                </div> : <></>
            }

            <Suspense fallback={<GolLoader/>}>
                <GPTSuggestion/>
            </Suspense>

        </div>
    );
};

export default GPTSearch;