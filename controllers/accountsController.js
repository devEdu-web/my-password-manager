const Accounts = require("../models/accounts");
const {check, validationResult} = require("express-validator");

exports.getMainPage = (req, res, next) => {
	res.render("index");
};

exports.getAccountsPage = (req, res, next) => {
	const service = req.query.service;
	Accounts.findAll({
		where: {
			serviceName: service,
		},
	})
		.then((accounts) => {
			const allAcounts = accounts;
			res.render("accounts", {
				service: service,
				accounts: allAcounts,
			});
		})
		.catch((err) => console.log(err));
};

exports.getCreateAccountPage = (req, res, next) => {
	const service = req.query.service;
	res.render("create-account", {
		hasError: false,
		service: service,
	});
};

exports.getEditAccountPage = (req, res, next) => {
	const service = req.query.service;
	const id = req.query.id;
	Accounts.findAll({
		where: {
			id: id,
			serviceName: service,
		},
	})
		.then((account) => {
			const fetchedAccount = account[0];
			res.render("edit-account", {
				hasError: false,
				service: service,
				account: fetchedAccount,
			});
		})
		.catch((err) => console.log(err));
};

exports.getAccountInfoPage = (req, res, next) => {
	const service = req.query.service;
	const id = Number(req.query.id);

	Accounts.findByPk(id)
		.then((account) => {
			const fetchedAccount = account;
			res.render("account-info", {
				account: fetchedAccount,
			});
		})
		.catch((err) => console.log(err));
};

exports.dataValidation = (req, res, next) => {
	const errors = validationResult(req);
	const accountInfo = req.body;

	if (!errors.isEmpty()) {
		res.redirect("back");
	} else {
		next();
	}
};

exports.postAccount = (req, res, next) => {
	const accountInfo = req.body;

	Accounts.create({
		user: accountInfo.nickname,
		email: accountInfo.email,
		recoveryEmail: accountInfo.recoveryEmail,
		password: accountInfo.password,
		cellNumber: accountInfo.number,
		serviceName: accountInfo.service,
	})
		.then((result) => {
			res.status(201);
			res.redirect(`/accounts?service=${accountInfo.service}`);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.postEditAccount = (req, res, next) => {
	const updatedData = req.body;
	const accountId = Number(req.body.id);

	Accounts.update(
		{
			user: updatedData.nickname,
			email: updatedData.email,
			recoveryEmail: updatedData.recoveryEmail,
			password: updatedData.password,
			cellNumber: updatedData.number,
		},
		{
			where: {
				id: accountId,
			},
		}
	)
		.then((result) => {
			res.redirect(`/accounts?service=${updatedData.service}`);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.deleteAccount = (req, res, next) => {
	const service = req.query.service;
	const id = req.query.id;

	Accounts.destroy({
		where: {
			id: id,
			serviceName: service,
		},
	})
		.then((result) => {
			res.redirect(`/accounts?service=${service}`);
		})
		.catch((err) => console.log(err));
};
