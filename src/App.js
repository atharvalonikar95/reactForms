import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './App.css';
import Menu from './Menu';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AdminPanel from './AdminPanel';
import AddProduct from './AddProduct';
import UserList from './UserList';
import UserDetails from './UserDetails';


const Child=React.memo(({handleClick})=>{
  useEffect(()=>console.log("child rendered"),[])
  return(
    <>
    <button onClick={handleClick}>calculate</button>
    </>
  )
})

function App() {
  // const navigate=useNavigate()
  // const [mobiles, setMobiles] = useState([
  //   {
  //     id: 1,
  //     name: "iPhone 15 Pro",
  //     description:
  //       "Apple flagship smartphone with A17 Pro chip, titanium body, and advanced camera system.",
  //     price: 134999,
  //     image:
  //       "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy S24 Ultra",
  //     description:
  //       "Premium Android smartphone with Snapdragon processor, S-Pen support, and 200MP camera.",
  //     price: 129999,
  //     image:
  //       "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
  //   },
  //   {
  //     id: 3,
  //     name: "OnePlus 12",
  //     description:
  //       "High-performance smartphone featuring AMOLED display, fast charging, and smooth UI experience.",
  //     price: 64999,
  //     image:
  //       "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
  //   },
  //   {
  //     id: 4,
  //     name: "Google Pixel 8",
  //     description:
  //       "Google smartphone with AI-powered camera features and clean Android experience.",
  //     price: 75999,
  //     image:
  //       "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  //   },
  //   {
  //     id: 5,
  //     name: "Xiaomi 14 Pro",
  //     description:
  //       "Powerful smartphone with Leica cameras, Snapdragon chipset, and ultra-fast charging.",
  //     price: 69999,
  //     image:
  //       "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
  //   },
  //   {
  //     id: 6,
  //     name: "Realme GT 6",
  //     description:
  //       "Gaming-focused smartphone with high refresh rate display and powerful battery backup.",
  //     price: 42999,
  //     image:
  //       "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
  //   },
  //   {
  //     id: 7,
  //     name: "Nothing Phone 2",
  //     description:
  //       "Unique transparent design smartphone with Glyph lighting interface and smooth Android UI.",
  //     price: 44999,
  //     image:
  //       "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=500",
  //   },
  //   {
  //     id: 8,
  //     name: "Moto Edge 50 Pro",
  //     description:
  //       "Stylish Motorola smartphone featuring curved display, fast charging, and premium cameras.",
  //     price: 37999,
  //     image:
  //       "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500",
  //   },
  // ]);
  // const users = [
  //   {
  //     id: 1,
  //     username: "john_doe",
  //     name: "John Doe",
  //     email: "john.doe@gmail.com",
  //     website: "www.johndoe.com",
  //     phone: "+1 9876543210",
  //   },
  //   {
  //     id: 2,
  //     username: "sarah_smith",
  //     name: "Sarah Smith",
  //     email: "sarah.smith@gmail.com",
  //     website: "www.sarahsmith.dev",
  //     phone: "+1 9123456780",
  //   },
  //   {
  //     id: 3,
  //     username: "alex_jones",
  //     name: "Alex Jones",
  //     email: "alex.jones@gmail.com",
  //     website: "www.alexjones.io",
  //     phone: "+1 9988776655",
  //   },
  //   {
  //     id: 4,
  //     username: "emma_watson",
  //     name: "Emma Watson",
  //     email: "emma.watson@gmail.com",
  //     website: "www.emmawatson.me",
  //     phone: "+1 9012345678",
  //   },
  //   {
  //     id: 5,
  //     username: "michael_brown",
  //     name: "Michael Brown",
  //     email: "michael.brown@gmail.com",
  //     website: "www.michaelbrown.tech",
  //     phone: "+1 9765432109",
  //   },
  //   {
  //     id: 6,
  //     username: "olivia_green",
  //     name: "Olivia Green",
  //     email: "olivia.green@gmail.com",
  //     website: "www.oliviagreen.com",
  //     phone: "+1 9345678901",
  //   },
  //   {
  //     id: 7,
  //     username: "david_miller",
  //     name: "David Miller",
  //     email: "david.miller@gmail.com",
  //     website: "www.davidmiller.dev",
  //     phone: "+1 9234567890",
  //   },
  //   {
  //     id: 8,
  //     username: "sophia_lee",
  //     name: "Sophia Lee",
  //     email: "sophia.lee@gmail.com",
  //     website: "www.sophialee.io",
  //     phone: "+1 9456123789",
  //   },
  // ];
  const [currDollar,setCurrDollar]=useState(1)
  // const myBal=useMemo(()=>currDollar*95.01,[currDollar])
  const initialState = { users: [{ id: 1, name: "abc", job: "dev" }], name: "", job: "" }
  const [state, dispatch] = useReducer(reducer, initialState)
  function reducer(state, action) {
    switch (action.type) {
      case "set_name":
        return {
          ...state,
          name: action.payload
        }
      case "set_job":
        return {
          ...state,
          job: action.payload
        }
      case "Add user":
        return {
          ...state,
          users: [...state.users, action.payload]
        }
      default:
        return state
    }
  }
  useEffect(() => {
    console.log("parent rendered")
  }, [state])
  const handleClick=useCallback(()=>{
    console.log(currDollar*95.01) 
  },[currDollar])

  return (
    // <BrowserRouter >
    //   {/* <div style={{height:"100px",width:"100%",border: '1px solid black', display: "flex", alignItems: "center", justifyContent: 'center', gap:20}}>
    //     <Link to={`/`}>home</Link>
    //     <Link to={`/admin`}>Admin</Link>
    //   </div> */}
    //   <Routes>
    //     {/* <Route path={`/admin`} element={<AdminPanel mobiles={mobiles} />}></Route>
    //     <Route path={`/`} element={<ProductList mobiles={mobiles} />}></Route>
    //     <Route path={`/products/:id`} element={<ProductDetails mobiles={mobiles} />}></Route>
    //     <Route path={`/admin/products/:id`} element={<AddProduct mobiles={mobiles} setMobiles={setMobiles} />}></Route>
    //     <Route path={`/admin/addProduct`} element={<AddProduct mobiles={mobiles} setMobiles={setMobiles} />}></Route> */}
    //     <Route path={`/`} element={<UserList users={users} />}></Route>
    //     <Route path={`/users/:id`} element={<UserDetails users={users} />}></Route>

    //   </Routes>
    // </BrowserRouter>
    <div>
      <Child handleClick={handleClick}/>
      <input value={currDollar} onChange={(e) =>setCurrDollar(Number(e.target.value))}/>
      {/* <p>{myBal}</p> */}
      <input value={state.name} onChange={(e) => dispatch({ type: "set_name", payload: e.target.value })} />
      <input value={state.job} onChange={(e) => dispatch({ type: "set_job", payload: e.target.value })} />
      <button
        onClick={
          () => {
            dispatch({ type: "Add user", payload: { id: state.users.length + 1, name: state.name, job: state.job } })
            state.name = ""
            state.job = ""
          }
        }>
        Add user
      </button>
      <p>{state.name} {state.job}</p>
      {
        state.users.map(user => {
          return (
            <div key={user.id}>
              <p>{user.name} {user.job}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
