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
							backgroundImage: `url("https://uploads-ssl.webflow.com/61d62bbdbf92e35450b01a00/63f2c0203f4efb4f66513d4d_video(6)-poster-00001.jpg")`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							objectFit: 'cover',
							fontSize: '1rem'
						}}>
						<div class='z-10 w-full h-[600px] overflow-hidden flex justify-center items-center'>
							<div class='max-w-4xl  mx-auto'>
								<div class='text-center mx-auto h-full'>
									{/* <!-- Title --> */}
									<div class='mb-10'>
										<h1 class='block font-semibold text-white dark:text-white text-2xl md:text-3xl lg:text-4xl '>
										Estamos desarrollando un plan para todo
										</h1>
									</div>
									{/* <!-- End Title --> */}
									<div class='mb-10'>
										<p class='text-lg text-gray-300 text-white dark:text-gray-400'>
										Participar en un proyecto es una acción positiva para ayudarte a mejorar y ayudar a los demás.  
										Mejora tu futuro y el futuro de los tuyos es fácil, comienza con buena voluntad y se desarrolla con buenas  palabras, 
										consejo y efectiva colaboración. 
										</p>
									</div>
									{/* <!-- Buttons --> */}
									<div class='w-full'>
										<Link to={'/partners'}>
											<button class='text-center bg-amber-400 hover:bg-amber-500 text-white text-xl font-semibold rounded-md  py-3 px-4 uppercase active:scale-95 duration-150 ease-in-out'>
											 Donar
											</button>
										</Link>
									</div>
									
									{/* <!-- End Buttons --> */}
								</div>
							</div>
						</div>
					</div>
					{/* <!-- End Hero --> */}

					
					<div class='z-10 w-full h-[400px] overflow-hidden flex justify-center items-center'
					style={{
						
					}}>
							<div class='max-w-4xl  mx-auto '>
								<div class='mx-auto h-full'>
									{/* <!-- Title --> */}
									<div class='mb-10'>
										<h1 class='block font-semibold text-black dark:text-white text-2xl md:text-3xl lg:text-4xl text-center'>
										  La Comunidad
										</h1>
									</div>
									{/* <!-- End Title --> */}
									<div class='mb-10'>
										<p class=''>
										La Comunidad Islámica Suhail de la Costa del Sol es una comunidad religiosa inscrita en el Registro de 
										Entidades Religiosas de España con el nº xxxx. 
										<br/>
										Misión 
										Nuestra misión es difundir la paz y hermandad, y ayudar a todas las personas a lograr una vida espiritual tranquila.
										<br/>
										Visión: 
										<br/>
										Valores:

										</p>
									</div>
									{/* <!-- Buttons 
									<div class='w-full'>
										<Link to={'/'}>
											<button class='text-center bg-amber-400 hover:bg-amber-500 text-white text-xl font-semibold rounded-md  py-3 px-4 uppercase active:scale-95 duration-150 ease-in-out'>
												Donate Now
											</button>
										</Link>
									</div>
									--> */}
									

									
								</div>
							</div>
						</div>
				




						<div >
							<div class='max-w-4xl  mx-auto '>
							<div class='mx-auto h-full'>
									{/* <!-- Title --> */}
									<div class='mb-10'>
										<h1 class='block font-semibold text-black dark:text-white text-2xl md:text-3xl lg:text-4xl text-center'>
										Proyectos y Programas
										</h1>
									</div>
									{/* <!-- End Title --> */}
									<div class='mb-10'>
										<p class=''>									
										<b>Programa de Ayudas Sociales</b>
										<br/>
										Desde 2008, se comenzó, junto con otras entidades, el programa de ayuda social a las familias vulnerables o con necesidad. 
										<br/>
										De este programa se benefician más de 4200 familias anualmente.
										La Comunidad Islámica Suhail de la Costa del Sol, junto con la Unión de Comunidades y Asociaciones de España, organizan campañas en las que se definen las familias más necesitadas para cubrir sus necesidades mínimas en forma de ayuda alimenticia u otro tipo de ayudas. 
										<br/>
										

										</p>

										
									</div>

									

									{/* <!-- Buttons
									<div class='w-full'>
										<Link to={'/'}>
											<button class='text-center bg-amber-400 hover:bg-amber-500 text-white text-xl font-semibold rounded-md  py-3 px-4 uppercase active:scale-95 duration-150 ease-in-out'>
												Donate Now
											</button>
										</Link>
									</div> --> */}
								</div>

								<div class='mb-10'>
										<p class=''>									
										<b>El Registro de Población Musulmana </b>
										<br/>
										Durante la historia de los musulmanes de España, y a la hora de solicitar cualquier servicio para la comunidad, nos enfrentamos a una pregunta muy sencilla, 
										pero muy difícil de contestar: ¿Cuántos son los beneficiarios de este servicio?
										<br/>
										En realidad, aunque sabemos que la comunidad musulmana es mucho mayor que las cifras que se comunican en los medios, esta información nunca ha sido documentada, lo que nos ha motiviado hace años a crear esta iniciativa: formar un registro de los musulmanes para poder estimar las necesidades reales, tanto actuales como futuras, y poder servirlas.
										<br/>
										<dev class='block font-semibold text-primary dark:text-white'>
										<Link   to="https://forms.gle/aLj1QQhPeQSZV16J7"><p style={{
										color: "blue"
									}}
									>Inscribeme</p></Link>
										<Link  class='block font-semibold text-primary dark:text-white' to="https://drive.google.com/file/d/1KoWFLDIRavkWPzZuWD4IgbY93INM7xW9/view?usp=sharing">
											<p style={{
										color: "blue"
									}}
									>Lee la politica de privacidad y tratamiento de datos</p></Link>
										</dev>
										</p>
									</div>
								
									<div class='mb-10'>
										<p class=''>									
										<b>El Cementerio Musulmán</b>
										<br/>
										A día de hoy, la comunidad musulmana en Andalucía, y generalmente en España, sufre la escasez de cementerios suficientes para los fallecidos musulmanes. 
										<br/>
										El crecimiento continuo de la población musulmana en Andalucía genera la necesidad de un cementerio adaptado a los rituales musulmanes, ya que el último y único que tuvo la comunidad fue el cementerio musulmán de Fuengirola, que actualmente se encuentra lleno.
										<br/> 
										El proyecto del nuevo cementerio
										<br/>
										Se plantea de crear un parque cementerio con una extensión mínima de 20 mil metros, que abarca: zona de tanatorio, zona de ritual (Oratorio), aseos, tumbas categorizadas por grupos conforme a la ley de sanidad  andaluza, otras instalacion y almacenes, zonas verdes y parking.
										<br/> 
										El numero de plazas objetivas es de 12500 tumbas.
										<br/>
										El presupuesto estimado del proyecto hasta su puesta en marcha es 3000 mil euros, comenzando por comprar el terreno, para luego acondicionarlo, pagar los gastos de profesionales, tributos, licencias, garantías, instalaciones y edificaciones necesarias.
										<br/> 
										Para este fin, se ha destinado una cuenta bancaria en el banco BBVA, para la recaudación de fondos para la compra del terreno y los demás gastos y tributos. Esta cuenta está destinada sola y únicamente para el cementerio, por lo que cualquier otra donación para un fin distinito debe ser comunicada con la comunidad anticipadamente para facilitarle el acceso a la cuenta pertinente.
										<br/>
										</p>
									</div>

							</div>
						</div>



						<div >
							<div class='max-w-4xl  mx-auto '>
							<div class='mx-auto h-full'>
									{/* <!-- Title --> */}
									<div class='mb-10'>
										<h1 class='block font-semibold text-black dark:text-white text-2xl md:text-3xl lg:text-4xl text-center'>
										Formación
										</h1>
									</div>
									{/* <!-- End Title --> */}
									<div class='mb-10'>
										<p class=''>									
										<b>Formación Religiosa para adultos</b>
										<br/>
										La comunidad Islamica Suhail de la Costa del Sol ofrece una oferta formativa devesificada  y flixible que encaja con la necesidad de cada persona.										<br/>
										Dentro de los programas de formacion religiosa que se ofrece la Comunidad es el programa de formacion religiosa para adultos, 
										la cual  incluye cursos de valores islamicos, curso de memorizacion del coran, 
										cursos especiales para mujeres y cursos de formacion de imanes y guias espirituales.
										<br/>
										

										</p>

										
									</div>

									

									{/* <!-- Buttons
									<div class='w-full'>
										<Link to={'/'}>
											<button class='text-center bg-amber-400 hover:bg-amber-500 text-white text-xl font-semibold rounded-md  py-3 px-4 uppercase active:scale-95 duration-150 ease-in-out'>
												Donate Now
											</button>
										</Link>
									</div> --> */}
								</div>

								<div class='mb-10'>
										<p class=''>									
										<b>Nuevos Musulmanes </b>
										<br/>
										La comunidad abre sus puertas a todos los interesados en conocer nuestra religion y la historia y cultura islamica y 
										por tanto se ofrece un curso abierto a todo el publico donde se puede informar y debatir sobre todos los temas religiosas, 
										os escochamos y ayudamos a aclarar conceptos y estereotipos erroños.
										<br/> 
										</p>
									</div>
								
									<div class='mb-10'>
										<p class=''>									
										<b>Centro de idiomas</b>
										<br/>
										Dentro de las actividades formativas de la Comunidad se ofrece cursos de idiomas , como el Arabe, ingles y español para extranjeros.
										<br/>
										</p>
									</div>

							</div>
						</div>



						
						
						<div >
							<div class='max-w-4xl  mx-auto '>
							<div class='mx-auto h-full'>
									{/* <!-- Title --> */}
									<div class='mb-10'>
										<h1 class='block font-semibold text-black dark:text-white text-2xl md:text-3xl lg:text-4xl text-center'>
										Recursos
										</h1>
									</div>
									{/* <!-- End Title --> */}
									<div class='mb-10'>
										<p class=''>									
										<b>Noticias</b>
										<br/>
										Blog.
										<br/>
										

										</p>

										
									</div>

									

									{/* <!-- Buttons
									<div class='w-full'>
										<Link to={'/'}>
											<button class='text-center bg-amber-400 hover:bg-amber-500 text-white text-xl font-semibold rounded-md  py-3 px-4 uppercase active:scale-95 duration-150 ease-in-out'>
												Donate Now
											</button>
										</Link>
									</div> --> */}
								</div>

								<div class='mb-10'>
										<p class=''>									
										<b>Articulos y opiniones</b>
										<br/>
										Blog.
										<br/>
										</p>
									</div>
								
									<div class='mb-10'>
										<p class=''>									
										<b>Horarios de Rezos</b>
										<br/>
										Xls.
										<br/>
										</p>
									</div>

							</div>
						</div>

						
							
						<div >
							<div class='max-w-4xl  mx-auto '>
							<div class='mx-auto h-full'>
									{/* <!-- Title --> */}
									<div class='mb-10'>
										<h1 class='block font-semibold text-black dark:text-white text-2xl md:text-3xl lg:text-4xl text-center'>
										Contactos
										</h1>
									</div>
									{/* <!-- End Title --> */}
									<div class='mb-10'>
										<p class=''>									
										<b>Dirección</b>
										<br/>
										<Link  to="https://www.google.com/maps/place/Fuengirola+Central+Mosque/@36.531229,-4.6292137,17z/data=!3m1!4b1!4m6!3m5!1s0xd72e20d8608ed3b:0xd0dc05efedf03349!8m2!3d36.531229!4d-4.627025!16s%2Fm%2F0wxzchm">
											<p 
											style={{
												color: "blue"
											}}
											>Calle Mendez Nuñez, 6 Fuengirola 29640 (Malaga)</p></Link>
										<br/>

										<b>Teléfono</b>
										<br/>
										+34 952 473 916
										<br/>
										+34 670 900 084
										<br/>
										<br/>

										<b>Correo</b>
										<br/>
										info@suhail.es
										<br/>
										<br/>	
										
										<b>Medios de Comunicación Social</b>
										<br/>
										<Link  to="https://www.facebook.com/andalucian.muslims/?locale=ar_AR"><p 
										style={{
											color: "blue"
										}}>
											FaceBook</p></Link>

										<Link  to="https://www.youtube.com/channel/UClGwaKsiXdBfVm611gZgzpw"><p
										style={{
											color: "blue"
										}}>Youtube</p></Link>
										<br/>
	



										

										</p>

										
									</div>

									

									{/* <!-- Buttons
									<div class='w-full'>
										<Link to={'/'}>
											<button class='text-center bg-amber-400 hover:bg-amber-500 text-white text-xl font-semibold rounded-md  py-3 px-4 uppercase active:scale-95 duration-150 ease-in-out'>
												Donate Now
											</button>
										</Link>
									</div> --> */}
								</div>

							
							
								

							</div>
						</div>

						
				</section>
			</main>
		</>
	);
};

export default Home;
