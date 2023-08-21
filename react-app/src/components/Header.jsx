import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

//ヘッダの定義
export const Header = () => {
      return (
        <header>
          <div style={{position:"absolute", margin: "-15px 0px"}}>
            <h1>ヘッダです</h1>
          </div>
          <div style={{position:"relative", textAlign:"right", paddingTop: "30px"}}>
            <Link to="/portal" style={{paddingRight: "5px"}}>ポータル</Link>
            <Link to="/userbox" style={{paddingRight: "5px"}}>ユーザーリスト</Link>
            <button>ログアウト</button>
          </div>
          <hr/>
        </header>
      );
};
