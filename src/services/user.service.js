import { URL_SERVER } from "../server/URL_SERVER";

export const getUser = () => {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const existsUser = async ({ id }) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const response = await fetch(`${URL_SERVER}/users/${id}`, options);

    const data = await response.json();

    if (data !== null) {
      return true;
    } else return false;
  } catch (error) {
    return false;
  }
};

export const createUser = async (user) => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const [exists] = Promise.all(existsUser(user));

    if (exists) throw new Error("El usuario ya existe");

    const response = await fetch(`${URL_SERVER}/users`, options);

    const data = await response.json();

    data.status = response.status;
    return data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (user) => {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const response = await fetch(`${URL_SERVER}/users/${user.id}`, options);

    const data = await response.json();

    if (data === null || data.password !== user.password)
      throw new Error("El usuario o la contraseña son incorrectos");

    data.status = response.status;
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (user) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const response = await fetch(`${URL_SERVER}/users/${user.id}`, options);

    const data = await response.json();

    data.status = response.status;

    return data;
  } catch (error) {
    return error;
  }
};
