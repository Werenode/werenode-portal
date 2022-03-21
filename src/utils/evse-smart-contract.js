export const CONTRACT_ADDRESS = 'KT1MYAMk3nYEiCHf9w9Ws2E3iMMhUSjJ3gA5';
export const EVSE_MANAGER_ADDRESS = 'tz1TQyYUuFbAroVARwhh5Fgqu2JE9HrvNi3a';

export class Evse {
    constructor(id, managerAddress, ownerAddress, token_id, data) {
        this.pid = id;
        this.pmng = managerAddress;
        this.powner = ownerAddress;
        this.ptoken_id = token_id;
        this.pdata = data;
    }
}
