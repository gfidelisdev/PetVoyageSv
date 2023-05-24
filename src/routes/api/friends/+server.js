import https from 'https';
import axios from 'axios';
import fs from 'fs';
import { error, json } from '@sveltejs/kit';
const agent = new https.Agent({
	rejectUnauthorized: false,
	ca: fs.readFileSync(`${process.cwd()}/src/routes/api/localhost.local.br.crt`)
});

const options = {
	url: 'https://localhost:10443/api',
	httpsAgent: agent
};

export async function GET() {
	let result = await axios.get(`${options.url}/friends`, {
		httpsAgent: agent
	});
	// .then((data) => {
	// 	console.log(data.data);
	// 	return json(data.data);
	// })
	// .catch((err) => {
	// 	console.log('here error', err);
	// 	return error(401, err);
	// });
	console.log(result.data);
	return json(result.data);
}
