import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCache, setCache, hasCache } from '../cache';
import { useParams } from 'react-router-dom';

const DataWithCachePage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const cacheKey = `post-${id}`;
			if (hasCache(cacheKey)) {
				setData(getCache(cacheKey));
			} else {
				const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
				setCache(cacheKey, response.data);
				setData(response.data);
				console.log(response.data);
			}
		};

		fetchData();
	}, [id]);

	return (
		<div>
			<h1>Cached Fetch Component</h1>
			{data && <pre>{JSON.stringify(data, null, 2)}</pre>}
		</div>
	);
};

export default DataWithCachePage;