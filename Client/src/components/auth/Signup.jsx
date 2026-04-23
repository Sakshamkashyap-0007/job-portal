import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { ArrowRight, BadgeCheck, Loader2, UploadCloud, UserRoundPlus } from 'lucide-react'

const Signup = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loading, user } = useSelector(store => store.auth);

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: "",
  })

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  }


  const submitHandler = async (e) => {
    e.preventDefault()


    const formData = new FormData()
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true))

      const response = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true,
      });
      if (response.data.success) {
        console.log("rt");
        navigate("/login");
        toast.success(response.data.message);
      }

    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message)
    } finally {
      dispatch(setLoading(false));
    }
  }


  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [])


  return (
    <div className='min-h-screen bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_45%,#eef2ff_100%)]'>
      <Navbar />
      <div className='px-4 py-10 sm:px-[5%] lg:px-[10%]'>
        <div className='mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.4)] lg:grid-cols-[0.95fr_1.05fr]'>
          <div className='bg-[linear-gradient(160deg,#0f172a_0%,#1d4ed8_55%,#7c3aed_100%)] px-8 py-10 text-white sm:px-10 lg:px-12 lg:py-14'>
            <span className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur'>
              <UserRoundPlus className='size-4' />
              Create Your Account
            </span>
            <h1 className='mt-6 text-4xl font-bold leading-tight sm:text-5xl'>Set up a polished profile and start exploring opportunities.</h1>
            <p className='mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base'>
              Build a strong first impression with a clean signup flow for both job seekers and recruiters.
            </p>

            <div className='mt-10 grid gap-4'>
              <div className='rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur'>
                <div className='flex items-center gap-3'>
                  <BadgeCheck className='size-5 text-orange-200' />
                  <p className='font-semibold'>Clear onboarding flow</p>
                </div>
                <p className='mt-2 text-sm text-slate-200'>Well-structured inputs with stronger alignment and better spacing.</p>
              </div>
              <div className='rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur'>
                <div className='flex items-center gap-3'>
                  <UploadCloud className='size-5 text-orange-200' />
                  <p className='font-semibold'>Profile-ready experience</p>
                </div>
                <p className='mt-2 text-sm text-slate-200'>Upload a profile image and choose the correct workspace role from the start.</p>
              </div>
            </div>
          </div>

          <div className='px-6 py-10 sm:px-10 lg:px-12 lg:py-14'>
            <div className='mx-auto max-w-xl'>
              <div className='mb-8'>
                <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>Account Signup</p>
                <h2 className='mt-3 text-3xl font-bold text-slate-900'>Create your professional profile</h2>
                <p className='mt-2 text-sm leading-6 text-slate-600'>
                  Fill in your details below to get started with a clean, client-ready experience.
                </p>
              </div>

              <form onSubmit={submitHandler} className='space-y-5'>
                <div className='grid gap-5 sm:grid-cols-2'>
                  <div className='space-y-2 sm:col-span-2'>
                    <Label className="text-slate-700">Full Name</Label>
                    <Input
                      type="text"
                      value={input.fullname}
                      name="fullname"
                      onChange={changeEventHandler}
                      placeholder="Shubham Kumar"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4"
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label className="text-slate-700">Email</Label>
                    <Input
                      type="email"
                      value={input.email}
                      name="email"
                      onChange={changeEventHandler}
                      placeholder="john.doe@gmail.com"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4"
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label className="text-slate-700">Phone Number</Label>
                    <Input
                      type="text"
                      value={input.phoneNumber}
                      name="phoneNumber"
                      onChange={changeEventHandler}
                      placeholder="0000000000"
                      className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4"
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label className="text-slate-700">Password</Label>
                  <Input
                    type="password"
                    value={input.password}
                    name="password"
                    onChange={changeEventHandler}
                    placeholder="Create a strong password"
                    className="h-12 rounded-xl border-slate-200 bg-slate-50 px-4"
                  />
                </div>

                <div className='space-y-3'>
                  <Label className="text-slate-700">Select role</Label>
                  <div className='grid gap-3 sm:grid-cols-2'>
                    {["student", "recruiter"].map((role) => (
                      <label
                        key={role}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-4 transition-all ${input.role === role ? 'border-[#6A38C2] bg-[#f6f0ff] shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                      >
                        <input
                          type="radio"
                          name="role"
                          value={role}
                          checked={input.role === role}
                          onChange={changeEventHandler}
                          className="size-4 accent-[#6A38C2]"
                        />
                        <div>
                          <p className='font-semibold capitalize text-slate-900'>{role}</p>
                          <p className='text-sm text-slate-500'>{role === "student" ? "Apply for new roles" : "Manage jobs and applicants"}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label className="text-slate-700">Profile Image</Label>
                  <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4'>
                    <Input
                      accept="image/*"
                      type="file"
                      onChange={changeFileHandler}
                      className="h-auto cursor-pointer border-none bg-transparent px-0 py-0 shadow-none focus-visible:ring-0"
                    />
                  </div>
                </div>

                {
                  loading ? <Button className="h-12 w-full rounded-xl bg-[#6A38C2] text-base font-semibold"><Loader2 className='mr-2 h-4 w-4 animate-spin ' /> Please wait</Button>
                    :
                    <Button type="submit" className="h-12 w-full rounded-xl bg-[#6A38C2] text-base font-semibold hover:bg-[#5b30a6]">Create Account <ArrowRight className='size-4' /></Button>
                }
                <p className='text-sm text-slate-600'>Already have an account? <Link to="/login" className='font-semibold text-[#6A38C2] hover:text-[#5b30a6]'>Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
