import {useCallback, useState} from "react";
import constate from "constate";

function useGoogleLoadScript({apiKey}) {
    const [isGoogleApiLoaded, setState] = useState(false);
    const loadGoogleScript = useCallback(() => {
        if (!isGoogleApiLoaded) {
            let script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=init`;
            script.async = true;
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
