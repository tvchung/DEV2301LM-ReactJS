import React, { Component } from "react";
import Student from "./Student";

export default class StudentList extends Component {

  // Xem
  handleView = (student)=>{
    this.props.handleView(student);
  }

  //Sửa
  handleEdit = (student)=>{
    this.props.handleEdit(student);
  }
 
  // Xóa
  handleDelete = (student)=>{
    this.props.handleDelete(student)
  }
  render() {
      // Lấy dữ liệu từ props 
      let {students} = this.props;
    //   console.log(students);
      // tạo các student item
      let studentElement = students.map((item,key)=>{
          return <Student key={key} index={key} student ={item} 
            handleView={(student)=>this.handleView(student)}
            handleEdit = {(student)=>this.handleEdit(student)}
            handleDelete = {(student)=>this.handleDelete(student)}
          />;
      });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
                {/* Student Row */}
                {/* <Student />
                <Student />
                <Student /> */}
                {studentElement}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
