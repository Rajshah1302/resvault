// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SubscriptionToken is ERC20, Ownable {
    uint256 public mintFee; // Fee required to mint tokens
    uint256 public subscriptionDuration; // Duration of subscription (30 days)

    struct UserInfo {
        uint256 lastPaymentTime;
    }

    mapping(address => UserInfo) public userInfo;

    event TokensMinted(address indexed user, uint256 amount);
    event SubscriptionPaid(address indexed user, uint256 amount, uint256 nextDueDate);

    constructor(uint256 _mintFee) ERC20("SubscriptionToken", "STKN") {
        mintFee = _mintFee;
        subscriptionDuration = 30 days;
    }

    modifier isSubscribed() {
        require(
            block.timestamp <= userInfo[msg.sender].lastPaymentTime + subscriptionDuration,
            "Subscription expired, please renew."
        );
        _;
    }

    function setMintFee(uint256 _mintFee) external onlyOwner {
        mintFee = _mintFee;
    }

    function mint(uint256 amount) external payable isSubscribed {
        require(msg.value == mintFee * amount, "Incorrect fee amount sent.");

        _mint(msg.sender, amount);
        emit TokensMinted(msg.sender, amount);
    }

    function paySubscription() external payable {
        require(msg.value == mintFee, "Incorrect subscription fee.");

        userInfo[msg.sender].lastPaymentTime = block.timestamp;
        emit SubscriptionPaid(msg.sender, msg.value, block.timestamp + subscriptionDuration);
    }

    function checkSubscriptionStatus(address user) external view returns (bool) {
        return block.timestamp <= userInfo[user].lastPaymentTime + subscriptionDuration;
    }

    function withdrawFees() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    receive() external payable {}
}
