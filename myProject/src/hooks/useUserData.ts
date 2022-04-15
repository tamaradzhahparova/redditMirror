import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

 interface IUserData {
  name?: string
  iconImg?: string
}

export const useUserData = () => {
  const [data, setData] = useState<IUserData>({})
  const token = useContext(tokenContext)
  useEffect(() => {
    if (!token || token == '' || token == 'undefined') {
      return
    }
    axios.get('https://oauth.reddit.com/api/v1/me',
      {
        headers: {Authorization: `bearer ${token}`}
      }).then((res) => {
      const userData = res.data;
      setData({name: userData.name, iconImg: userData.icon_img})
    }).catch(console.log)
    
  }, [token])
  
  return [data]
}