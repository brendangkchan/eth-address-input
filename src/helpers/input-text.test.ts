import { expect } from 'chai';
import getInputText from './input-text';

describe('Input user message feedback', () => {
	it('should return no messages if input is empty', () => {
		const { errorText, labelText } = getInputText({
			value: '',
    	isEthAddress: false,
    	ensNameMatch: null,
    	ensAddrMatch: null,
    });
		expect(errorText).to.be.null;
		expect(labelText).to.be.null;
	});

	it('should return success message if input is valid address', () => {
		const { errorText, labelText } = getInputText({
			value: 'asdf',
    	isEthAddress: true,
    	ensNameMatch: null,
    	ensAddrMatch: null,
    });
		expect(errorText).to.be.null;
		expect(labelText).to.contain('Valid');
	});

	it('should return success message if input is valid address and ENS match', () => {
		const { errorText, labelText } = getInputText({
			value: 'asdf',
    	isEthAddress: true,
    	ensNameMatch: true,
    	ensAddrMatch: null,
    });
		expect(errorText).to.be.null;
		expect(labelText).to.contain('Valid');
		expect(labelText).to.contain('ENS');
	});

	it('should return error message for incomplete eth address', () => {
		const { errorText, labelText } = getInputText({
			value: '0x',
    	isEthAddress: false,
    	ensNameMatch: null,
    	ensAddrMatch: null,
    });
		expect(errorText).to.contain('Please');
		expect(errorText).to.contain('address');
		expect(labelText).to.be.null;
	});

	it('should return error message if input is invalid address and name', () => {
		const { errorText, labelText } = getInputText({
			value: 'asdf',
    	isEthAddress: false,
    	ensNameMatch: null,
    	ensAddrMatch: null,
    });
		expect(errorText).to.contain('Please');
		expect(errorText).to.contain('name');
		expect(labelText).to.be.null;
	});

	it('should return success message if input is valid ENS name', () => {
		const { errorText, labelText } = getInputText({
			value: 'asdf',
    	isEthAddress: false,
    	ensNameMatch: null,
    	ensAddrMatch: true,
    });
		expect(errorText).to.be.null;
		expect(labelText).to.contain('ENS');
	});
});
