import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

function HeroSection() {

    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            className='px-4 pt-6 text-center sm:px-[5%] lg:px-[10%]'
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className='mx-auto my-10 flex max-w-6xl flex-col gap-6 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-orange-50 to-slate-100 px-6 py-12 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.4)] sm:px-10 lg:px-14 lg:py-16'>
                <span className='mx-auto rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-[#F83002] shadow-sm'>Trusted Job Discovery Platform</span>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 2 }}
                    className='text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl'>Search, Apply & <br /> Land Your <span className='cursor-pointer text-[#6A38C2] transition-colors hover:text-[#5b30a6]' onClick={() => navigate("/browse")} >Dream Role</span></motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className='mx-auto max-w-2xl px-3 text-base leading-7 text-slate-600'>Present high-quality openings across product, engineering, data, design, and operations with a polished experience that feels ready for clients and recruiters.</motion.p>
                <div className='mx-auto flex w-full max-w-2xl items-center gap-3 rounded-full border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/60'>
                    <input type="text"
                        placeholder='Search frontend, backend, data science, design...'
                        className='h-12 w-full border-none bg-transparent px-4 text-slate-700 outline-none'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button onClick={searchJobHandler} className='h-12 rounded-full bg-[#6A38C2] px-6 font-semibold text-white hover:bg-[#5b30a6] cursor-pointer'>
                        <Search
                            className='h-5 w-5'
                        />
                    </Button>
                </div>
                <div className='mx-auto mt-2 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-500'>
                    <span className='rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200'>Curated Listings</span>
                    <span className='rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200'>Responsive Design</span>
                    <span className='rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200'>Client-Ready Presentation</span>
                </div>
            </motion.div>


        </motion.div>
    )
}

export default HeroSection
