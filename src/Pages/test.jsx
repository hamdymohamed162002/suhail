import { useState } from 'react';

const test = () => {
	const [openModal, setOpenModal] = useState(false);

	return <div>{openModal && <Modal />}</div>;
};

export default test;
