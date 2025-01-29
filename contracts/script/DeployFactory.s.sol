// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import { SubscriptionToken } from "contracts/src/SubscriptionToken.sol";

contract CounterScript is Script {

    EDUToken public factory;
    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        factory = new SubscriptionToken(30);

        console.log("Factory Deployed: ", address(factory));

        vm.stopBroadcast();
    }
}
