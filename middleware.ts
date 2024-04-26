import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// @ts-ignore
// import { authMiddleware } from "@clerk/nextjs";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, request) => {
	if (isProtectedRoute(request)) auth().protect();
});

export const config = {
	matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
