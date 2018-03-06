"use strict";

module.exports = (err, callback) => {
	if(errors.hasOwnProperty(err)){
	callback(null, errors[err]);
	} else {
		callback(new Error('Error code #' + err + ' not in database'));
	}
};

var errors = {
	1: {
		error: '1',
		status: 'Ok',
		description: 'The operation completed successfully, there was no error'
	},
	2: {
		error: '2',
		status: 'Fail',
		description: 'Generic failure',
		tradeoffers: 'This is occasionally returned when something unexpected goes wrong when sending or accepting a trade offer'
	},
	3: {
		error: '3',
		status: 'NoConnection',
		description: 'No/failed network connection'
	},
	4: {
		error: '4',
		status: 'NoConnectionRetry',
		description: 'This EResult value has been deprecated and removed'
	},
	5: {
		error: '5',
		status: 'InvalidPassword',
		description: 'Returned when you provide an incorrect password or possibly some other kind of authentication token. This can also be returned in response to a CM logon if your network is being temporarily login rate-limited'
	},
	6: {
		error: '6',
		status: 'LoggedInElsewhere',
		description: 'Same user logged in elsewhere'
	},
	7: {
		error: '7',
		status: 'InvalidProtocolVer',
		description: 'Protocol version is incorrect'
	},
	8: {
		error: '8',
		status: 'InvalidParam',
		description: 'A parameter is incorrect'
	},
	9: {
		error: '9',
		status: 'FileNotFound',
		description: 'File was not found'
	},
	10: {
		error: '10',
		status: 'Busy',
		description: 'Called method busy - action not taken'
	},
	11: {
		error: '11',
		status: 'InvalidState',
		description: 'Called object was in an invalid state',
		tradeoffers: 'This trade offer is in an invalid state, and cannot be acted upon. Usually you\'ll need to send a new trade offer'
	},
	12: {
		error: '12',
		status: 'InvalidName',
		description: 'Name is invalid'
	},
	13: {
		error: '13',
		status: 'InvalidEmail',
		description: 'Email is invalid'
	},
	14: {
		error: '14',
		status: 'DuplicateName',
		description: 'Name is not unique'
	},
	15: {
		error: '15',
		status: 'AccessDenied',
		description: 'Access is denied',
		tradeoffers: 'You can\'t send or accept this trade offer because either you can\'t trade with the other user, or one of the parties in this trade can\'t send/receive one of the items in the trade. Possible causes: a) You aren\'t friends with the other user and you didn\'t provide a trade token. b) The trade token was wrong. c) You are trying to send or receive an item for a game in which you or the other user can\'t trade (e.g. due to a VAC ban). d) You are trying to send an item and the other user\'s inventory is full for that game'
	},
	16: {
		error: '16',
		status: 'Timeout',
		description: 'Operation timed out',
		tradeoffers: 'The Steam Community web server did not receive a timely reply from the trade offers server while sending/accepting this trade offer. It is possible (and not unlikely) that the operation actually succeeded'
	},
	17: {
		error: '17',
		status: 'Banned',
		description: 'VAC2 banned'
	},
	18: {
		error: '18',
		status: 'AccountNotFound',
		description: 'Account not found'
	},
	19: {
		error: '19',
		status: 'InvalidSteamID',
		description: 'SteamID is invalid'
	},
	20: {
		error: '20',
		status: 'ServiceUnavailable',
		description: 'The requested service is temporarily unavailable. Analogous to HTTP 503.',
		tradeoffers: 'As the name suggests, the trade offers service is currently unavailable'
	},
	21: {
		error: '21',
		status: 'NotLoggedOn',
		description: 'The user is not logged on'
	},
	22: {
		error: '22',
		status: 'Pending',
		description: 'Request is pending (may be in process, or waiting on third party)'
	},
	23: {
		error: '23',
		status: 'EncryptionFailure',
		description: 'Encryption or Decryption failed'
	},
	24: {
		error: '24',
		status: 'InsufficientPrivilege',
		description: 'Insufficient privilege'
	},
	25: {
		error: '25',
		status: 'LimitExceeded',
		description: 'Too much of a good thing',
		tradeoffers: 'Sending this trade offer would put you over your limit. You are limited to 5 Active offers (including those requiring confirmation, but excluding those in escrow) to a single recipient, or 30 Active offers total. If you are accepting a trade offer, then your inventory for a particular game may be full'
	},
	26: {
		error: '26',
		status: 'Revoked',
		description: 'Access has been revoked (used for revoked guest passes)',
		tradeoffers: 'This response code suggests that one or more of the items in this trade offer does not exist in the inventory from which it was requested'
	},
	27: {
		error: '27',
		status: 'Expired',
		description: 'License/Guest pass the user is trying to access is expired'
	},
	28: {
		error: '28',
		status: 'AlreadyRedeemed',
		description: 'Guest pass has already been redeemed by account, cannot be acked again',
		tradeoffers: 'When accepting a trade offer, this response code suggests that it has already been accepted'
	},
	29: {
		error: '29',
		status: 'DuplicateRequest',
		description: 'The request is a duplicate and the action has already occurred in the past, ignored this time'
	},
	30: {
		error: '30',
		status: 'AlreadyOwned',
		description: 'All the games in this guest pass redemption request are already owned by the user'
	},
	31: {
		error: '31',
		status: 'IPNotFound',
		description: 'IP address not found'
	},
	32: {
		error: '32',
		status: 'PersistFailed',
		description: 'Failed to write change to the data store'
	},
	33: {
		error: '33',
		status: 'LockingFailed',
		description: 'Failed to acquire access lock for this operation'
	},
	34: {
		error: '34',
		status: 'LogonSessionReplaced',
		description: 'There is no further information available about this EResult value'
	},
	35: {
		error: '35',
		status: 'ConnectFailed',
		description: 'There is no further information available about this EResult value'
	},
	36: {
		error: '36',
		status: 'HandshakeFailed',
		description: 'There is no further information available about this EResult value'
	},
	37: {
		error: '37',
		status: 'IOFailure',
		description: 'There is no further information available about this EResult value'
	},
	38: {
		error: '38',
		status: 'RemoteDisconnect',
		description: 'There is no further information available about this EResult value'
	},
	39: {
		error: '39',
		status: 'ShoppingCartNotFound',
		description: 'Failed to find the shopping cart requested'
	},
	40: {
		error: '40',
		status: 'Blocked',
		description: 'A user didn\'t allow it'
	},
	41: {
		error: '41',
		status: 'Ignored',
		description: 'Target is ignoring sender'
	},
	42: {
		error: '42',
		status: 'NoMatch',
		description: 'Nothing matching the request found'
	},
	43: {
		error: '43',
		status: 'AccountDisabled',
		description: 'There is no further information available about this EResult value'
	},
	44: {
		error: '44',
		status: 'ServiceReadOnly',
		description: 'This service is not accepting content changes right now'
	},
	45: {
		error: '45',
		status: 'AccountNotFeatured',
		description: 'Account doesn\'t have value, so this feature isn\'t available'
	},
	46: {
		error: '46',
		status: 'AdministratorOK',
		description: 'Allowed to take this action, but only because requester is admin'
	},
	47: {
		error: '47',
		status: 'ContentVersion',
		description: 'A Version mismatch in content transmitted within the Steam protocol'
	},
	48: {
		error: '48',
		status: 'TryAnotherCM',
		description: 'The current CM can\'t service the user making a request, user should try another'
	},
	49: {
		error: '49',
		status: 'PasswordRequiredToKickSession',
		description: 'You are already logged in elsewhere, this cached credential login has failed'
	},
	50: {
		error: '50',
		status: 'AlreadyLoggedInElsewhere',
		description: 'You are already logged in elsewhere, you must wait'
	},
	51: {
		error: '51',
		status: 'Suspended',
		description: 'Long running operation (content download) suspended/paused'
	},
	52: {
		error: '52',
		status: 'Cancelled',
		description: 'Operation canceled (typically by user: content download)'
	},
	53: {
		error: '53',
		status: 'DataCorruption',
		description: 'Operation canceled because data is ill formed or unrecoverable'
	},
	54: {
		error: '54',
		status: 'DiskFull',
		description: 'Operation canceled - not enough disk space'
	},
	55: {
		error: '55',
		status: 'RemoteCallFailed',
		description: 'An remote call or IPC call failed'
	},
	56: {
		error: '56',
		status: 'PasswordUnset',
		description: 'Password could not be verified as it\'s unset server side'
	},
	57: {
		error: '57',
		status: 'ExternalAccountUnlinked',
		description: 'External account (PSN, Facebook...) is not linked to a Steam account'
	},
	58: {
		error: '58',
		status: 'PSNTicketInvalid',
		description: 'PSN ticket was invalid'
	},
	59: {
		error: '59',
		status: 'ExternalAccountAlreadyLinked',
		description: 'External account (PSN, Facebook...) is already linked to some other account, must explicitly request to replace/delete the link first'
	},
	60: {
		error: '60',
		status: 'RemoteFileConflict',
		description: 'The sync cannot resume due to a conflict between the local and remote files'
	},
	61: {
		error: '61',
		status: 'IllegalPassword',
		description: 'The requested new password is not legal'
	},
	62: {
		error: '62',
		status: 'SameAsPreviousValue',
		description: 'New value is the same as the old one ( secret question and answer )'
	},
	63: {
		error: '63',
		status: 'AccountLogonDenied',
		description: 'You need to provide a Steam Guard email code in order to log on. An email has been sent to your account\'s email address'
	},
	64: {
		error: '64',
		status: 'CannotUseOldPassword',
		description: 'The requested new password is not legal'
	},
	65: {
		error: '65',
		status: 'InvalidLoginAuthCode',
		description: 'The Steam Guard code you provided is incorrect'
	},
	66: {
		error: '66',
		status: 'AccountLogonDeniedNoMail',
		description: 'account login denied due to 2nd factor auth failure - and no mail has been sent'
	},
	67: {
		error: '67',
		status: 'HardwareNotCapableOfIPT',
		description: 'Your machine\'s hardware is not capable of using IPT. Currently, Steam does not use IPT'
	},
	68: {
		error: '68',
		status: 'IPTInitError',
		description: 'There is no further information available about this EResult value'
	},
	69: {
		error: '69',
		status: 'ParentalControlRestricted',
		description: 'Operation failed due to parental control restrictions for current user'
	},
	70: {
		error: '70',
		status: 'FacebookQueryError',
		description: 'Facebook query returned an error'
	},
	71: {
		error: '71',
		status: 'ExpiredLoginAuthCode',
		description: 'Account login denied due to auth code expired'
	},
	72: {
		error: '72',
		status: 'IPLoginRestrictionFailed',
		description: 'There is no further information available about this EResult value'
	},
	73: {
		error: '73',
		status: 'AccountLockedDown',
		description: 'There is no further information available about this EResult value'
	},
	74: {
		error: '74',
		status: 'AccountLogonDeniedVerifiedEmailRequired',
		description: 'There is no further information available about this EResult value'
	},
	75: {
		error: '75',
		status: 'NoMatchingURL',
		description: 'There is no further information available about this EResult value'
	},
	76: {
		error: '76',
		status: 'BadResponse',
		description: 'Parse failure, missing field, etc.'
	},
	77: {
		error: '77',
		status: 'RequirePasswordReEntry',
		description: 'The user cannot complete the action until they re-enter their password'
	},
	78: {
		error: '78',
		status: 'ValueOutOfRange',
		description: 'The value entered is outside the acceptable range'
	},
	79: {
		error: '79',
		status: 'UnexpectedError',
		description: 'Something happened that we didn\'t expect to ever happen'
	},
	80: {
		error: '80',
		status: 'Disabled',
		description: 'The requested service has been configured to be unavailable'
	},
	81: {
		error: '81',
		status: 'InvalidCEGSubmission',
		description: 'The set of files submitted to the CEG server are not valid'
	},
	82: {
		error: '82',
		status: 'RestrictedDevice',
		description: 'The device being used is not allowed to perform this action'
	},
	83: {
		error: '83',
		status: 'RegionLocked',
		description: 'The action could not be complete because it is region restricted'
	},
	84: {
		error: '84',
		status: 'RateLimitExceeded',
		description: 'You are being rate-limited. Analogous to HTTP 429'
	},
	85: {
		error: '85',
		status: 'AccountLoginDeniedNeedTwoFactor',
		description: 'Received in response to a CM logon request. This indicates that you need to provide a TOTP auth code in order to log on'
	},
	86: {
		error: '86',
		status: 'ItemDeleted',
		description: 'The thing we\'re trying to access has been deleted'
	},
	87: {
		error: '87',
		status: 'AccountLoginDeniedThrottle',
		description: 'Login attempt failed, try to throttle response to possible attacker'
	},
	88: {
		error: '88',
		status: 'TwoFactorCodeMismatch',
		description: 'Your TOTP auth code was incorrect'
	},
	89: {
		error: '89',
		status: 'TwoFactorActivationCodeMismatch',
		description: 'Activation code for two-factor didn\'t match'
	},
	90: {
		error: '90',
		status: 'AccountAssociatedToMultiplePartners',
		description: 'Account has been associated with multiple partners'
	},
	91: {
		error: '91',
		status: 'NotModified',
		description: 'Data not modified'
	},
	92: {
		error: '92',
		status: 'NoMobileDevice',
		description: 'The account does not have a mobile device associated with it'
	},
	93: {
		error: '93',
		status: 'TimeNotSynced',
		description: 'The time presented is out of range or tolerance'
	},
	94: {
		error: '94',
		status: 'SmsCodeFailed',
		description: 'SMS code failure (no match, none pending, etc.)'
	},
	95: {
		error: '95',
		status: 'AccountLimitExceeded',
		description: 'Too many accounts access this resource'
	},
	96: {
		error: '96',
		status: 'AccountActivityLimitExceeded',
		description: 'Too many changes to this account'
	},
	97: {
		error: '97',
		status: 'PhoneActivityLimitExceeded',
		description: 'Too many changes to this phone'
	},
	98: {
		error: '98',
		status: 'RefundToWallet',
		description: 'Cannot refund to payment method, must use wallet'
	},
	99: {
		error: '99',
		status: 'EmailSendFailure',
		description: 'Cannot send an email'
	},
	100: {
		error: '100',
		status: 'NotSettled',
		description: 'Can\'t perform operation till payment has settled'
	},
	101: {
		error: '101',
		status: 'NeedCaptcha',
		description: 'Needs to provide a valid captcha'
	},
	102: {
		error: '102',
		status: 'GSLTDenied',
		description: 'A game server login token owned by this token\'s owner has been banned'
	},
	103: {
		error: '103',
		status: 'GSOwnerDenied',
		description: 'Game server owner is denied for other reason (account lock, community ban, vac ban, missing phone)'
	},
	104: {
		error: '104',
		status: 'InvalidItemType',
		description: 'The type of thing we were requested to act on is invalid'
	},
	105: {
		error: '105',
		status: 'IPBanned',
		description: 'The ip address has been banned from taking this action'
	},
	106: {
		error: '106',
		status: 'GSLTExpired',
		description: 'This token has expired from disuse; can be reset for use'
	},
	107: {
		error: '107',
		status: 'InsufficientFunds',
		description: 'User doesn\'t have enough wallet funds to complete the action'
	},
	108: {
		error: '108',
		status: 'TooManyPending',
		description: 'There are too many of this thing pending already'
	},
	109: {
		error: '109',
		status: 'NoSiteLicensesFound',
		description: 'No site licenses found'
	},
	110: {
		error: '110',
		status: 'WGNetworkSendExceeded',
		description: 'The WG couldn\'t send a response because we exceeded max network send size'
	}
};