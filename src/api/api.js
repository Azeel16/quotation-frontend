const BASE_URL = "/api";

export const fetchCustomers = async (search = "") => {
  const res = await fetch(`${BASE_URL}/customers?search=${search}`);
  if (!res.ok) throw new Error("Failed to fetch customers");
  return res.json();
};

export const fetchCustomerById = async (id) => {
  const res = await fetch(`${BASE_URL}/customers/${id}`);
  if (!res.ok) throw new Error("Failed to fetch customer");
  return res.json();
};

export const createCustomer = async (payload) => {
  const res = await fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create customer");
  return res.json();
};

export const updateCustomer = async (id, payload) => {
  const res = await fetch(`${BASE_URL}/customers/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update customer");
  return res.json();
};

export const fetchEmployees = async () => {
  const res = await fetch(`${BASE_URL}/employees`);
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json();
};

export const addEmployee = async (payload) => {
  const res = await fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to add employee");
  return res.json();
};

export const fetchItems = async ({ search = "", category = "" } = {}) => {
  const res = await fetch(
    `${BASE_URL}/items?search=${search}&category=${category}`
  );
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
};

export const addItem = async (payload) => {
  const res = await fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to add item");
  return res.json();
};

export const addCategory = async (payload) => {
  const res = await fetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to add category");
  return res.json();
};

export const createOrder = async (payload) => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create order");
  return res.json();
};

export const fetchOrders = async () => {
  const res = await fetch(`${BASE_URL}/orders`);
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
};

export const fetchOrderById = async (orderId) => {
  const res = await fetch(`${BASE_URL}/orders/${orderId}`);
  if (!res.ok) throw new Error("Failed to fetch order");
  return res.json();
};
