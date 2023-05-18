const React = require('react');
const Layout = require('./Layout');

function NavBar({title, user}){

    return (
 
<div id='nav-bar'>

{user && <h4 id='hi' className='nav-item'>{`Привет,  ${user.name} !`}</h4>}

<a href='/' className='nav-item'>Main</a>
<a href='/housings/1' className='nav-item'>Housings</a>
{user ? <a href='/housings/my/housings' className='nav-item'>My housings</a> : 
<p className='nav-item' style={{color: 'red'}}>войдите или зарегистрируйтесь!</p>
} 
{user && <a href="/favorite" className='nav-item'>my favorite</a>}

{ user
&&
<div className='select-type nav-item'>
    <p>выберите тип жилья</p>
<select name="select" className='select'>
    <option value="room">комната</option>
    <option value="house">дом</option>
    <option value="apartment">квартира</option>
</select>
</div>
}

<div id='pers'>
{user ? <a className='pers-item' id='user-out' href='/pers/logout'>Выйти</a> : <a className='pers-item' id='user-in' href='/pers/log'>Войти</a>}
            <a className='pers-item' id='reg' href='/pers/reg'>Зарегистрироваться</a>
</div>

</div>
 
    )
}

module.exports = NavBar;