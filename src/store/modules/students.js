import axios from "axios";

const state = {
  students: [
    {
      name: "AB",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "p"
    },
    {
      name: "AL",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "r"
    },
    {
      name: "AK",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "r"
    },
    {
      name: "AM",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "r"
    },
    {
      name: "BM",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "r"
    },
    {
      name: "DK",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "p"
    },
    {
      name: "DU",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "r"
    },
    {
      name: "DG",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "p"
    },
    {
      name: "FZ",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "r"
    },
    {
      name: "HK",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "r"
    },
    {
      name: "IA",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "p"
    },
    {
      name: "IB",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "p"
    },
    {
      name: "IK",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "p"
    },
    {
      name: "JT",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "r"
    },
    {
      name: "NO",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "r"
    },
    {
      name: "SS",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "p"
    },
    {
      name: "VK",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "p"
    },
    {
      name: "ZW",
      average: "90",
      email: "thisGuysEmail@datmail.com",
      attendance: "90%",
      assignTA: "p"
    }
  ]
};

const getters = {
  getStudents: state => state.students
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
