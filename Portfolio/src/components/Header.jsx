const Header=()=>{
  return(

    <header className="bg-primary text-white p-5">
      <div style={{height:"60px"}}>
        <h1 className="float-start">Satyam keshari</h1>
        <div className="float-end">
          <button className="btn btn-dark m-2">Dark</button>
          <button className="btn btn-light">Light</button>
        </div>
      </div>

      {/* <div className="d-flex justify-content align-items-center">
        <h1 className="float-start">Satyam keshari</h1>
        <div className="float-end">
          <button className="btn btn-dark">Dark</button>
          <button className="btn btn-light">Light</button>
        </div>
      </div> */}
     
      <p>
        Phone No  : <a className="text-white text-decoration-none" href="tel:9264929875">9264929875</a> &nbsp;
        Email : <a className="text-white text-decoration-none" href="mailto:0231cse127@niet.co,in">0231cse127@niet.co.in</a>

      </p>


    </header>
  );
}

export default Header;