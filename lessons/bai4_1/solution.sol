// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    struct Student{
        string name;
        uint age;
        bool isRegistered;
    }
    mapping(address => Student) public students;

    modifier onlyUnregistered(){
            require(!students[msg.sender].isRegistered, "Da dang ky");
            _;
    }

    function register(string calldata name, uint age) public onlyUnregistered{
        students[msg.sender]  = Student(name,age,true);
        
    }
    function getStudent(address user) public view returns (Student memory){
        return students[user];
    }
    function isStudentRegistered(address user) public view returns (bool){
        return students[user].isRegistered; 
    }
}