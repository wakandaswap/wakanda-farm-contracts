async function main() {
    const [deployer] = await ethers.getSigners();

    const balance = await deployer.getBalance();
    console.log(`Balance: ${balance.toString()}`);

    const tokenContract = await ethers.getContractFactory('Token');
    const token = await tokenContract.deploy();
    console.log(`Token deployed: ${token.address}`);
}

main().then(() => process.exit(0)).catch(err => {
    console.error(err);
    process.exit(1);
})