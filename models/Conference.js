import mongoose, { Schema, model } from "mongoose";


const ConferenceSchema = new Schema({
  organisationInfo: {
    organizationName: {
      type: String,
      required: true
    },
    organizationAddress: String,
    organizationCity: String,
    organizationState: String,
    organizationCountry: String,
  },
  conferenceInfo: {
    conferenceName: {
      type: String,
      required: true
    },
    conferenceDescription: String,
    conferenceLocation: String,
    conferenceDate: Date,
    conferenceType: {
      type: String,
      enum: ['Online', 'Offline', 'Hybrid'],
      required: true
    },
    conferenceTheme: String,
    startTime: String,
    endTime: String,

  },
  committeeInfo: {
    committeeChair: String,
    committeeMembers: [String],
  },

  speakers: [{
    name: String,
    affiliation: String,
    bio: String
  }],
  registrationInfo: {
    registrationOpenDate: Date,
    registrationCloseDate: Date,
    registrationFee: Number,
    registrationLink: String,
  },
  verified: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],

  },
  isActive: {
    type: Boolean,
    default: false
  },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }
}, {
  timestamps: true
})

export default mongoose.models.Conference || mongoose.model('Conference', ConferenceSchema);


