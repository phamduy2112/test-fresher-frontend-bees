import { fakeUsers, timeFetchFakeData } from "../data/data";
import { TUser } from "../type/table.user.type";


export  function fetchFakeData(): Promise<TUser[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeUsers);
      }, timeFetchFakeData); 
    });
  }