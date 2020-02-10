const mongoose = require ('mongoose');

const ContractorAccountSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	name: String,
	password: String,
	email_address: String,
	company_profile: String,
	experiences: String,
	technical_knowledge: String,
	skillsets: String,
	available_time_to_time: String,
	remuneration: String,
	work_area: String,
	daily_quotation: Number
});

const AdminAccountSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	name: String,
	password: String,
	email_address: String
});

const ClientAccountSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	name: String,
	password: String,
	email_address: String,
	address: String,
	contact_no: Number
});

const OrderInformationSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	quotation_no: String,
	quotation_date: Date,
	BSN_number: Number,
	order_id: Number,
	contact_name: String,
	material_balance: [
		{
			item: String,
			description_of_works: String,
			unit: Number,
			qty: Number,
			unit_rate: Number,
			Amount: Number
		},
		{
			item: String,
			description_of_works: String,
			unit: Number,
			qty: Number,
			unit_rate: Number,
			Amount: Number
		},
		{
			item: String,
			description_of_works: String,
			unit: Number,
			qty: Number,
			unit_rate: Number,
			Amount: Number
		},
	],
	material_balance_2: [
		{
			fiber_length: Number,
			spitter_type: String,
			iten_no: Number,
			item_name: String,
			unit_rate: Number,
			total_qty: Number,
			amount: Number
		},
		{
			fiber_length: Number,
			spitter_type: String,
			iten_no: Number,
			item_name: String,
			unit_rate: Number,
			total_qty: Number,
			amount: Number
		},
		{
			fiber_length: Number,
			spitter_type: String,
			iten_no: Number,
			item_name: String,
			unit_rate: Number,
			total_qty: Number,
			amount: Number
		},
	],
	total_amount: Number,
	remarks: String
});

const OrderInformationExcelSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	file_id: mongoose.Types.ObjectId.getTimestamp(),
	file: File
});

const AOWSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	AOW_no: Number,
	AOW_date: Date,
	our_ref_no: Number,
	work_order_date_remarks: Date,
	project: String,
	BSN_number: Number,
	contractor_name: String,
	contractor_contact: Number,
	customer_name: String,
	customer_address: String,
	remarks: String,
	material_balance: [
		{
			item: String,
			description_of_works: String,
			unit: Number,
			qty: Number,
			unit_rate: Number,
			Amount: Number
		},
		{
			item: String,
			description_of_works: String,
			unit: Number,
			qty: Number,
			unit_rate: Number,
			Amount: Number
		},
		{
			item: String,
			description_of_works: String,
			unit: Number,
			qty: Number,
			unit_rate: Number,
			Amount: Number
		},
	],
	total_amount: Number
});

const AOWExcelSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	file_id: mongoose.Types.ObjectId.getTimestamp(),
	file: File
});

const MaterialBalanceSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	material_balance: [
		{
			item: String,
			description_of_works: String,
			unit: Number,
			qty: Number,
			unit_rate: Number,
			Amount: Number
		},
		{
			item: String,
			description_of_works: String,
			unit: Number,
			qty: Number,
			unit_rate: Number,
			Amount: Number
		},
		{
			item: String,
			description_of_works: String,
			unit: Number,
			qty: Number,
			unit_rate: Number,
			Amount: Number
		},
	],
	material_balance_2: [
		{
			fiber_length: Number,
			spitter_type: String,
			iten_no: Number,
			item_name: String,
			unit_rate: Number,
			total_qty: Number,
			amount: Number
		},
		{
			fiber_length: Number,
			spitter_type: String,
			iten_no: Number,
			item_name: String,
			unit_rate: Number,
			total_qty: Number,
			amount: Number
		},
		{
			fiber_length: Number,
			spitter_type: String,
			iten_no: Number,
			item_name: String,
			unit_rate: Number,
			total_qty: Number,
			amount: Number
		},
	],
});

const MaterialBalanceExcelSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	file_id: mongoose.Types.ObjectId.getTimestamp(),
	file: File
});

const InvoiceSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	file_id: mongoose.Types.ObjectId.getTimestamp(),
	file: File
});
