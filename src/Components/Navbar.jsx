import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<header class='sticky top-0  flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm bg-white'>
				<nav
					class='relative w-full  py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700 shadow-md'
					aria-label='Global'>
					<div class='flex items-center justify-between'>
						<Link
							to={'/'}
							class='flex-none text-2xl font-bold text-[#307979] hover:text-amber-500 duration-150 ease-in-out logo'>
							<p className='flex flex-col gap-y-0'>
								<span className='leading-3 tracking-[0.17em]'>Mezquita</span>
								<span className='text-base tracking-wider text-center'>De Fuengirola</span>
							</p>
						</Link>
						<div class='md:hidden'>
							<button
								type='button'
								class='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
								data-hs-collapse='#navbar-collapse-with-animation'
								aria-controls='navbar-collapse-with-animation'
								aria-label='Toggle navigation'>
								<svg
									class='hs-collapse-open:hidden w-4 h-4'
									width='16'
									height='16'
									fill='currentColor'
									viewBox='0 0 16 16'>
									<path
										fill-rule='evenodd'
										d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
									/>
								</svg>
								<svg
									class='hs-collapse-open:block hidden w-4 h-4'
									width='16'
									height='16'
									fill='currentColor'
									viewBox='0 0 16 16'>
									<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
								</svg>
							</button>
						</div>
					</div>
					<div class='hidden overflow-hidden transition-all duration-300 basis-full grow md:block'>
						<ul class='flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-center md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7 py-6'>
							<li class='nav-hover-effect'>
								<NavLink to={'/'}>Home</NavLink>
							</li>
							<li className='nav-hover-effect'>
								<NavLink to={'/donation'}>Donation Opportunities</NavLink>
							</li>
							<li class='nav-hover-effect'>
								<NavLink to={'/partners'}>Partners</NavLink>
							</li>
						</ul>
					</div>
					{/* Mobile  */}
					<div
						id='navbar-collapse-with-animation'
						class='hs-collapse hidden absolute bottom-0 left-0 translate-y-full overflow-hidden transition-all duration-300 basis-full grow md:hidden bg-white w-full shadow-inner'>
						<ul class='flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-center md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7 py-6'>
							<li class='nav-hover-effect'>
								<NavLink to={'/'}>Home</NavLink>
							</li>
							<li className='nav-hover-effect'>
								<NavLink to={'/donation'}>Donation Opportunities</NavLink>
							</li>
							<li class='nav-hover-effect'>
								<NavLink to={'/partners'}>Partners</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
