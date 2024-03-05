import { useState, useEffect, useMemo } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    const toRotate = useMemo(() => ["LOVE ", "PASSION ", "JOY ", "FREEDOM ", "MUSIC "], []);

    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);

      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
      }
    
      return () => {clearInterval(ticker)}
    }, [text, delta, isDeleting, loopNum, toRotate])

    const navigate = useNavigate();

    return (
        <section className="banner" >
            <Container id='home'>
                <Row className='mt-xl-5'>
                    <Col xs={12} md={8} xl={6}>
                        <div className='d-flex flex-column' >
                            <span className="tagline ps-0">FEEL THE SOUND</span>
                            <h1 className='toRotate'>{toRotate}<span className="wrap">{text}</span></h1>
                            <div id='btn-home-bloc1-container'>
                                <button onClick={() => navigate('/programmation')} >Amazing lineup <ArrowRightCircle size={25} /></button>
                                <button onClick={() => navigate('/billeterie')} > Get your Ticket! <ArrowRightCircle size={25} /> </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={6} className='d-none d-xl-block'>
                        <svg className='svg-anim' viewBox="0 0 110.514 110.514" xmlns="http://www.w3.org/2000/svg">
                            <g className='g-anim' id="Group_1126" data-name="Group 1126" transform="translate(-2153.771 -14295.673)">
                                <path id="Path_845" data-name="Path 845" d="M-3001.9,2475.261l.754-14.572-6.043-2.158-21.478-3.668,2.807,15.648,2.483,8.6,5.612,2.41,1.833,3.023,6.908,6.15h13.708l3.128-1.725-9.712-13.708" transform="translate(5186 11845)" fill="#e5e5e3" fill-rule="evenodd"/>
                                <path id="Path_846" data-name="Path 846" d="M-2951.9,2475.261l-.756-14.572,6.044-2.158,21.476-3.668-2.8,15.648-2.483,8.6-5.612,2.41-1.835,3.023-6.907,6.15h-13.706l-3.131-1.725,9.714-13.708" transform="translate(5186 11845)" fill="#e5e5e3" fill-rule="evenodd"/>
                                <path id="Path_847" data-name="Path 847" d="M-2952.689,2462.141l-7.654-6.1-7.424-.577-9.348,4.463-1.841-1.275-6.8-3.188-6.367.361-8.358,4.887-2.478,7.784.712,7.508,7.924,11.684,7.511,8.209,10.338,6.867,5.519-4.533,13.383-11.824,6.586-15.3-1.7-8.967" transform="translate(5186 11845)" fill="#ef204d" fill-rule="evenodd"/>
                                <path id="Path_848" data-name="Path 848" d="M-2927.36,2462.956c-1.683,2.753-5.434,4.365-11.151,4.79-.184.013-.683.03-1.052.041-.273.009-.522.019-.677.025h0a2.3,2.3,0,0,0-1.52.672,2.3,2.3,0,0,0,0,3.256,2.282,2.282,0,0,0,1.737.671v0c.137-.008.362-.014.61-.02.566-.021.984-.035,1.248-.055a28.514,28.514,0,0,0,7.517-1.484,6.317,6.317,0,0,1-.89,3.973c-1.576,2.449-5.284,3.967-10.729,4.392-.512.041-1.616.074-2.277.094l-.267.01v0a2.273,2.273,0,0,0-1.554.669,2.3,2.3,0,0,0,0,3.259,2.3,2.3,0,0,0,1.7.668v.007l.263-.013c.792-.022,1.875-.055,2.493-.1.8-.066,1.575-.147,2.317-.256a4.416,4.416,0,0,1-.955,1.943c-1.447,1.733-5.6,4.27-17.42,3.232,4.8-5.5,8.624-12.036,8.624-18.889a16.07,16.07,0,0,0-1.719-7.248,10.839,10.839,0,0,1,1.621-1.009c3.447-1.749,8.213-2.218,12.826-2.675a47.729,47.729,0,0,0,10.155-1.7A8.526,8.526,0,0,1-2927.36,2462.956Zm-38.793,27.563a87.476,87.476,0,0,1-10.82,8.419,87.53,87.53,0,0,1-10.82-8.419c-5.567-5.125-12.205-12.871-12.205-20.675a11.525,11.525,0,0,1,11.514-11.51,11.432,11.432,0,0,1,8.223,3.456l3.288,3.359,3.292-3.359a11.412,11.412,0,0,1,8.221-3.456,11.521,11.521,0,0,1,11.51,11.51c0,7.8-6.633,15.55-12.2,20.675Zm-47.249-5.018a4.45,4.45,0,0,1-.954-1.943c.745.109,1.519.19,2.321.256.616.048,1.7.081,2.485.1l.27.013v-.007a2.3,2.3,0,0,0,1.7-.668,2.3,2.3,0,0,0,0-3.259,2.288,2.288,0,0,0-1.555-.669v0l-.273-.01c-.658-.02-1.761-.053-2.27-.094-5.443-.425-9.157-1.943-10.728-4.392a6.33,6.33,0,0,1-.894-3.973,28.565,28.565,0,0,0,7.521,1.484c.262.02.686.034,1.254.055.243.006.465.012.6.02v0a2.292,2.292,0,0,0,1.738-.671,2.308,2.308,0,0,0,0-3.256,2.315,2.315,0,0,0-1.523-.672h0c-.154-.006-.405-.016-.673-.025-.368-.011-.871-.028-1.057-.041-5.7-.425-9.443-2.031-11.133-4.766a8.505,8.505,0,0,1-.92-5.77,47.577,47.577,0,0,0,10.158,1.7c4.61.457,9.38.926,12.822,2.675a10.806,10.806,0,0,1,1.627,1.009,16.058,16.058,0,0,0-1.72,7.248c0,6.853,3.821,13.384,8.624,18.889C-3007.8,2489.771-3011.951,2487.234-3013.4,2485.5Zm90.6-32.386-1.033-2.442-2.275,1.362c-2.416,1.454-6.564,1.863-10.953,2.3-5.035.5-10.242,1.012-14.458,3.154a15.727,15.727,0,0,0-2.18,1.338,16.055,16.055,0,0,0-11.755-5.093,16.088,16.088,0,0,0-11.513,4.835,16.082,16.082,0,0,0-11.511-4.835,16.058,16.058,0,0,0-11.758,5.093,15.53,15.53,0,0,0-2.178-1.338c-4.22-2.142-9.424-2.656-14.459-3.154-4.387-.432-8.535-.841-10.95-2.3l-2.278-1.362-1.031,2.442c-.115.274-2.759,6.705.624,12.243a11.756,11.756,0,0,0,2.931,3.221,11.369,11.369,0,0,0,1.258,8.671,13.132,13.132,0,0,0,7.284,5.243,8.924,8.924,0,0,0,1.681,5.409c2.71,3.777,8.169,5.673,16.275,5.673a71.742,71.742,0,0,0,9.123-.648,90.324,90.324,0,0,0,14.989,11.454,90.378,90.378,0,0,0,14.986-11.454,71.8,71.8,0,0,0,9.126.648c8.109,0,13.565-1.9,16.273-5.673a8.875,8.875,0,0,0,1.679-5.409,13.139,13.139,0,0,0,7.287-5.243,11.358,11.358,0,0,0,1.257-8.671,11.725,11.725,0,0,0,2.934-3.221c3.383-5.538.74-11.969.625-12.243" transform="translate(5186 11845)" fill="#070505" fill-rule="evenodd"/>
                            </g>
                        </svg>
                            {/* <img id='heart-anim-from-banner' src={headerImg} alt="header Img" /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}