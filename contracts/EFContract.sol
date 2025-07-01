// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EFContract is ERC20 {
    address private owner;

    constructor() ERC20("EFToken", "EFT") {
        owner=msg.sender;
        _mint(msg.sender, 1000000 * 10**18);
    }
}