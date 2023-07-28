import { VanillaOidc } from '@axa-fr/oidc-client';
import { ComponentType, useEffect } from 'react';

const SilentCallbackManager: ComponentType<any> = ({ configurationName }) => {
    useEffect(() => {
        const playCallbackAsync = async () => {
            const getOidc = VanillaOidc.get;
            const oidc = getOidc(configurationName);
            oidc.silentLoginCallbackAsync();
        };
        playCallbackAsync();
    }, []);

    return <></>;
};

export default SilentCallbackManager;
