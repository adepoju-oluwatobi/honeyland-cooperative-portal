import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    let menuOpenBtn = document.getElementById('menu-open-btn')
    let menuCloseBtn = document.getElementById('menu-close-btn')
    let navMenu = document.getElementById('nav-menu')
    let dropdown = document.getElementById('account-dropdown')

    function openNav(){
        navMenu = document.getElementById('nav-menu').style.display = "initial"
        menuOpenBtn = document.getElementById('menu-open-btn').style.display = "none"
        menuCloseBtn = document.getElementById('menu-close-btn').style.display = "inline-block"
    }

    function closeNav(){
        navMenu = document.getElementById('nav-menu').style.display = "none"
        menuCloseBtn = document.getElementById('menu-close-btn').style.display = 'none'
        menuOpenBtn = document.getElementById('menu-open-btn').style.display = "block"
    }

    function loginOption(){
        dropdown = document.getElementById('account-dropdown').style.display = "block"
    }
  return (
    <>
    <div className='container bg-[#D9D9D9] md:hidden'>
        {/*Mobile Menu */}
        <div className='mobile-header'>
            <div className='flex justify-between items-center'>
                <div className='site-title'>
                    <Link to='/'><p className='font-bold text-lg'> Honeyland Cooperative <span>Society</span></p></Link>
                </div>

                <div className='menu-toggle transition-all duration-500'>
                    <div id='menu-open-btn' onClick= {openNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>
                    </div>

                   <div className='hidden' id='menu-close-btn' onClick={closeNav}>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                   </div>

                </div>
            </div>
        </div>
    </div>
      {/*mobile nav-menu */}
      <div className='font-bold nav-menu absolute w-[90%] left-5 hidden transition-all duration-500' id='nav-menu'>
      <nav className='flex flex-col gap-4 rounded-lg bg-black p-8 text-white text-center mt-2 w-[90%] m-auto'>
         <Link to='/'>Home</Link>
         <Link to='/under-construction'>About</Link>
         <Link to='/under-construction'>Contact</Link>
         <Link to='/login' className='primary-btn m-auto'>Login</Link>
        <Link to='/register' className='secondary-btn m-auto'>Register</Link>
      </nav>
      </div>

      {/* Medium nav-menu */}
      <div className='hidden bg-slate-200 md:flex justify-between items-center p-4'>
        <div>
            <Link to='/'><p className='font-bold text-lg cursor-pointer'>Honeyland Cooperative Society</p></Link>
        </div>

        <div>
            <nav className='text-xs'>
                <Link className='mr-2' to='/under-construction'>Home</Link>
                <Link className='mr-2' to='/under-construction'>About Us</Link>
                <Link className='mr-2' to='/under-construction'>Contact Us</Link>
                <Link className='mr-2' to='/login'>Login</Link>
                <Link className='mr-2 bg-black px-4 py-2 text-white rounded-xl' to = '/register'>Become a member</Link>
            </nav>
        </div>
      </div>
  </>
  )
}

export default Header