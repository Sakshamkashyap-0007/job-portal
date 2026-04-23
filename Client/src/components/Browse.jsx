import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { motion } from "framer-motion"

// const jobs = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ]

const Browse = () => {

    useGetAllJobs();
    const { allJobs, searchedQuery } = useSelector(store => store.job)

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            dispatch(setSearchedQuery(""));
            console.log("jiooo");

        }
    }, [dispatch])

    return (
        <>

            <Navbar />

            <div className='px-[5%] lg:px-[10%] w-full my-10'>
                <motion.div
                    initial={{ opacity: 0.2, y: 100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{}}
                    className='rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-orange-50 p-6 shadow-sm'
                >
                    <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-500'>Browse Opportunities</p>
                    <div className='mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
                        <div>
                            <h1 className='text-2xl font-bold text-slate-900 md:text-4xl'>Search Results ({allJobs.length})</h1>
                            <p className='mt-2 max-w-2xl text-sm text-slate-600 md:text-base'>
                                Explore curated roles across product, engineering, data, design, growth, and operations.
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <span className='rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200'>
                                {searchedQuery ? `Active filter: ${searchedQuery}` : 'Showing all open roles'}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {
                    allJobs.length <= 0 &&
                    <div className='mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-500'>
                        <p className='text-lg font-semibold text-slate-700'>No jobs found</p>
                        <p className='mt-2 text-sm'>Try a broader search like `Frontend`, `Backend`, `Data Science`, or `DevOps`.</p>
                    </div>
                }

                <motion.div
                    initial={{ opacity: 0.2, y: 100 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{}}
                    className='overflow-y-auto pb-5'>
                    <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                        {
                            allJobs.map((job) => {
                                return (
                                    <Job key={job._id} job={job} />
                                )
                            })
                        }
                    </div>
                </motion.div>


            </div>

            <Footer />

        </>
    )
}

export default Browse
