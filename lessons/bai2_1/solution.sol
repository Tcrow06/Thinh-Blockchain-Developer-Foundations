// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SmartContract {
    string private message;

    constructor(string memory _message) {
        message = _message;
    }

    function updateMessage(string memory newMsg) public {
        message = newMsg;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
