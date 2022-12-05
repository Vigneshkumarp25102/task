import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faSign, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
export function Login_Form(){

    const takealldata=async(action)=>{
        action.preventDefaut();
        var alldata=new FormData(action.target);
        var config={headers:{"enctype":"mulipart/form-date"}};
        
        await axios.post('http://localhost:3002/check',alldata,config)
        .then(function(res){
            if(res.data.status==="success"){
                alert("correct user")
            }
            
        })
        .catch(function(error){
            alert("linking error")
        })
    }

    return(
        <>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-4 text-center'><h1>Login Form</h1></div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
            <form onSubmit={takealldata}>
            <div className='row mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label className='usernamelflable'>
                        User name :
                    </label>
                </div>
                <div className='col-lg-2'>
                    <input type={"text"} name="usernamelf" id="usernamelf"  className='usernamelf form-control'/>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                    <label className='passwordlflable'>
                        Password :
                    </label>
                </div>
                <div className='col-lg-2'>
                    <input type={"text"} name="passwordlf" id="passwordlf"  className='passwordlf form-control'/>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-4'>&nbsp;</div>
                <div className='col-lg-2'>
                   <input type={"submit"} name="sumbitlf" id="sumbitlf" className='sumbitlf form-control'/>
                </div>
                <div className='col-lg-2'>
                <Link to={"/Registration_Form"}><p ><FontAwesomeIcon icon={faSign}/></p></Link>
                </div>
                <div className='col-lg-4'>&nbsp;</div>
            </div>
            </form>
        </div>
        </>
    );
}