import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import JobForm from '../../components/JobForm/JobForm'

const JobUpdate = () => {

    return (
        <main>
            <h1>This is the new job form</h1>
            <JobForm />
        </main>
    )
}

export default JobUpdate