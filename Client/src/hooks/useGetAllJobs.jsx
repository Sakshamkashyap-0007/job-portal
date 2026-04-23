import { setAllJobs } from '@/redux/jobSlice'
import { getDisplayJobs } from '@/utils/demoJobs'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();

    const { searchedQuery } = useSelector(store => store.job)

    useEffect(() => {
        dispatch(setAllJobs(getDisplayJobs([], searchedQuery)));

        const fetchAllJobs = async () => {
            try {
                const response = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, {
                    withCredentials: true,
                    timeout: 8000,
                });
                if (response.data.success) {
                    dispatch(setAllJobs(getDisplayJobs(response.data.jobs, searchedQuery)))
                }
            } catch (error) {
                console.error(error);
                dispatch(setAllJobs(getDisplayJobs([], searchedQuery)));
            }
        }
        fetchAllJobs();
    }, [dispatch, searchedQuery])



}

export default useGetAllJobs
