import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

const zeroAddress = "0x0000000000000000000000000000000000000000";
const emptyFeeRecipients: any[] = [];
const emptyFeePercentages: any[] = [];

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
