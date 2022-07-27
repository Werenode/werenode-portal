export const CONTRACT_ADDRESS = 'KT1C733HVBQFkPCMXu9VQLv18k6HYShXPJNz';
export const EVSE_MANAGER_ADDRESS = 'tz1hSU82WoQyaY1t3wwejNxE1tAqo567tCu5';
export const EVSE_LINK = 'https://werenode.com/s/?evse='

export class Evse {
    constructor(id, managerAddress, ownerAddress, token_id, data) {
        this.pid = id;
        this.pmng = managerAddress;
        this.powner = ownerAddress;
        this.ptoken_id = token_id;
        this.pdata = data;
    }
}
