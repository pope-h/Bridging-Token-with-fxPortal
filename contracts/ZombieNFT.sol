// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract ZombieNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("ZombieNFT", "ZNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmTPb9kwfALNUy7TYxuJ5ibeTZcxy4t2okQEaSQnZjdvGE/";
    }

    function promptDescription() external pure returns (string memory) {
        return "A zombie portrait painted in the style of Van Gogh, with swirling brushstrokes and vibrant colors.";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}