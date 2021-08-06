import http from "@/http-common";

class CustomersDataService {
  getAll() {
    return http.get("/customers");
  }

  create(data: any) {
    return http.post("/customers", data);
  }

  update(id: any, data: any) {
    return http.put(`/customers/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/customers/${id}`);
  }
}

export default new CustomersDataService();