// useFetchData.ts
import { useState, useEffect } from 'react';
import { fetchFakeData } from '../service/user.service';
import { TUser } from '../type/table.user.type';


const useFetchData = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchFakeData();
        setUsers(result);
      } catch (error) {
        console.error('Lỗi khi fetch dữ liệu:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { users, loading,setUsers };
};

export default useFetchData;
