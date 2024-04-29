const dotenv = require("dotenv");
const twilio = require("twilio");

class TwilioHelper {
  constructor({ sid = '', token = '' } = {sid: '', token: ''}) {
    const sidToUse = sid || process.env.TWILIO_ACCOUNT_SID;
    const tokenToUse = token || process.env.TWILIO_AUTH_TOKEN;
    this.client = twilio(sidToUse, tokenToUse);
  }
  async sendSMS(to, message) {
    try {
      const response = await this.client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: to,
      });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async createSubAccount(friendlyName) {
    try {
      const response = await this.client.api.accounts.create({
        friendlyName: friendlyName,
      });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async fetchAvailableNumbers(countryCode) {
    try {
      const response = await this.client
        .availablePhoneNumbers(countryCode)
        .local.list();
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async purchaseNumber(phoneNumber) {
    try {
      const response = await this.client.incomingPhoneNumbers.create({
        phoneNumber: phoneNumber,
      });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async submitTemplateForApproval(serviceSid, template) {
    try {
      const response = await this.client.verify
        .services(serviceSid)
        .entityTemplates.create({
          template: template,
        });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = TwilioHelper;
