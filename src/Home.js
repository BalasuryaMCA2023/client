// import create from'./create'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'

export default function Home(){
    return(
        <>
        <div id="home">
         <h3>Welcome to <span id="span-1">SBI BANK</span>-<span id="span-2">ATM</span></h3>
         <p> Available 24/7 from almost any device with an internet connection</p>
          <p>Create new Account ,balance checks and deposit your money.</p>

          <Button variant='info'><a href='../src/Deposit.js'>Login</a></Button>  <Button variant='warning'><a href='../src/create.js'>Sign Up</a></Button>

          {/* <button><a href="https://getbootstrap.com/">downlond </a></button> */}

        </div>
        
        
       
        </>
    )
}
