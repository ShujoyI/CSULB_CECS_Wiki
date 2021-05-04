import React from 'react';
import '../App.css';
import '../styles/Faculty.css';
import Table from '../components/Table';

export default function Faculty() {
    return (
        <div className='faculty'>
            <div className='faculty_headers'>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"> <a href="/">Home</a></li>
                    <li class="breadcrumb-item"> <a href="/academics">Academics</a></li>
                    <li class="breadcrumb-item"> Faculty</li>
                </ol>
            </div>
            <div className='table_one'>
                <Table />    
            </div>
        </div>
    )
}