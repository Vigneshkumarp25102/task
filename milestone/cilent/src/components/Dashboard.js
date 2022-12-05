import 'bootstrap/dist/css/bootstrap.min.css';
export function Dashboard(){
    return(
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <div className="card">
                        <h1 className="text-center">Dashboard</h1>
                        <h3>Firstname :<span className="firstnamedb"></span></h3>
                        <h3>Lastname :<span className="lastnamedb"></span></h3>
                        <h3>Email :<span className="emaildb"></span></h3>
                        <h3>Phone no :<span className="phonodb"></span></h3>
                        <h3>Password :<span className="pasworddb"></span></h3>
                    </div>
                </div>
                <div className="col-lg-4">&nbsp;</div>


            </div>
        </div>
        </>
    );
}