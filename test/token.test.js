const { expect } = require('chai');

describe('Token Contract', () => {
    let tokenContract, token, owner, addr1, addr2;
    
    beforeEach(async () => {
        tokenContract = await ethers.getContractFactory('Token');
        token = await tokenContract.deploy();
        [owner, addr1, addr2] = await ethers.getSigners();
    });

    describe('Deployment', () => {
        it('Should mint total supply', async () => {
            const ownerBalance = await token.balanceOf(owner.address);
            expect(await token.totalSupply()).to.equal(ownerBalance);
        });
    });
})