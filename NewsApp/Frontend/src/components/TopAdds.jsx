import './TopAdds.css';
function TopAdds({data}){
      return <>
            <div className="AddHeader">
                  <div className='inside in1'>
                        <h6>BHUBNESWER</h6>
                        <h6>24/05/2024</h6>
                  </div>
                  <div className='inside in2'>
                        <h6 id='redbox'>Breaking News</h6>
                        <h6 id='text'>Mizoram in precarious condition: Minister cites rising drug smuggling amid Manipur violence.</h6>
                  </div>
            </div>
            <div className="img">
                  <h2>Grow your business,<span>easily.</span></h2>
                  <h6>Get Started</h6>
                  <img src={data} alt="" />
            </div>
      </>
}
export default TopAdds;