import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<main>
				<section>
					{/* <!-- Hero --> */}
					<div
						class='relative overflow-hidden min-h-screen flex justify-center items-center w-full'
						style={{
							backgroundImage: `url("https://axyoc73bayij.compat.objectstorage.me-jeddah-1.oraclecloud.com/prod-donations-public-bucket/blobs/bsvy4cs3aro88vl74rvubj2l8qeq")`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							objectFit: 'cover',
						}}>
						<div class='z-10 w-full h-[600px] overflow-hidden flex justify-center items-center'>
							<div class='max-w-4xl  mx-auto'>
								<div class='text-center mx-auto h-full'>
									{/* <!-- Title --> */}
									<div class='mb-10'>
										<h1 class='block font-semibold text-white dark:text-white text-4xl md:text-5xl lg:text-6xl '>
											Giving In Secret And In Public
										</h1>
									</div>
									{/* <!-- End Title --> */}
									<div class='mb-10'>
										<p class='text-lg text-gray-300 dark:text-gray-400'>
											The National Donations Platform (DONATE) is the easiest and best
											solution to connect the donor to the needy in various regions and
											cities of KSA, through a safe and transparent donation process
											under the supervision of the Ministry of Human Resources and Social
											Development.
										</p>
									</div>
									{/* <!-- Buttons --> */}
									<div class='w-full'>
										<Link to={'/'}>
											<button class='text-center bg-amber-400 hover:bg-amber-500 text-white text-xl font-semibold rounded-md  py-3 px-4 uppercase active:scale-95 duration-150 ease-in-out'>
												Donate Now
											</button>
										</Link>
									</div>
									{/* <!-- End Buttons --> */}
								</div>
							</div>
						</div>
					</div>
					{/* <!-- End Hero --> */}
				</section>
			</main>
		</>
	);
};

export default Home;
