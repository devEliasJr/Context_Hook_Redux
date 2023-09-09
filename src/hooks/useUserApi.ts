// useUserApi.js (seu novo hook personalizado)
import { useState, useEffect } from "react";
import { createUserService, getAllDataService } from "../Services/userServices";


export default function useUserApi() {
  const [users, setUsers] = useState<IDataProps[]>([]);
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const GetUsers = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await getAllDataService();
      if (res) {
        setUsers(res);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const CreateNewUser = async (userData: IDataProps) => {
    const newUser = await createUserService(userData);
    if (newUser) {
      setUsers([...users, newUser]);
    }
  };

  useEffect(() => {
    GetUsers();
  }, []);

  return { users, error, loading, CreateNewUser, GetUsers };
}
