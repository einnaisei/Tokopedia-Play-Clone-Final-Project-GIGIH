import {useEffect, useState} from "react";
import data from "../db.json";

function VideoList() {
    const [videoState, setVideoData] = useState([]);

    useEffect(() => {
        setVideoData(data.videos);
        console.log("data", data);
    }, []);

    return (
        <iframe width="560" height="315" src="https://www.youtube.com/embed/E_W1EI7uSPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/N-uaqc66uTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>,
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zxJIaG5JRe8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    )
}

export default VideoList;