import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ONLINE_STATUS } from '../../utils/graphql/mutations.ts';
import type { LocalStorageOnlineStatus } from '../../../types/types.js';
//-------------------------------------------------------------------------//
const UpdateOnlineStatusChange = () => {
    const [username, setUsername] = useState<string>();
    const [onlineUserStatus, setOnlineUserStatus] = useState<string>();
    const [updateOnlineStatus] = useMutation(UPDATE_ONLINE_STATUS);
    useEffect(() => {
        const updateUserStatus = async () => {
            const localStoreData = localStorage.getItem('online_status_change');
            if (localStoreData !== null) {
                const parsedLocalStorageData: LocalStorageOnlineStatus = JSON.parse(localStoreData);
                const user = parsedLocalStorageData.username;
                const usrStatus = parsedLocalStorageData.onlineStatus;
                setUsername(user);
                setOnlineUserStatus(usrStatus);
                if (onlineUserStatus === "Yes") {
                    try {
                        const updateStatus = async () => {
                            const { data } = await updateOnlineStatus({
                                variables: {
                                    username: username,
                                    online: "No",
                                }
                            });
                            data ? localStorage.removeItem('online_status_change') : console.log(`Error updating status`);
                        }
                        updateStatus();
                    } catch (error) {
                        console.error("Error parsing user data:", error);
                    }
                }
            }
        }
        updateUserStatus();
    }, [username]);
    //return { username, onlineUserStatus };
}
export default UpdateOnlineStatusChange;