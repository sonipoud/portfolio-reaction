import React from 'react';
import {AiOutlineGithub} from 'react-icons/ai';

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-dark fixed-bottom">
            <section className="d-flex justify-content-center p-1 border-bottom">
                <div>
                    <a href="https://github.com/sonipoud" className="me-2 text-white fs-1">
                        <AiOutlineGithub />
                    </a>
                </div>

            </section>

        </footer>
    )
}

export default Footer;