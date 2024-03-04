import React  ,{ useState}from "react";


const Form = () => {

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:''
    

    })
    // const handleName = (e) => {
    //     console.log(12,e.target.name);
    //     // setName(e.target.value);
    // }

    const handleInput=(e)=>{
    console.log(e.target.name);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();

    }


  

    return (
        <div>
          <form onSubmit={handleSubmit}>
          <label>Name:
                <input type="text" onChange={handleInput} value={formData.name} name="Name "/>
            </label>
            <label>Email:
                <input type="email" onChange={handleInput} value={formData.email} name="email"/>
            </label>
            <label>Password:
                <input type="password" onChange={handleInput} value={formData.password} name="password"/>
            </label>
            
          </form>
        </div>
    )

}
export default Form;