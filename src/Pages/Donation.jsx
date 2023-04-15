import map from '../assets/map.png';

const Donation = () => {
	return (
		<>
			<main>
				<section
					className='min-h-screen relative sm:p-0 '
					style={{
						backgroundImage: `url("https://axyoc73bayij.compat.objectstorage.me-jeddah-1.oraclecloud.com/prod-donations-public-bucket/blobs/bsvy4cs3aro88vl74rvubj2l8qeq")`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						objectFit: 'cover',
					}}>
					<div className='xl:p-0 rounded-lg overflow-hidden w-full'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.9483515632937!2d-4.626835000000001!3d36.5312404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e21287073883%3A0x72e0d551fd4d10d0!2sMezquita%20de%20Fuengirola%2C%20C.%20M%C3%A9ndez%20N%C3%BA%C3%B1ez%2C%206%2C%2029640%20Fuengirola%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2seg!4v1680656151865!5m2!1sen!2seg'
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
							className='h-[400px] w-full'></iframe>
					</div>

					<div class=' px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-white'>
						<div className='max-w-7xl bg-gray-100 mx-auto rounded-3xl py-10 flex flex-col md:flex-row justify-evenly items-center gap-y-5'>
							<div class='max-w-xs'>
								<h2 class=' text-4xl text-center md:text-start font-bold md:leading-tight text-[#307979]'>
									Donation Opportunity
								</h2>
								<p class='mt-1 hidden md:block text-gray-600 dark:text-gray-400'>
									Lorem ipsum dolor sit amet consectetur adipisicing.
								</p>
							</div>
							{/* Card */}
							<div className='w-[383px] h-fit bg-white  rounded-3xl overflow-hidden shadow-md'>
								{/* Header Image */}
								<div
									className='h-[114px] flex justify-center items-start'
									style={{
										backgroundImage: `url("https://axyoc73bayij.compat.objectstorage.me-jeddah-1.oraclecloud.com/prod-donations-public-bucket/blobs/prm0x5d1nu5hzdzod7w93tpvp36k")`,
										backgroundPosition: 'center',
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat',
										objectFit: 'cover',
									}}>
									<p className='text-[#307979] bg-[#e8f8f5] w-fit py-1 px-3 rounded-b-2xl'>
										Permanent
									</p>
								</div>
								{/* Body */}
								<div className='p-6 text-gray-400'>
									<div className='text-[#307979] text-sm flex justify-between items-center mb-2'>
										<p>Paying rents for the poor of the Sacred Land</p>
										<button className='border border-[#307979] rounded-full px-3 py-1'>
											Details
										</button>
									</div>
									<div className='flex justify-start items-center gap-x-2 text-sm  mb-7'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-5 h-5'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
											/>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
											/>
										</svg>
										<p>All over the Kingdom </p>
									</div>
									<div className='mb-[80px]'>
										<p className='text-sm'>
											Taking care of Mosques by meeting the general needs of Mosques in
											partnership with NGOs in the Kingdom
										</p>
									</div>

									<div className='flex justify-center items-center bg-slate-'>
										<button className='border border-[#307979] text-[#307979] bg-gray-100 rounded-full px-3 py-3 text-sm w-[60%] active:scale-95 duration-150 ease-in-out'>
											Donate
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Donation;
