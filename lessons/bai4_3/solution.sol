// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Voting {
    struct Candidate{
        string name;
        uint voteCount;
    }
    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;
    address public owner;
    uint public candidateCount;

    event Voted(address indexed voter, uint candidateId);
    
    constructor(){
        owner = msg.sender;
    }
    modifier onlyOwner(){
        require(owner==msg.sender, "Khong co quyen");
        _;
    }
    modifier onlyNotVoted(){
        require(!hasVoted[msg.sender], "Ban da vote roi");
        _;
    }
     modifier onlyHasCandidate(uint candidateId){
        require (candidateId<candidateCount, "Ung vien khong ton tai");
        _;
    }
    function addCandidate(string calldata name) public onlyOwner{
        candidates[candidateCount++] = Candidate(name,0);
    }
    function vote(uint candidateId) public onlyNotVoted onlyHasCandidate(candidateId){
        ++candidates[candidateId].voteCount;
        hasVoted[msg.sender] = true;
        emit Voted(msg.sender, candidateId);
    }
    function getCandidate(uint id ) public view returns(Candidate memory) {
        return candidates[id];
    }
}