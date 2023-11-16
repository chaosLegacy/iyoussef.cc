import { Collection } from '@lib/constants';
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { SetStateAction, useEffect, useState } from 'react';
import { FIRESTORE_DB } from '@utils/firebase';

export const useUser = (uid?: string) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const usersCollection = collection(FIRESTORE_DB, Collection.USERS); // Replace 'users' with your collection name

    useEffect(() => {
        // Fetch the list of users from Firestore
        const fetchData = async () => {
            const querySnapshot = await getDocs(usersCollection);
            const userList: SetStateAction<any[]> = [];
            querySnapshot.forEach((doc) => {
                userList.push({ id: doc.id, ...doc.data() });
            });
            setUsers(userList);
        };

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (uid) {
            const userRef = doc(usersCollection, uid);
            const fetchUser = async () => {
                try {
                    const userDoc = await getDoc(userRef);
                    if (userDoc.exists()) {
                        setUser({ id: uid, ...userDoc.data() });
                    } else {
                        setUser(null);
                    }
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            };

            fetchUser();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uid]);

    const createUser = async (userData: any) => {
        // Create a new user in Firestore
        const newUserRef = doc(usersCollection, userData.uid);
        await setDoc(newUserRef, userData);
    };

    const updateUser = async (userId: string, newData: any) => {
        // Update user data in Firestore
        const userRef = doc(usersCollection, userId);
        await updateDoc(userRef, newData);
    };

    const deleteUser = async (userId: string) => {
        // Delete a user from Firestore
        const userRef = doc(usersCollection, userId);
        await deleteDoc(userRef);
    };

    return {
        users,
        user,
        createUser,
        updateUser,
        deleteUser,
    };
}
