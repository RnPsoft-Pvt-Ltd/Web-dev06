

function OpenNews({ img,desc }) {
      return <>
            <center>
                  <img src={img == '' ? '' : img} width={500} alt="NOT AVALABLE" />
                  <h3>{desc}</h3>
            </center>
      </>
}
export default OpenNews;