const USER_ROLE = {
  DOCTOR: "DOCTOR",
  PATIENT: "PATIENT",
};

Object.freeze(USER_ROLE);

const userRoles = Object.keys(USER_ROLE);

export { userRoles };

export default USER_ROLE;
