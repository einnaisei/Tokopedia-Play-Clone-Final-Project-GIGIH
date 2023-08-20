import { useEffect, useState } from 'react';
import Homepage from '../components/playlistID';

export function fetchPlaylist() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Homepage);
        }, 500); 
    });
}


export default Homepage;