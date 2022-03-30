import {useCallback, useState} from "react";
import constate from "constate";

function useGoogleLoadScript({apiKey}) {
    const [isGoogleApiLoaded, setState] = useState(false);
    const loadGoogleScript = useCallback(() => {
        const scriptAlreadyLoaded = document.getElementById('scriptLoader');
        if(scriptAlreadyLoaded){
            console.log('JS API is already loaded');
            setState(true);
            return;
        }
        if (!isGoogleApiLoaded) {
            let script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=init`;
            script.async = true;
            script.id = 'scriptLoader';
            window.init = () => {
                console.log(`JS API is loaded and available`);
            };
            document.head.appendChild(script);
            setState(true);
        }
    })
    return {
        isGoogleApiLoaded,
        loadGoogleScript,
    }
}

export const [
    GoogleLoadScriptProvider,
    getGoogleLoadScript
] = constate(useGoogleLoadScript);
