
drop table MiscExpense;
drop table purchaseordershipping ;
drop table PurchaseOrderItem;
drop table PurchaseOrder;
drop table Inventory;
drop table supplier;
drop table salesorderitem;
drop table salesorder;
drop table ItemVariant;
drop table Item;
drop table Platform;
drop table Shipping;


SELECT table_name
  FROM information_schema.tables
 WHERE table_schema='public'
   AND table_type='BASE TABLE';


SELECT column_name FROM information_schema.columns WHERE table_name='salesorderitem';




