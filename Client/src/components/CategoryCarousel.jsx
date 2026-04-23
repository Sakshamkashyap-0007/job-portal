import React from 'react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'
import { motion } from "framer-motion"


const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Cyber Security",
]

function CategoryCarousel() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }


    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            className='px-4 sm:px-[5%] lg:px-[10%]'
        >
            <div className='mx-auto my-6 max-w-6xl rounded-[2rem] border border-slate-200 bg-white/90 px-5 py-7 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur'>
                <div className='mx-auto max-w-3xl text-center'>
                    <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>Popular Categories</p>
                    <h2 className='mt-3 text-2xl font-bold text-slate-900 sm:text-3xl'>Explore roles by specialization</h2>
                    <p className='mt-2 text-sm text-slate-600 sm:text-base'>
                        Browse the most in-demand opportunities across engineering, design, data, and growth.
                    </p>
                </div>

                <div className='mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4'>
                    {
                        category.map((cat, index) => (
                            <Button
                                key={index}
                                onClick={() => searchJobHandler(cat)}
                                variant="outline"
                                className="min-w-[170px] rounded-full border-slate-200 bg-white px-6 py-6 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6A38C2] hover:bg-slate-50 hover:text-[#6A38C2]"
                            >
                                {cat}
                            </Button>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default CategoryCarousel
