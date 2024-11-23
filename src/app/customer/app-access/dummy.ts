export type API = {
  id: string;
  name: string;
  identifier: string;
  authorized: boolean;
}

export type RequestLog = {
  datetime: string;
  action: string;
  endpoint: string;
  status: string;
}

export const applications = [
    {
      name: "Budgetly",
      type: "Regular Web Application",
      latestRequest: "2 minutes ago",
      givenAccessOn: "12/11/2024",
      detail: {
        "Request Log": [
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To aggregate account balances",
            endpoint: "/accounts/{AccountId}/balances",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To understand the transaction patterns",
            endpoint: "/accounts/{AccountId}/transactions",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of beneficiaries",
            endpoint: "/accounts/{AccountId}/beneficiaries",
            status: "Failed",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of direct debits",
            endpoint: "/accounts/{AccountId}/direct-debits",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To create an account request",
            endpoint: "/account-requests",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of webhooks",
            endpoint: "/webhooks",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of products",
            endpoint: "/accounts/{AccountId}/product",
            status: "Failed",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of scheduled payments",
            endpoint: "/accounts/{AccountId}/scheduled-payments",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of international payments",
            endpoint: "/international-payments",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of international payment",
            endpoint: "/international-payments/{PaymentId}",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To create a consent for payment",
            endpoint: "/payment-consents",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of consent",
            endpoint: "/payment-consents/{ConsentId}",
            status: "Failed",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of international payments",
            endpoint: "/international-payments",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of international payment",
            endpoint: "/international-payments/{PaymentId}",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To create a consent for payment",
            endpoint: "/payment-consents",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of consent",
            endpoint: "/payment-consents/{ConsentId}",
            status: "Failed",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of international payments",
            endpoint: "/international-payments",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of international payment",
            endpoint: "/international-payments/{PaymentId}",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To create a consent for payment",
            endpoint: "/payment-consents",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of consent",
            endpoint: "/payment-consents/{ConsentId}",
            status: "Failed",
          }
        ],
        "APIs": [
          {
          id: "1",
          name: "Get Accounts",
          identifier: "/accounts",
          authorized: true,
          },
          {
          id: "2",
          name: "Get Account Details",
          identifier: "/accounts/{AccountId}",
          authorized: true,
          },
          {
          id: "3",
          name: "Get Balances",
          identifier: "/accounts/{AccountId}/balances",
          authorized: false,
          },
          {
          id: "4",
          name: "Get Transactions",
          identifier: "/accounts/{AccountId}/transactions",
          authorized: false,
          },
          {
          id: "5",
          name: "Get Beneficiaries",
          identifier: "/accounts/{AccountId}/beneficiaries",
          authorized: true,
          },
          {
          id: "6",
          name: "Get Standing Orders",
          identifier: "/accounts/{AccountId}/standing-orders",
          authorized: false,
          },
          {
          id: "7",
          name: "Get Direct Debits",
          identifier: "/accounts/{AccountId}/direct-debits",
          authorized: true,
          },
          {
          id: "8",
          name: "Get Products",
          identifier: "/accounts/{AccountId}/product",
          authorized: false,
          },
          {
          id: "9",
          name: "Create Account Request",
          identifier: "/account-requests",
          authorized: true,
          },
          {
          id: "10",
          name: "Webhook Subscriptions",
          identifier: "/webhooks",
          authorized: true,
          },
          {
          id: "11",
          name: "Payment Initiation",
          identifier: "/payments",
          authorized: false,
          },
          {
          id: "12",
          name: "Get Payment Details",
          identifier: "/payments/{PaymentId}",
          authorized: true,
          },
          {
          id: "13",
          name: "Funds Confirmation",
          identifier: "/funds-confirmations",
          authorized: false,
          },
          {
          id: "14",
          name: "Scheduled Payments",
          identifier: "/accounts/{AccountId}/scheduled-payments",
          authorized: true,
          },
          {
          id: "15",
          name: "International Payments",
          identifier: "/international-payments",
          authorized: true,
          },
          {
          id: "16",
          name: "Get International Payment Status",
          identifier: "/international-payments/{PaymentId}",
          authorized: true,
          },
          {
          id: "17",
          name: "Create Consent for Payment",
          identifier: "/payment-consents",
          authorized: true,
          },
          {
          id: "18",
          name: "Get Consent Status",
          identifier: "/payment-consents/{ConsentId}",
          authorized: false,
          },
          {
          id: "19",
          name: "Account Access Revocation",
          identifier: "/account-requests/{AccountRequestId}",
          authorized: true,
          },
          {
          id: "20",
          name: "Bulk Account Balances",
          identifier: "/balances",
          authorized: false,
          },
                    {
          id: "18",
          name: "Get Consent Status",
          identifier: "/payment-consents/{ConsentId}",
          authorized: false,
          },
          {
          id: "19",
          name: "Account Access Revocation",
          identifier: "/account-requests/{AccountRequestId}",
          authorized: true,
          },
          {
          id: "20",
          name: "Bulk Account Balances",
          identifier: "/balances",
          authorized: false,
          },
        ],
      }
    },
    {
      name: "Insurent",
      type: "Mobile Application",
      latestRequest: "13 minutes ago",
      givenAccessOn: "01/09/2024",
      detail: {
        "Request Log": [
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To aggregate account balances",
            endpoint: "/accounts/{AccountId}/balances",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To understand the transaction patterns",
            endpoint: "/accounts/{AccountId}/transactions",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of beneficiaries",
            endpoint: "/accounts/{AccountId}/beneficiaries",
            status: "Failed",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of direct debits",
            endpoint: "/accounts/{AccountId}/direct-debits",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To create an account request",
            endpoint: "/account-requests",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of webhooks",
            endpoint: "/webhooks",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of products",
            endpoint: "/accounts/{AccountId}/product",
            status: "Failed",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of scheduled payments",
            endpoint: "/accounts/{AccountId}/scheduled-payments",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of international payments",
            endpoint: "/international-payments",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of international payment",
            endpoint: "/international-payments/{PaymentId}",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To create a consent for payment",
            endpoint: "/payment-consents",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of consent",
            endpoint: "/payment-consents/{ConsentId}",
            status: "Failed",
          }
        ],
        "APIs": [
          {
          id: "1",
          name: "Get Accounts",
          identifier: "/accounts",
          authorized: true,
          },
          {
          id: "2",
          name: "Get Account Details",
          identifier: "/accounts/{AccountId}",
          authorized: true,
          },
          {
          id: "3",
          name: "Get Balances",
          identifier: "/accounts/{AccountId}/balances",
          authorized: false,
          },
          {
          id: "4",
          name: "Get Transactions",
          identifier: "/accounts/{AccountId}/transactions",
          authorized: false,
          },
          {
          id: "5",
          name: "Get Beneficiaries",
          identifier: "/accounts/{AccountId}/beneficiaries",
          authorized: true,
          },
          {
          id: "6",
          name: "Get Standing Orders",
          identifier: "/accounts/{AccountId}/standing-orders",
          authorized: false,
          },
          {
          id: "7",
          name: "Get Direct Debits",
          identifier: "/accounts/{AccountId}/direct-debits",
          authorized: true,
          },
          {
          id: "8",
          name: "Get Products",
          identifier: "/accounts/{AccountId}/product",
          authorized: false,
          },
          {
          id: "9",
          name: "Create Account Request",
          identifier: "/account-requests",
          authorized: true,
          },
          {
          id: "10",
          name: "Webhook Subscriptions",
          identifier: "/webhooks",
          authorized: true,
          },
          {
          id: "11",
          name: "Payment Initiation",
          identifier: "/payments",
          authorized: false,
          },
          {
          id: "12",
          name: "Get Payment Details",
          identifier: "/payments/{PaymentId}",
          authorized: true,
          },
          {
          id: "13",
          name: "Funds Confirmation",
          identifier: "/funds-confirmations",
          authorized: false,
          },
          {
          id: "14",
          name: "Scheduled Payments",
          identifier: "/accounts/{AccountId}/scheduled-payments",
          authorized: true,
          },
          {
          id: "15",
          name: "International Payments",
          identifier: "/international-payments",
          authorized: true,
          },
          {
          id: "16",
          name: "Get International Payment Status",
          identifier: "/international-payments/{PaymentId}",
          authorized: true,
          },
          {
          id: "17",
          name: "Create Consent for Payment",
          identifier: "/payment-consents",
          authorized: true,
          },
          {
          id: "18",
          name: "Get Consent Status",
          identifier: "/payment-consents/{ConsentId}",
          authorized: false,
          },
          {
          id: "19",
          name: "Account Access Revocation",
          identifier: "/account-requests/{AccountRequestId}",
          authorized: true,
          },
          {
          id: "20",
          name: "Bulk Account Balances",
          identifier: "/balances",
          authorized: false,
          },
        ],
      }
    },
    {
      name: "Stonk",
      type: "Mobile Application",
      latestRequest: "1 hour ago",
      givenAccessOn: "17/04/2024",
      detail: {
        "Request Log": [
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To aggregate account balances",
            endpoint: "/accounts/{AccountId}/balances",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To understand the transaction patterns",
            endpoint: "/accounts/{AccountId}/transactions",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of beneficiaries",
            endpoint: "/accounts/{AccountId}/beneficiaries",
            status: "Failed",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of direct debits",
            endpoint: "/accounts/{AccountId}/direct-debits",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To create an account request",
            endpoint: "/account-requests",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of webhooks",
            endpoint: "/webhooks",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of products",
            endpoint: "/accounts/{AccountId}/product",
            status: "Failed",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of scheduled payments",
            endpoint: "/accounts/{AccountId}/scheduled-payments",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the list of international payments",
            endpoint: "/international-payments",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of international payment",
            endpoint: "/international-payments/{PaymentId}",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To create a consent for payment",
            endpoint: "/payment-consents",
            status: "Success",
          },
          {
            datetime: "2024-11-12T11:32:00Z",
            action: "To get the status of consent",
            endpoint: "/payment-consents/{ConsentId}",
            status: "Failed",
          }
        ],
        "APIs": [
          {
          id: "1",
          name: "Get Accounts",
          identifier: "/accounts",
          authorized: true,
          },
          {
          id: "2",
          name: "Get Account Details",
          identifier: "/accounts/{AccountId}",
          authorized: true,
          },
          {
          id: "3",
          name: "Get Balances",
          identifier: "/accounts/{AccountId}/balances",
          authorized: false,
          },
          {
          id: "4",
          name: "Get Transactions",
          identifier: "/accounts/{AccountId}/transactions",
          authorized: false,
          },
          {
          id: "5",
          name: "Get Beneficiaries",
          identifier: "/accounts/{AccountId}/beneficiaries",
          authorized: true,
          },
          {
          id: "6",
          name: "Get Standing Orders",
          identifier: "/accounts/{AccountId}/standing-orders",
          authorized: false,
          },
          {
          id: "7",
          name: "Get Direct Debits",
          identifier: "/accounts/{AccountId}/direct-debits",
          authorized: true,
          },
          {
          id: "8",
          name: "Get Products",
          identifier: "/accounts/{AccountId}/product",
          authorized: false,
          },
          {
          id: "9",
          name: "Create Account Request",
          identifier: "/account-requests",
          authorized: true,
          },
          {
          id: "10",
          name: "Webhook Subscriptions",
          identifier: "/webhooks",
          authorized: true,
          },
          {
          id: "11",
          name: "Payment Initiation",
          identifier: "/payments",
          authorized: false,
          },
          {
          id: "12",
          name: "Get Payment Details",
          identifier: "/payments/{PaymentId}",
          authorized: true,
          },
          {
          id: "13",
          name: "Funds Confirmation",
          identifier: "/funds-confirmations",
          authorized: false,
          },
          {
          id: "14",
          name: "Scheduled Payments",
          identifier: "/accounts/{AccountId}/scheduled-payments",
          authorized: true,
          },
          {
          id: "15",
          name: "International Payments",
          identifier: "/international-payments",
          authorized: true,
          },
          {
          id: "16",
          name: "Get International Payment Status",
          identifier: "/international-payments/{PaymentId}",
          authorized: true,
          },
          {
          id: "17",
          name: "Create Consent for Payment",
          identifier: "/payment-consents",
          authorized: true,
          },
          {
          id: "18",
          name: "Get Consent Status",
          identifier: "/payment-consents/{ConsentId}",
          authorized: false,
          },
          {
          id: "19",
          name: "Account Access Revocation",
          identifier: "/account-requests/{AccountRequestId}",
          authorized: true,
          },
          {
          id: "20",
          name: "Bulk Account Balances",
          identifier: "/balances",
          authorized: false,
          },
        ],
      }
    }
];