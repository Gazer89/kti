const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const issueSchema = new Schema({
    
    category: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    orignalSubmitterEmail: { type: String, required: false },
    orignalSubmitterID: { type: String, required: false },
    workaround: { type: String, required: false },
    issueCount: { type: Number, required: true },
    duplicate: { type: Boolean, required: true },
    originalRnt: { type: String, required: false },
    originalPNR: { type: String, required: false },
    originalNetTracer: { type: String, required: false },
    originalURL: { type: String, required: false },
    users : [{ type: Schema.Types.ObjectId, ref: 'User' }],
    examples : [{ type: Schema.Types.ObjectId, ref: 'Example' }],
    orginalSubmitdate: { type: Date, default: Date.now }
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;