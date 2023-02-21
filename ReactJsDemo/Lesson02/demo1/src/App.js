import logo from "./logo.png";
import "./App.css";
import FuncCompDemo from "./components/FuncCompDemo";
import ClassCompDemo from "./components/ClassCompDemo";
import MemberInfo from "./components/MemberInfo";
import StateDemo from "./components/StateDemo";

function App() {
  // arrow function
  const Member = (props) => {
    return (
      <div>
        <h2>Member:</h2>
        <p>
          Xin chào, <strong>{props.name}</strong>
          <br />
          Tài khoản của bản: <b>{props.userName}</b>
        </p>
      </div>
    );
  };

  // Component Lồng nhau

  // const Avarta = (props)=>{
  //   return(
  //     <div>
  //       <img src={props.link} alt="Avatar" />
  //     </div>
  //   )
  // }

  // const MemberInfo = (props)=>{
  //   return(
  //     <div>
  //       <Avarta link={props.info.path} />
  //       <h2>Name: {props.info.name}</h2>
  //       <h3>Tuổi: {props.info.age}</h3>
  //     </div>
  //   )
  // }
  // object member
  const member = {
    path:"/giang.png",
    name:"Hoàng Giang",
    age:20
  }

  return (
    <div className="App">
      <img src={logo} alt="Devmaster Academy" />
      {/* Sử dụng function component */}
      <FuncCompDemo
        name="Chung Trịnh"
        userName="ChungChung"
        company="Devmaster Academy"
      />

      {/* sử dụng class component */}
      <ClassCompDemo
        name="Chung Chung"
        userName="Devmaster"
        company="Devmaster Academy"
      />

      {/* Sử dụng arrow function */}
      <Member name="Trường Giang" userName="GiangGiang" />

      <MemberInfo  info={member} />

      {/* test State demo  */}
      <StateDemo />
    </div>
  );
}

export default App;
