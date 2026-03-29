function transformData(data) {
  return data.reduce((acc, item) => {
    const user = item.user;

    if (!acc[user]) {
      acc[user] = {
        totalSpent: 0,
        products: {},
      };
    }

    item.orders.forEach((order) => {
      acc[user].totalSpent += order.price;

      acc[user].products[order.product] =
        (acc[user].products[order.product] || 0) + order.price;
    });

    return acc;
  }, {});
}
