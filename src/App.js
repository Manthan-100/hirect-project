import { useState } from "react";
import Header from "./components/header";
import SectionCard from "./components/card";
import { getSearchData } from "./Api/search";
import Loader from "./components/loader";
import "./style.css";

const App = () => {
    const [videosList, setVideosList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onChangeSearch = async (e) => {
        setIsLoading(true);
        const { value } = e.target;
        if (value.length >= 2) {
            const res = await getSearchData(value);
            if (res.items) {
                setVideosList(res.items);
            }
        } else {
            setVideosList([]);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <Header onChangeSearch={onChangeSearch} />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {videosList.length != 0 ? (
                        <div className="card-parent">
                            {videosList.map((item, itemIndex) => (
                                <SectionCard key={itemIndex} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="search-text">Search for Videos at top.</div>
                    )}
                </>
            )}
        </div>
    );
};

export default App;
