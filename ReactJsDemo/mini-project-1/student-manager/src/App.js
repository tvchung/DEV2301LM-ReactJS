import { React, Component } from "react";
import Control from "./components/Control";
import Form from "./components/Form";
import StudentList from "./components/StudentList";

class App extends Component {
  constructor(props){
    super(props);
    // tổ chức thành phần dữ liệu trong state 
    this.state = {
      // Đối tượng dữ liệu student
      students : [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" }
      ]
      // Thuộc tính quản lý ẩn/hiện form
      ,isToggle:false
      ,student:""
      ,actionName:""
      ,searchData:""
      ,orderField:"" // cột cần sắp
      ,orderBy:""  // sẮp tăng hay giảm
    }
  }
  // arrow function 
  // Add -> show form
  handleAdd = ()=>{
    this.setState({
      isToggle:true,
      actionName:"Add",
      student:{}
    })
  }
  // xem
  handleView =(student)=>{
    console.log(student);
    this.setState({
      isToggle:true,
      student:student,
    })
  }
  // sửa
  handleEdit = (student)=>{
    this.setState({
      isToggle:true,
      student:student,
      actionName:"Update"
    })
  }

  handleAction = (isToggle,actionName,studentSelected) =>{
    this.setState({
      isToggle:isToggle,
      actionName:actionName,
      student:studentSelected
    })
  }
  // Cập nhật dữ liệu từ Form
  handleUpdate = (studentUpdate)=>{
    // cập nhật dữ liệu trong state với students
    let {students} = this.state; // lấy dữ liệu gốc trong state
    // duyệt xem đối tượng nào là đối tượng đang cần sửa - cập nhật lại đối tượng đó là studentUpdate
    students.forEach((st,index)=>{
      if(st.studentId === studentUpdate.studentId){
        students[index] = studentUpdate;
      }
    })
    // cập nhật lại state cho App
    this.setState({
      students:students
    })
  }
  // Thêm mới dữ liệu
  handleAddSave = (studentAddSave)=>{
    // Thêm mới dữ liệu trong state với students
    let {students} = this.state; // lấy dữ liệu gốc trong state
    // Thêm vào cuối mảng students
    students.push(studentAddSave);
    // cập nhật lại state cho App
    this.setState({
      students:students
    })
  }
  // Xóa dữ liệu
  handleDelete = (student)=>{
    console.log(student);
    // Lấy dữ liệu cũ
    let {students} = this.state; // lấy dữ liệu gốc trong state
    // Tìm kiếm đến đối tượng sinh viên cần xóa
    students.forEach((st,index)=>{
      if(st.studentId === student.studentId){
        students.splice(index,1);
      }
    })
     // cập nhật lại state cho App
     this.setState({
      students:students
    })
  }
  // xử lý cho trường hợp tìm kiếm
  handleSearch = (searchData)=>{
    // console.log("Control:",searchData);
    this.setState({
      searchData:searchData
    })
    // console.log("state:", this.state.searchData);
  }
  // Xử lý cho sắp xếp
  handleSort = (orderField, orderBy)=>{
      this.setState({
        orderField:orderField,
        orderBy:orderBy
      })
  }
  render() {
    let elementForm = this.state.isToggle?
        <Form   student={this.state.student} 
                actionName={this.state.actionName}
                handleUpdate={this.handleUpdate} 
                handleAddSave={this.handleAddSave}/>:"";
    // xử lý dữ liệu khi có điều kiện lọc
    let students = [];
    if(this.state.searchData !==""){
      // thực hiện tìm những dữ liệu trên cột studentName có giá trị chứa searchData
      this.state.students.forEach(st=>{
        if(st.studentName.toLocaleLowerCase().includes(this.state.searchData.toLocaleLowerCase())){
          students.push(st);
        }
      });
    }else{
      students = [...this.state.students];
    }
    // Thực hiện sắp xếp nếu có
    if(this.state.orderField === "studentName"){
      if(this.state.orderBy ==="ASC"){
        students.sort((a,b)=>(a.studentName>b.studentName)?1:(a.studentName>b.studentName)?-1:0);
      }else{
        students.sort((a,b)=>(a.studentName>b.studentName)?-1:(a.studentName>b.studentName)?1:0);
      }
    }
    // theo tuổi nếu có
    if(this.state.orderField === "age"){
      if(this.state.orderBy==="ASC"){
        students.sort((x,y)=>x.age-y.age);
      }else{
        students.sort((x,y)=>y.age-x.age);
      }
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* Control Component  */}
              <Control handleAdd = {this.handleAdd} 
                        handleSearch={this.handleSearch}
                        handleSort={this.handleSort}/>
              {/* Student List components */}
              <StudentList 
                // students = {this.state.students}
                students = {students}
                handleView={this.handleView} 
                handleEdit={(student)=>this.handleEdit(student)}
                handleDelete = {(student)=>this.handleDelete(student)}
                />
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* Form components */}
            {/* <Form /> */}
            {elementForm}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
