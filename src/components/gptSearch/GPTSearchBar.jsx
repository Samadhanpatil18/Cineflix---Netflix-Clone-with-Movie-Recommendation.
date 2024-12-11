import {API_OPTIONS, GPT_PROMPT} from "../../utils/constants.js";
import {useDispatch} from "react-redux";
import React, {useRef, useState} from "react";
import {addLoadingState} from "../../utils/loadSlice.js";
import {model} from "../../utils/genAI.js";
import {addGPTMovieResult} from "../../utils/gptSlice.js";

const searchMovieTMDB = async (title) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&language=en-US&page=1&region=IN`, API_OPTIONS)
    const json = await data.json();
    return json.results;
}

const GPTSearchBar = () => {

    const dispatch = useDispatch();
    const searchText = useRef(null)
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertMessege, setAlertMessege] = useState("")

    const openAlert = () => setIsAlertOpen(true);
    const closeAlert = () => setIsAlertOpen(false);

    const handleGPTSearchClick = async () => {
        dispatch(addLoadingState("Generating movies"))

        const query = GPT_PROMPT + searchText.current.value;

        const result = await model.generateContent(query)
            .then((result) => {
                dispatch(addLoadingState("Getting names"))

                const resultSet = result.response.text().split(',')

                const promiseSet = resultSet.map(async (title) => searchMovieTMDB(title))
                const movieSet = Promise.all(promiseSet).then((movies) => {
                    dispatch(addLoadingState("fetching details"))
                    dispatch(addGPTMovieResult(movies))
                })

            }).catch((err) => {
                // console.log(err)
                if (err.message === "[GoogleGenerativeAI Error]: Candidate was blocked due to SAFETY"){
                    setIsAlertOpen("⚠️ Explicit Content !")
                    openAlert()
                }
                else {
                    setAlertMessege("Couldn't get movies !")
                    openAlert()
                }

                dispatch(addLoadingState(null))
            })

    }


    return (
        <div className="p-10">
            <form
                className="bg-black grid grid-cols-4 md:grid-cols-12 sm:grid-cols-6 m-auto md:w-1/2 md:gap-10 mt-16"
                onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    ref={searchText}
                    placeholder={"What would you like to watch today ?"}
                    className="p-4 bg-gray-800 col-span-3 md:col-span-8"
                />
                <button
                    className="p-2 m-2 bg-red-700 text-white rounded-lg col-span-1 md:col-span-4"
                    onClick={handleGPTSearchClick}>
                    Search
                </button>
            </form>
            <AlertDialog
                isOpen={isAlertOpen}
                onClose={closeAlert}
                title={alertMessege}
                message="try to use different prompt"
            />

        </div>
    );
};


const AlertDialog = ({ isOpen, onClose, title, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-70"></div>
            <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg max-w-lg mx-auto z-50">
                <div className="px-6 py-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="mt-2">{message}</p>
                </div>
                <div className="px-6 py-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};



export default GPTSearchBar;