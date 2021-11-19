const hre = require("hardhat");

async function main() {
  // const IterableMapping = await hre.ethers.getContractFactory(
  //   "IterableMapping"
  // );
  // const contract = await IterableMapping.deploy();

  // await contract.deployed();

  // console.log("IterableMapping deployed to:", contract.address);

  // We get the contract to deploy
  const ShibUp = await hre.ethers.getContractFactory("ShibUp", {
    libraries: {
      IterableMapping: "0x41d2A7900CCD18b62Ab94Eb8A4d4116a52284715",
    },
  });
  const contract = await ShibUp.deploy();

  await contract.deployed();

  console.log("ShibUp deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
