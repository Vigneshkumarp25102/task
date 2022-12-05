import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
export function Registration_Form(){
    const takealldata=async(action)=>{
        
        action.preventDefault();
        var alldata=new FormData(action.target);
        var config={headers:{"enctype":"mulipart/form-date"}};

        let firstname=document.getElementById("firstnamerf").value;
        let lastname=document.getElementById("lastnamerf").value;
        let email=document.getElementById("emailrf").value;
        let phone=document.getElementById("phonerf").value;
        let password=document.getElementById("passwordrf")
        let textstring=/^[A-Za-z]{4,10}$/;

        if(firstname==="" || firstname ===null){
            alert("Enter a Firstname");
        }
        else if(!textstring.test(firstname)){
            alert("Enter a Firstname between 4 to 10 characters and must use capital letter");
        }
        else{
            await axios.post('http://localhost:3002/register',alldata,config)
            .then(function(res){
                if(res.data.status==="Syntax_error")
                {
                    alert("Syntax_error contact admin")
                }
                else{
                    alert("insert")
                    window.location.href=("/Dashboard")
                }
            })
            .catch(function(error){
                alert("linking error")
            })
            
        }
    }
    return(
        <>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4 text-center">
                    <h1>Registration Form</h1>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <form onSubmit={takealldata}>
            <div className="row mt-3">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-2">
                    <label className="firstnamerflabel">
                        First name :
                    </label>
                </div>
                <div className="col-lg-2">
                    <input type={"text"} name="firstnamerf" id="firstnamerf" className="firstnamerf form-control"/>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-2">
                    <label className="lastnamerflabel">
                        Last name :
                    </label>
                </div>
                <div className="col-lg-2">
                    <input type={"text"} name="lastnamerf" id="lastnamerf" className="lastnamerf form-control"/>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-2">
                    <label className="emailrflabel">
                        Email :
                    </label>
                </div>
                <div className="col-lg-2">
                    <input type={"email"} name="emailrf" id="emailrf" className="emailrf form-control"/>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-2">
                    <label className="phonerflabel">
                        Phone no:
                    </label>
                </div>
                <div className="col-lg-2">
                    <input type={"text"} name="phonerf" id="phonerf" className="phonerf form-control"/>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-2">
                    <label className="passwordrflabel">
                        Password :
                    </label>
                </div>
                <div className="col-lg-2">
                    <input type={"password"} name="passwordrf" id="passwordrf" className="passwordrf form-control"/>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row mt-3">
            <div className="col-lg-5">&nbsp;</div>
            <div className="col-lg-2 text-center">
                <input type={"submit"} name="sumbitrf" id="sumbitrf" className='sumbitrf form-control bg-primary text-light' value={"Submit"}/>
               
            </div>
            <div className="col-lg-5">&nbsp;</div>
            </div>
            </form>
        </div>
        </>
    );
}