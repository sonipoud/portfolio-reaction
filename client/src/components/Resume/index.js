import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import pdf from '../../assets/resume/resume.pdf';

function Resume() {
    return (
        <div className="text-center">
            <a href = {pdf}>
                <AiOutlineFilePdf style={{fontSize:'50px'}}/>
            </a>
            
            <h4> Click the icon to view the resume </h4>
        </div>
    )
}

export default Resume;
