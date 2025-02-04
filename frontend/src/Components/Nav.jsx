
import { Link,useNavigate } from 'react-router-dom'

const Nav = () => {
  // here auth store user data in local storage
  const auth= localStorage.getItem('user')
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <>
        <div className = "app">
           <ul className = "nav-ul">
            <li> <Link to ="/home">Product</Link></li>
            <li> <Link to ="/add">Add Product</Link></li>
            <li> <Link to ="/update">Update Product</Link></li>
           
            <li> <Link to ="/profile">Profile</Link></li>
            <li>{auth ?  <Link onClick={logout} to ="/SignUp">Logout</Link>:
            <Link to ="/signup">SignUp</Link>}</li>
           </ul>
        </div>
            
    </>
  )
}

export default Nav