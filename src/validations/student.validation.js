const Joi = require("joi");
const { password, objectId } = require("./custom.validation");

const createStudent = {
  body: Joi.object().keys({
    maSinhVien: Joi.string().optional(),
    maMonHoc: Joi.string().optional(),
    diem: Joi.number().optional(),
  }),
};

const getStudents = {
  query: Joi.object().keys({
    studentCode: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getStudent = {
  params: Joi.object().keys({
    studentCode: Joi.string().required(),
  }),
};

const updateStudent = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      maSinhVien: Joi.string().optional(),
      maMonHoc: Joi.string().optional(),
      diem: Joi.number().optional(),
    })
    .min(1),
};

const deleteStudent = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
};
