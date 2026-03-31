import pic from '../assets/p1.jpg'
const School = () => {
  return (
    <section className="bg-light d-flex p-5     align-item-center">

      <div className='pt-3 p-5 '>
        <img src={pic} height='100px' alt="" />
        <h5> Jan sava Inter mideate college</h5>
        <p>class 10 marks <b>85%</b></p>
        <h5> Jan sava Inter mideate college</h5>
        <p>class 12 marks <b>95%</b></p>
      </div>
    </section>
  );
}
export default School;