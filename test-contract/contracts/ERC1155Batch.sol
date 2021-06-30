// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC1155Batch is ERC1155, ERC1155Holder {
    IERC1155 public self;
    string public name;
    string public symbol;
    string public metadata;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _metadata
    ) ERC1155("") {
        name = _name;
        symbol = _symbol;
        metadata = _metadata;
        self = IERC1155(address(this));
    }

    function mintTransfer(
        address[] memory _to,
        uint256[] memory _ids,
        uint256[] memory _values,
        bytes memory _data
    ) public {
        _mintBatch(address(this), _ids, _values, _data);
        for (uint256 i = 0; i < _to.length; i++) {
            self.safeTransferFrom(
                address(this),
                _to[i],
                _ids[i],
                _values[i],
                _data
            );
        }
    }

    function batchMint(
        address[] memory _to,
        uint256[] memory _ids,
        uint256[] memory _values,
        bytes memory _data
    ) public {
        for (uint256 i = 0; i < _to.length; i++) {
            _mint(_to[i], _ids[i], _values[i], _data);
        }
    }

    function updateMetadata(string memory _metadata) public {
        metadata = _metadata;
    }

    function uri(uint256 _id) public view override returns (string memory) {
        return string(abi.encodePacked(metadata, uint2str(_id), ".json"));
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC1155, ERC1155Receiver)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}
