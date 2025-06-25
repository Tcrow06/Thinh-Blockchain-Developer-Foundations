// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistryV2 {

    struct Student{
        string name;
        uint age;
        bool isRegistered;
    }

    address public owner;
    mapping(address => Student) public students;

    event StudentRegistered(address indexed student, string name, uint age);
    constructor(){
        owner = msg.sender;
    }

    modifier onlyUnregistered(address _address){
        require(!students[_address].isRegistered, "Da dang ky");
        _;
    }
    modifier onlyOwner(){
        require(owner == msg.sender, "Khong co quyen");
        _;
    }
    function getStudent(address user) public view returns (Student memory){
        return students[user];
    }
    function isStudentRegistered(address user) public view returns (bool){
        return students[user].isRegistered; 
    }
    function registerStudent(string calldata name, uint age, address _address) public onlyUnregistered(_address) onlyOwner{
        students[_address]  = Student(name,age,true);
        emit StudentRegistered(_address,name,age);
    }
}