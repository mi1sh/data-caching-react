import { useEffect, useState } from 'react';
import axios from 'axios';

const DataWithoutCachePage: React.FC = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
			setData(response.data);
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Always Fetch Component</h1>
			{data && <pre>{JSON.stringify(data, null, 2)}</pre>}
		</div>
	);
};

export default DataWithoutCachePage;