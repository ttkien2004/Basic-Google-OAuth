require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");

const { PrismaClient } = require("@prisma/client");
const { OAuth2Client } = require("google-auth-library");

const prisma = new PrismaClient();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(cors());
app.use(express.json());

app.post("/api/auth/google", async (req, res) => {
	const { token } = req.body;
	// console.log(process.env.GOOGLE_CLIENT_ID);

	try {
		// Xác thực với Google
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_CLIENT_ID,
		});

		const payload = ticket.getPayload();
		const { email, name, picture } = payload;
		// Tìm hoặc tạo user trong DB
		let existed = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		if (!existed) {
			existed = await prisma.user.create({
				data: {
					email,
					name,
					picture,
				},
			});
		}
		// Tạo jwt
		const jwtToken = jwt.sign(
			{ id: existed.id, email: existed.email },
			process.env.SECRET,
			{
				expiresIn: "1h",
			}
		);
		res.status(200).json({ token: jwtToken, existed });
	} catch (err) {
		console.log(err);
		res.status(401).json({ error: "Invalid token" });
	}
});

app.listen(process.env.PORT, "0.0.0.0", () =>
	console.log(`Connecting to port ${process.env.PORT}`)
);
