import express from "express";
import { createClient } from "@supabase/supabase-js";

const app = express();
const port = 3000;

//SUPABASE CLIENT
const SUPABASE_URL = "https://avvelquwyslzkodskshw.supabase.co";
const SERVICE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMzMzgzMTU1LCJleHAiOjE5NDg5NTkxNTV9.tmww3KW2ZpsLvhPlGq2es22MTmXuWK9Mp-wyGMvAtUY";

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);
app.use(express.static("public"));

//TABLE DATA
app.get("/api", async (request, response) => {
	let { data, error } = await supabase
		.from("leaders")
		.select("*")
		.order("name", { ascending: true });
	response.send(data);
	// console.log(data)
});
//INSERT DATA
app.post("/api", async (request, response) => {
	// let { data, error } = await supabase.from("leaders").insert([request.body]);
	console.log(request.body);
})

DELETE
app.delete("/api", async (request, response) => {
	let { data, error } = await supabase
		.from("leaders")
		.delete()
		.match(request.body);
	console.log(request.body);
})

//PUT
// app.put("/api", async (request, response) => {
// 	console.log(request.body);

// 	let { data, error } = await database
// 		.from("leaders")
// 		.update({
			
// 		})
// 		.match({
			
// 		});
// });


app.listen(port, () => {
	console.log(`The server is listening on port ${port}.`);
});