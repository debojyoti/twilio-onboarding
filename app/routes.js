const TwilioHelper = require("./twilio-helper");

const routes = [
  {
    method: "POST",
    path: "/subaccount",
    callbackHandler: async (req, res) => {
      const { friendlyName } = req.body;
      // Create a new twilio helper instance
      const twilioHelper = new TwilioHelper();
      const response = await twilioHelper.createSubAccount(friendlyName);
      res.json(response);
    },
  },
  {
    method: "GET",
    path: "/available-numbers",
    callbackHandler: async (req, res) => {
      const { countryCode } = req.query;
      // Create a new twilio helper instance
      const twilioHelper = new TwilioHelper();
      const response = await twilioHelper.fetchAvailableNumbers(countryCode);
      res.json(response);
    },
  },
  {
    method: "POST",
    path: "/purchase-number",
    callbackHandler: async (req, res) => {
      const { phoneNumber } = req.body;
      // Create a new twilio helper instance
      const twilioHelper = new TwilioHelper();
      const response = await twilioHelper.purchaseNumber(phoneNumber);
      res.json(response);
    },
  },
  {
    method: "POST",
    path: "/send-sms",
    callbackHandler: async (req, res) => {
      const { to, message } = req.body;
      // Create a new twilio helper instance
      const twilioHelper = new TwilioHelper();
      const response = await twilioHelper.sendSMS(to, message);
      res.json(response);
    },
  },
  {
    method: "POST",
    path: "/submit-template",
    callbackHandler: async (req, res) => {
      const { serviceSid, template } = req.body;
      // Create a new twilio helper instance
      const twilioHelper = new TwilioHelper();
      const response = await twilioHelper.submitTemplateForApproval(
        serviceSid,
        template
      );
      res.json(response);
    },
  },
];

module.exports = routes;
