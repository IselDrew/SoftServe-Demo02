export class OrderHistoryView {
  constructor(orderHistoryHandler) {
    this.orderHistory = document.querySelector(".order-history");
    this.orderBtn = document.querySelector(".orders");
    this.orderBtn.addEventListener("click", orderHistoryHandler);
  }

  renderOrderHistory(orders) {
    const output = orders
      .map((order, index) => {
        return `
        <tr>
          <td>${index + 1}</td>
          <td>${order.name}</td>
          <td>${order.amountOfProducts}</td>
          <td>Jun 15, 2017</td>
          <td>$${order.totalPrice}</td>
        </tr>
      `;
      })
      .join("");

    this.orderHistory.innerHTML = output;
  }
}