import React from 'react';
import '../css/Home.css';

const Home = () => {
  const REST_API_KEY = [REST_API_KEY];
  const REDIRECT_URI = [REDIRECT_URI];
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <div>
      <div className="btn_login">
        <span>
          <a href={KAKAO_AUTH_URL}>Kakao Login</a>
        </span>
      </div>
    </div>
  );
};

export default Home;
