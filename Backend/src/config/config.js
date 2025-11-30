export const cookieOptions = {
    httpOnly: true, //now we can not clear this cookie from the frontend as httpOnly is true
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24, //24 hour
}