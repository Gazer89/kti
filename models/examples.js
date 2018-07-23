const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    orginalIssueId: { type: String, required: true },
    orginalSubmitdate: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    orginalSubmitterEmail: { type: String, required: true },
    workaround: { type: String, required: true },
    additionalRNT: { type: String, required: true },
    additionalPNR: { type: String, required: true },
    additionalNetTracer: { type: String, required: true },
    additionalURL: { type: String, required: true },
    users : [{ type: Schema.Types.ObjectId, ref: 'User' }],
    issues : [{ type: Schema.Types.ObjectId, ref: 'Issue' }],
    orginalSubmitdate: { type: Date, default: Date.now }
});

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;

