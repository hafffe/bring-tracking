#!/usr/bin/env node
'use strict';
const arrify = require('arrify');
const chalk = require('chalk');
const meow = require('meow');
const ora = require('ora');
const fn = require('./');

const cli = meow([
	'Usage',
	'  $ bring [id]',
	'Options',
	' -l, --lang  Default is en. Allowed values are en, sv, no and da',
	'',
	'Examples',
	'  $ bring 373400014506461747 -l sv'
], {
	alias: {
		l: 'locale'
	},
	string: ['_']
});

if (!cli.input[0]) {
	console.error('Expected a shipment or item identifier');
	process.exit(1);
}

const spinner = ora('Loading shipment information');
spinner.start();

const log = arr => console.log(arrify(arr).map(x => `\t${x}`).join('\n'));

const getEvents = arr => {
	if (!arr || arr.length === 0) {
		return;
	}

	arr.forEach(x => {
		const location = x.city.length > 0 ? x.city : x.status;

		log(['', `${x.displayDate} ${x.displayTime} - ${location}`,
			`${chalk.dim(x.description)}`
		]);
	});
};

const print = obj => {
	log(['', `${obj.packageNumber} - ${obj.eventSet[0].status}`]);

	getEvents(obj.eventSet);
};

fn(cli.input[0], {locale: cli.flags.locale}).then(res => {
	spinner.stop();

	if (res.consignmentSet[0].error) {
		return console.error(chalk.red('Couldn\'t find any shipments with this ID'));
	}

	res.consignmentSet.forEach(x => {
		return x.packageSet.forEach(x => {
			return print(x);
		});
	});
});
