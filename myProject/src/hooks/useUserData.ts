import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IUserData {
  name?: string
  iconImg?: string
}

export const instance = axios.create({
  baseURL: "https://oauth.reddit.com/",
});

export const useUserData = () => {
  const [data, setData] = useState<IUserData>({})
  const token = useContext(tokenContext)

  useEffect(() => {
    if (!token || token == '' || token == 'undefined') {
      return
    }
    instance.get('api/v1/me.json',
      {
        headers: {Authorization: `bearer ${token}`}
      }).then((res) => {
      const userData = res.data;
      const iconImgWithoutParams = userData.icon_img.split('?')
      setData({name: userData.name, iconImg: iconImgWithoutParams[0]})
    }).catch(console.log)

  }, [token])

  return [data]
}