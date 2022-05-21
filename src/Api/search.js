import { API_DATA } from "../Services/constants";

export const getSearchData = async (value) => {
    const res = await fetch(`${API_DATA.URL}&q=[${value}]&key=${API_DATA.API_KEY}`);
    return await res.json();
};
