// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract SuperscyptZkTestToken is ERC20, ERC20Burnable {
    constructor() ERC20("Superscypt zkTest Token", "SzT") {}

    function mint(uint256 amount) public {
        _mint(_msgSender(), amount * decimals());
    }
}