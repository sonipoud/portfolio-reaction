import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

function Resume() {
    return (
        <div className="d-flex justify-content-center">
            <a href="../../assets/resume/resume.pdf">
                <AiOutlineFilePdf />
            </a>
            <h4> Click the icon to view the resume </h4>
        </div>
    )
}

export default Resume;
