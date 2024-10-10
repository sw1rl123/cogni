import React from 'react';
import { useState, useEffect } from 'react';
import { ReactComponent as LogoSvg } from './img/logo.svg';
import './LoginForm.css';

function LoginForm() {

  return (
    <div className='login__wrapper'>
        <div className='login__blur'>
            <div className='login__ball'></div>
            <div className='login__ball'></div>
            <div className='login__ball'></div>
            <div className='login__ball'></div>
        </div>

        <form action="" className='login__form loginform'>
            <h1 className='loginform__header'>Вход в «COGNI»</h1>
            <input type="text" placeholder='Введите логин' className='loginform__input'/>
            <input type="text" placeholder='Введите пароль' className='loginform__input'/>
            <button className='loginform__button'>Войти</button>
            <a href="" className='loginform__link'>Зарегистрироваться</a>
        </form>
        <div className='login__info info'>
            <LogoSvg className='info__logo'/>
            <p className='info__logoText'>COGNI</p>
            <a href="" className='info__link'>О сервисе</a>
        </div>
    </div>
  );
};

export default LoginForm;
