// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.5.16;

contract StarNotary {
    string public starName;
    address public starOwner;

    event starClaimed(address owner);
    event nameChanged(string message);

    constructor() public {
        starName = "Awesome Udacity Star";
    }

    function claimStar() public {
        starOwner = msg.sender;
        emit starClaimed(msg.sender);
    }

    function changeName(string memory name) public {
        starName = name;
        emit nameChanged("star name changed successfully");
    }
}