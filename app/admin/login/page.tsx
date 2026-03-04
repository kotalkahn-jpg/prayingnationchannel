"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {

const router = useRouter();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");
const [loading,setLoading] = useState(false);
const [showPassword,setShowPassword] = useState(false);

const handleLogin = async (e:React.FormEvent) => {

e.preventDefault();

setLoading(true);
setError("");

const res = await fetch("/api/admin/login",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({email,password})
});

setLoading(false);

if(!res.ok){
setError("Invalid credentials");
return;
}

router.push("/admin/dashboard");

};

return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1E3D] via-[#102c5c] to-[#0B1E3D] p-6">

<div className="w-full max-w-6xl grid md:grid-cols-2 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">

{/* LEFT SIDE IMAGE */}

<div className="relative hidden md:block">

<img
src="/login-image.jpg"
className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-[#0B1E3D]/70"></div>

<div className="relative z-10 flex flex-col justify-between h-full p-10 text-white">

<img
src="/prayer.jpg"
className="w-16 rounded-full"
/>

<div className="text-3xl leading-snug font-light">

Spreading Faith  
Connecting Nations  
Sharing Hope

</div>

</div>

</div>


{/* RIGHT SIDE FORM */}

<div className="p-10 bg-white/90">

<h2 className="text-3xl font-bold text-[#0B1E3D] mb-2">
Admin Login
</h2>

<p className="text-gray-500 mb-8">
Sign in to manage Praying Nation Channel
</p>

<form onSubmit={handleLogin} className="space-y-5">

<input
type="email"
placeholder="Email"
required
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] outline-none"
onChange={(e)=>setEmail(e.target.value)}
/>

<div className="relative">

<input
type={showPassword ? "text":"password"}
placeholder="Password"
required
className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] outline-none"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
className="absolute right-4 top-3 text-sm text-gray-500"
>
{showPassword ? "Hide":"Show"}
</button>

</div>

{error && (
<p className="text-red-500 text-sm">{error}</p>
)}

<button
disabled={loading}
className="w-full bg-[#D4AF37] text-[#0B1E3D] font-semibold py-3 rounded-lg hover:opacity-90 transition"
>

{loading ? "Signing in..." : "Login"}

</button>

</form>

<p className="text-xs text-gray-400 mt-8">
PrayerNationChannel Admin
</p>

</div>

</div>

</div>

);

}