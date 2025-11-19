SELECT
    ItemCode, 
    sum(TotalCostSGD) ItemCost, 
    sum(shippingcost) Shipping, 
    sum(TotalCostSGD)+sum(shippingcost) GrandTotal, 
    round((sum(TotalCostSGD)+sum(shippingcost)) / sum(quantity), 2) AvgCost
FROM
    PurchaseOrder
GROUP BY
    ItemCode
order by ItemCode;