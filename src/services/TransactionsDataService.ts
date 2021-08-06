import http from "@/http-common";

class TransactionsDataService {
  getAll() {
    return http.get("/transactions");
  }

  create(data: any) {
    return http.post("/transactions", data);
  }

  update(id: any, data: any) {
    return http.put(`/transactions/${id}`, data);
  }

  delete(id: any) {
    return http.delete(`/transactions/${id}`);
  }

  deleteAll() {
    return http.delete(`/transactions`);
  }
}

export default new TransactionsDataService();