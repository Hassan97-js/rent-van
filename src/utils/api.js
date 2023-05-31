const getVans = async (id) => {
  try {
    const url = id ? `/api/vans/${id}` : "/api/vans";

    const response = await fetch(url);

    if (!response.ok) {
      throw {
        message: "Failed to fetch vans",
        statusText: response.statusText,
        status: response.status
      };
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getHostVans = async (id) => {
  try {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
    const response = await fetch(url);

    if (!response.ok) {
      throw {
        message: "Failed to fetch vans",
        statusText: response.statusText,
        status: response.status
      };
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const loginUser = async (creds) => {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(creds)
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      message: data.message,
      statusText: response.statusText,
      status: response.status
    };
  }

  return data;
};

export { getVans, getHostVans, loginUser };
