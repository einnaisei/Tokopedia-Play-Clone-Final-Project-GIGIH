import {useEffect, useState} from "react";
import data from "../db.json";

function playlistID() {
    const [videoState, setVideoData] = useState([]);

    useEffect(() => {
        setVideoData(data.videos);
        console.log("data", data);
    }, []);

    return (
        <div className="video-container">
            {videos.map(video => (
                <div key={video.videoId} className="video-box">
                    <iframe
                        title={`YouTube Video ${video.videos}`}
                        width="560"
                        height="315"
                        src={`https://youtu.be/E_W1EI7uSPY${video.videos}`}
                        allowFullScreen
                    ></iframe>
                      <iframe
                        title={`YouTube Video ${video.videos}`}
                        width="560"
                        height="315"
                        src={`https://youtu.be/zxJIaG5JRe8${video.videos}`}
                        allowFullScreen
                    ></iframe>
                    <iframe
                        title={`YouTube Video ${video.videos}`}
                        width="560"
                        height="315"
                        src={`https://youtu.be/N-uaqc66uTU${video.videos}`}
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
}
export default playlistID;