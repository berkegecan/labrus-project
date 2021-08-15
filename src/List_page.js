import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';
import './List_page.css';
import List from './List/List';

function List_page() {
  const history = useHistory();
  function goLogin() {
    history.push('/');
  }

  return (
    <div className="List">
      <div className="List-container">
        <div className="List-picture"></div>
        <div className="List-menu">
          <a className="btn-list" href="">Menu 1</a>
          <a className="btn-list selected" href="">
            Menu 2
            <span className="bildirim">27</span>
          </a>
          <a className="btn-list" href="">Menu 3</a>
        </div>
        <div className="List-selections">
          <div className="flex-container">
            <div className="flex-item1">
              <div className="side-menu">
                <ul>
                  <li><a className="selected1" href="">Anasayfa</a></li>
                  <li><a href="">Kullanıcılar</a></li>
                  <li><a href="">Paketler</a></li>
                  <li><a href="" onClick={goLogin}>Çıkış</a></li>
                </ul>
              </div>
            </div>
            <div className="flex-item2">
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List_page;
