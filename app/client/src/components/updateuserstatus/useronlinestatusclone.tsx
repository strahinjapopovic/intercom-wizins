import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { getProfile } from '../../utils/authent.js';
import { UPDATE_ONLINE_STATUS } from '../../utils/graphql/mutations.ts';
import type { PayloadGetUserTypes, LocalStorageOnlineStatus } from '../../../types/types.ts';
//-------------------------------------------------------------------------//
const UpdateOnlineStatusClone = () => {
    const [username, setUsername] = useState<string>('');
    const [onlineUserStatus, setOnlineUserStatus] = useState<string>('');
    const [updateOnlineStatus] = useMutation(UPDATE_ONLINE_STATUS);
    useEffect(() => {
        const getUsername = getProfile() as PayloadGetUserTypes | null;
        if (getUsername) {
            const userName = getUsername.data.username;
            let sessionStatusChangeObj = {
                username: userName,
                onlineStatus: 'Yes',
            };
            localStorage.setItem('online_status_change', JSON.stringify(sessionStatusChangeObj));
        }
        const localStoreData = localStorage.getItem('online_status_change');

        if (localStoreData !== null) {
            const parsedLocalStorageData: LocalStorageOnlineStatus = JSON.parse(localStoreData);
            const user = parsedLocalStorageData.username;
            const usrStatus = parsedLocalStorageData.onlineStatus;
            setUsername(user);
            setOnlineUserStatus(usrStatus);
            try {
                const updateStatus = async () => {
                    const { data } = await updateOnlineStatus({
                        variables: {
                            username: username,
                            online: onlineUserStatus,
                        }
                    });
                    data ? console.log(data) : console.log(`Error updating status`);
                }
                updateStatus();
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }
    }, [username]);
}
export default UpdateOnlineStatusClone;