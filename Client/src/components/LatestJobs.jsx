import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion"


function LatestJobs() {

    const { allJobs } = useSelector(state => state.job);


    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{}}
            className='px-4 sm:px-[5%] lg:px-[10%] w-full my-20'>
            <div className='mx-auto max-w-6xl'>
                <div className='text-center'>
                    <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-500'>Featured Openings</p>
                    <h1 className='mt-3 text-2xl font-bold text-slate-900 sm:text-4xl'><span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>
                    <p className='mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base'>
                        Show clients a premium marketplace feel with fresh, role-specific opportunities that are easy to scan and compare.
                    </p>
                </div>
            <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
                {
                    allJobs?.slice(0, 7).map((job, index) => (
                        <LatestJobCards key={job._id} job={job} />
                    ))
                }
            </div>
            </div>



        </motion.div>
    )
}

export default LatestJobs
