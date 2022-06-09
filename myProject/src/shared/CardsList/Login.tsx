import React, {FC} from 'react';
import styles from "./Login.module.css";


interface LoginProps {
}

const URI = process.env.NODE_ENV === "development" ? 'http://localhost:3000/auth' : 'https://my-own-reddit.herokuapp.com/auth'

const Login: FC<LoginProps> = () => {
  return <div className={styles.Login}>
    <div className={styles.text}>Пожалуйста, зарегистрируйтесь</div>
    <div>
      <a href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=RANDOM_STRING&redirect_uri=${URI}&duration=permanent&scope=read submit identity`}
      className={styles.link}>Войти</a>
    </div>
    
  </div>
};

export default Login;
