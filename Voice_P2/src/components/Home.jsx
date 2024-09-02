import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { FaSearch } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import { VscSend } from "react-icons/vsc";
import { MdKeyboardVoice } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Home() {
    const [transcript, setTranscript] = useState('');
    const textareaRef = useRef(null);
    const [active, setActive] = useState(false);
    const recognitionRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.interimResults = true;
        recognition.continuous = false;

        const handleResult = (e) => {
            const transcriptArray = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            setTranscript(transcriptArray);
        };

        const handleEnd = () => {
            setActive(false);
        };

        recognition.addEventListener('result', handleResult);
        recognition.addEventListener('end', handleEnd);
        recognitionRef.current = recognition;

        return () => {
            recognition.removeEventListener('result', handleResult);
            recognition.removeEventListener('end', handleEnd);
            recognition.stop();
        };
    }, []);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.value = transcript;
        }
    }, [transcript]);

    const startRecognition = () => {
        if (recognitionRef.current && !active) {
            recognitionRef.current.start();
            setActive(true);
        }
    };

    const stopRecognition = () => {
        if (recognitionRef.current && active) {
            recognitionRef.current.stop();
            setActive(false);
        }
    };

    const voiceClicked = () => {
        if (active) {
            stopRecognition();
        } else {
            startRecognition();
        }
    };

    const changePage = () => {
        console.log(textareaRef.current.value);
        navigate('/submit');
    };

    return (
        <div className="container">
            <img id='lady' src="lady.png" alt="" />
            <MdKeyboardVoice id={active ? 'activeVoice' : 'voice'} onClick={voiceClicked} />
            <div className='input'>
                <div id='search'>
                    <FaSearch id='searchIcon' />
                    <WiStars id='searchIcon2' />
                </div>
                <input id='input' type="text" placeholder='Search Here' ref={textareaRef} />
                <VscSend id='send' onClick={changePage} />
            </div>
        </div>
    );
}

export default Home;
