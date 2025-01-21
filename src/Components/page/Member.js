import { useState } from "react"
import './Member.css'
const Member=()=>{
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')

    const [erroruserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    const [userColor,setUserColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [rePasswordColor,setRePasswordColor] = useState('')
    
    const validateForm = (e) =>{
        e.preventDefault() /*ไม่รีเช็ตข้อมูลเมื่อรีหน้าเว็บ จะเก็บข้อมูลไว้ */
        if(userName.length >= 8){
            setErrorUserName('')
            setUserColor('Green')
        }
        else{
            setErrorUserName('ป้อนชื่อผู้ใช้มากกว่าหรือเท่ากับ 8ตัวอักษร')
            setUserColor('Red')
        }

        if(email.includes('@')){
            setErrorEmail('')
            setEmailColor('Green')
        }
        else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('Red')
        }

        if(password.length >= 8){
            setErrorPassword('')
            setPasswordColor('Green')
        }
        else{
            setErrorPassword('รหัสผ่านต้องมากกว่าหรือเท่ากับ 8ตัวอักษร')
            setPasswordColor('Red')
        }

        if((repassword === password) && (repassword.length !== 0)){
            setErrorRePassword('')
            setRePasswordColor('Green')
        }
        else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน หรือ ไม่มีรหัสผ่าน')
            setRePasswordColor('Red')
        }
    }
    return(
        <div className = 'container'>
            <form className = 'form' onSubmit = {validateForm}> {/*ส่วนที่ให้กรอกข้อมูล*/}
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className = 'form-control'> 
                    <label>ชื่อผู้ใช้</label>
                    <input type = 'text' value = {userName} onChange = {(e)=>setUserName(e.target.value)} style = {{borderColor:userColor}}/>
                    <small style = {{color: 'red'}}>{erroruserName}</small>
                </div>
                
                <div className = 'form-control'>
                    <label>อีเมล</label>
                    <input type = 'text' value = {email} onChange = {(e)=>setEmail(e.target.value)} style = {{borderColor:emailColor}}></input>
                    <small style = {{color:'red'}}>{errorEmail}</small>
                </div>

                <div className = 'form-control'>
                    <label>รหัสผ่าน</label>
                    <input type = 'password' value = {password} onChange = {(e)=>setPassword(e.target.value)} style = {{borderColor:passwordColor}}></input>
                    <small style = {{color:'red'}}>{errorPassword}</small>
                </div>

                <div className = 'form-control'>
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type = 'password' value = {repassword} onChange = {(e)=>setRePassword(e.target.value)} style = {{borderColor:rePasswordColor}}></input>
                    <small style = {{color:'red'}}>{errorRePassword}</small>
                </div>

                <button type = 'submit'>ลงทะเบียน</button>

            </form>
        </div>
    );
}

export default Member