import { Link } from 'react-router-dom';
import'./paretner.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const Partners = () => {
	const [Name, setName] = useState(null);
   const [ErrorName, setErrorName] = useState(false);
   const [PriceError, setPriceError] = useState(false)
const [checkd, setcheckd] = useState(false)

	const [Price, setPrice] = useState(null);

function submitHandler(e){
	e.preventDefault()
	if(!Name){
		setErrorName(true)
	}
	else{
		setErrorName(false)
		
	}
	if(!Price){
		setPriceError(true)
	}
	else{
		setPriceError(false)

	}
	if(checkd){
		setcheckd(true)
	}
	else{
		setcheckd(false)

	}
	
}
useEffect(() => {
//   axios.post('https://sis-t.redsys.es:25443/sis/realizarPago',{},{headers:{
// 	"Access-Control-Allow-Origin": "*",
// 	"responseType": 'text/html'
//   }}).then(res=>{
// 	console.log(res)
//   })
//   .catch(err=>console.log(err))

  return () => {
	
  }
}, [])


	return (
		<>
			<section>
				{/* <!-- Masonry Cards --> */}
				<div class='max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
					{/* <!-- Grid --> */}

					<div className=''>

					



						<div className="form-container shadow-xl">
							<form onSubmit={submitHandler}>
								<label htmlFor="">Name</label>
								<input className='input' type="text" name="" placeholder='Your Name' onChange={(e)=>setName(e.target.value)} id="" />
								{ErrorName?<p className='text-red-600'> please fill this filed</p> :null}
								<label htmlFor="">Price</label>
								<input className='input' type="number"  onChange={(e)=>setPrice(e.target.value)}  placeholder='dontation cost' />
								{PriceError?<p className='text-red-600'> please fill this filed</p> :null}
								<div>
									<input type="checkbox" on onChange={()=>setcheckd(!checkd)} name="" id="" />
									<label className='ml-4' htmlFor="">temrs and condaiton <a href="https://drive.google.com/file/d/1KoWFLDIRavkWPzZuWD4IgbY93INM7xW9/view"> click here to read</a></label>
								</div>
								{checkd?<p className='text-red-600'> please check this filed</p> :null}
								<button>Donate</button>
							</form>
						</div>

						{/* <form className='ok' action="https://sis-t.redsys.es:25443/sis/realizarPago" method="post" target="my_iframe">
  <input id='ll' type="submit" value="Do Stuff!"/>
</form>


<iframe name="my_iframe" src="not_submitted_yet.aspx"></iframe> */}
						
					</div>
					{/* <!-- End Grid --> */}
				</div>
				{/* <!-- End Masonry Cards --> */}
			</section>
		</>
	);
};

export default Partners;
