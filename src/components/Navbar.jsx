import {useEffect} from "react";


const navBarMenuData=[
  {
    id:0,
    title:'Movies',
    link:'movies',
    submenu:1
  },
  {
    id:1,
    title:'TV Series',
    link:'tv-series',
    submenu:1
  },
  {
    id:2,
    title:'Genre',
    link:'genre',
    submenu:1
  },
  {
    id:3,
    title:'Live TV',
    link:'live-tv',
  },
  {
    id:4,
    title:'My List',
    link:'my-list',
  },
  {
    id:5,
    title:'Request',
    link:'request',
  },

]

const Navbar = () => {

  useEffect(() => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (!localStorage.getItem('color-theme')) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon.classList.remove('hidden');
    } else {
      themeToggleDarkIcon.classList.remove('hidden');
    }

    const toggleTheme = () => {
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');

      const isDarkMode = document.documentElement.classList.toggle('dark');
      localStorage.setItem('color-theme', isDarkMode ? 'dark' : 'light');
    };
    themeToggleBtn.addEventListener('click', toggleTheme);
    return () => {
      themeToggleBtn.removeEventListener('click', toggleTheme);
    };
  }, []);

  return (

    <div className='fixed w-full top-0 glass-bg-gradient z-[1000]'>
      <nav className="container">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button id="theme-toggle" type="button"
                    className="text-black dark:text-gray-100 rounded-lg text-sm p-2.5">
              <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </button>

            {/*<button type="button"*/}
            {/*        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get*/}
            {/*  started*/}
            {/*</button>*/}
            <button data-collapse-toggle="navbar-cta" type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-cta" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>


          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul
              className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-1.5 md:flex-row md:mt-0 gap-2">
              {navBarMenuData.map(item => (
                <li key={item.id}>
                  <div>
                    <button
                      className="btn pl-0 w-full bg-transparent border-none text-black dark:text-white flex justify-between font-md">
                      <span className="text-[16px]">{item.title}</span>
                      <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <div className="hidden border-t-[3px] border-[#c1141e] bg-gray-500 bg-opacity-20"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </div>

  );
};

export default Navbar;
