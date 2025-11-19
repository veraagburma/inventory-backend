
-- Use postgres DB in the "dynatorixdb" project 
SELECT current_database();

------------------------------- Items ----------------------------------

select * from Platform;

-- ITEM MASTER DATA
CREATE TABLE Platform (
--  PlatformID SERIAL PRIMARY KEY,
  PlatformName VARCHAR(255) PRIMARY KEY,				-- Shopee / Lazada / Taobao / 1688 
  PlatformType VARCHAR(100),							-- e.g., Purchase, Sales, etc.  
  CreatedBy VARCHAR(200),
  CreatedDate TIMESTAMP,
  UpdatedBy VARCHAR(200),
  UpdatedDate TIMESTAMP
);	

------------------------------- Supplier ----------------------------------

select * from supplier order by createddate;
select *, to_char(createddate, 'YYYY-MM-DD HH24:MI:SS'), to_char(updateddate, 'YYYY-MM-DD HH24:MI:SS') from supplier order by createddate;
select *, to_char(createddate, 'YYYY-MM-DD HH24:MI:SS'), to_char(updateddate, 'YYYY-MM-DD HH24:MI:SS')from supplier where suppliername = 'ADERAJAR ADERERRO';
delete from supplier where suppliername = 'sd';


-- ITEM MASTER DATA
CREATE TABLE Supplier (
--  SupplierID SERIAL PRIMARY KEY,
  SupplierName VARCHAR(255) PRIMARY KEY,
  SupplierCName VARCHAR(255) NOT NULL,				-- Chinese Name 
  SupplierAddress TEXT,
  SupplierRemarks TEXT,
  CreatedBy VARCHAR(200),
  CreatedDate TIMESTAMP,
  UpdatedBy VARCHAR(200),
  UpdatedDate TIMESTAMP
);



------------------------------------------------------------------------------------------------------------------> Item Master
	delete from item;
	delete from item where itemcode = 'T2';
	SELECT to_char(createddate, 'YYYY-MM-DD HH24:MI:SS') FROM Item;
	
	SELECT createddate, pg_typeof(createddate), pg_typeof(UpdatedDate) FROM Item LIMIT 1;
	
	select * from Item;
	
	SELECT column_name, data_type 
	FROM information_schema.columns 
	WHERE table_name = 'item' AND column_name = 'createddate';

-- ITEM MASTER DATA. This is a static table like a catalogue
CREATE TABLE Item (
  ItemCode VARCHAR(10) PRIMARY KEY,                         -- e.g., Sample, C0001, C0002
  ItemCategory VARCHAR(255) NOT NULL,                       -- e.g., Shirt / Camisole
  ItemName VARCHAR(255) NOT NULL,                           -- e.g., Padded Camisole
  ItemRemarks VARCHAR(500) NOT NULL,
  CreatedBy VARCHAR(200),
  CreatedDate TIMESTAMP,
  UpdatedBy VARCHAR(200),
  UpdatedDate TIMESTAMP
);

		select *, to_char(createddate, 'YYYY-MM-DD HH24:MI:SS'), to_char(updateddate, 'YYYY-MM-DD HH24:MI:SS') from ItemVariant;
		select * from itemvariant;
		delete from itemvariant;

-- Items to be sold in Shop. This is a static table like a catalogue
	--> Inventory will link to PO/DO and track the product cost values changes with time. So, removed the UnitPrice here as it can be queried from Inventory Master
CREATE TABLE ItemVariant (
  -- VariantID SERIAL PRIMARY KEY,
  SKU VARCHAR(50) unique primary key									-- Generate SKU on the fly for new products
		GENERATED ALWAYS AS (ItemCode || '-' || Color || '-' || size) stored,
  ItemCode VARCHAR(10) REFERENCES Item(ItemCode),						-- S001, C001, etc.
  Size VARCHAR(20) not null,                                        	 -- e.g., S, M, L, Free Size
  Color VARCHAR(50) not null,                                        	 -- e.g., Black, Nude
  Barcode VARCHAR(50),                                      			-- Optional, can be NULL
  --Weight_Grams  NUMERIC(10,2),										-- Est weight / vol of the items in the PO. These values can be overwritten by PurchaseOrderItem.DeclaredWeight 
  --Volume_Cm3 NUMERIC(10,2) ,       
  -- UnitPrice NUMERIC(10, 2),                           
  ItemRemarks TEXT,                                          -- Optional remarks e.g., "Fast-selling Colour"
  CreatedBy VARCHAR(200),
  CreatedDate TIMESTAMP,
  UpdatedBy VARCHAR(200),
  UpdatedDate TIMESTAMP
);



---------------------------------------------------------------------------------------------------------------> Sales Order

/*
 * What if there's full / partial refund
 */  

SELECT tablename FROM pg_tables WHERE schemaname = 'public';

select to_char(orderdate, 'YYYY-MM-DD HH24:MI:SS'), * from salesorder where salesorderid = '251007ED50EVPJ';

select * from salesorder;
select * from salesorderitem;
where salesorderid = '251007ED50EVPJ';

	delete from salesorderitem;
	delete from salesorder;

CREATE TABLE SalesOrder (
  SalesOrderID varchar(35) PRIMARY KEY,
  Platform VARCHAR(255) REFERENCES Platform(PlatformName), 
  OrderDate TIMESTAMP NOT NULL DEFAULT CURRENT_DATE,
  OrderStatus varchar(200),						-- (Pending, Shipped, Delivered, Returned, Cancelled, Completed, etc.)
  Shippingfee NUMERIC(10,2) default 2.03,
  
  CommissionFee NUMERIC(10,2),
  ServiceFee NUMERIC(10,2),
  TransactionFee NUMERIC(10,2),
  ShippingFeeSaverProgramme NUMERIC(10,2) default 0.15,
  
  TotalPrice NUMERIC(10,2) not null,
  SellerBundleDiscount NUMERIC(10,2),
  SellerVoucher NUMERIC(10,2),
 
  PlatformBundleDiscount NUMERIC(10,2),	
  PlatformVoucherValue NUMERIC(10,2),
  
  CreditCardDiscount NUMERIC(10,2),
  
--  SellerRebate NUMERIC(10,2),
--  PlatformRebate NUMERIC(10,2),
  
  CreatedBy VARCHAR(200),
  CreatedDate TIMESTAMP,
  UpdatedBy VARCHAR(200),
  UpdatedDate TIMESTAMP
);


		select * from salesorderitem;
		delete from SalesOrderItem;

CREATE TABLE SalesOrderItem (
	SOItemID SERIAL PRIMARY KEY,
	SalesOrderID varchar(35) references SalesOrder(SalesOrderID) ON DELETE CASCADE,
	SKU VARCHAR(50) REFERENCES ItemVariant (SKU), 	  
	Quantity INT NOT NULL default 1, 
	UnitPrice NUMERIC(10,2) not null,                  		-- Optional: derived if needed
	ItemDiscount NUMERIC(10,2),							 	-- Discount from original price listed
--	TotalPrice NUMERIC(10,2) not null
--		GENERATED ALWAYS AS ((Quantity * UnitPrice) - Discount) stored,
	Remarks TEXT,
	CreatedBy VARCHAR(200),
	CreatedDate TIMESTAMP,
	UpdatedBy VARCHAR(200),
	UpdatedDate TIMESTAMP
);


---------------------------------------------------------------------------------------------------------------> PO & Inventory
	
	delete from PurchaseOrder;
	
	select * from PurchaseOrder;
		where category = 'Polymailer';
		where ponumber = '2451578916179813557';
	select * from PurchaseOrderItem;
	select * from Item;
	select * from ItemVariant ;
	where sku = 'C005-Purple-L';
	select * from supplier;
		where suppliername = 'YY trendy boutique women''s clothing selection';
	

	
-- PURCHASE ORDERS
--> Historical record of purchases from suppliers > ✅ unit cost at time of purchase	 > Source of truth for cost
CREATE TABLE PurchaseOrder (
	-- POID SERIAL PRIMARY KEY,
	-- SKU VARCHAR(50) REFERENCES ItemVariant(SKU), 				 -- SKU should be at Item level
	-- Supplier VARCHAR(255) references Supplier(SupplierName) ON DELETE SET NULL,		-- ON DELETE SET NULL,   
	PONumber VARCHAR(100) PRIMARY KEY, 
	Supplier VARCHAR(255),                                     
	Platform VARCHAR(255), -- references Platform(PlatformName),                                        
	PODate TIMESTAMP,
	Category VARCHAR(50),
	ItemCode VARCHAR(30),
	                               -- OrderID from Shopee, etc.
	TotalCostCNY NUMERIC(12, 2),
	TotalCostSGD NUMERIC(12, 2),
	Discount NUMERIC(10, 2) DEFAULT 0,
	Quantity NUMERIC(10, 2) DEFAULT 0,
	UnitCostPerBatch NUMERIC(10,2)  
		GENERATED ALWAYS AS (
			case
				WHEN Quantity = 0 OR Quantity IS NULL THEN NULL
				ELSE (TotalCostSGD + ShippingCost) / Quantity
			end
		) stored,
	ShippingCost NUMERIC(10, 2),								-- nullable for those bought from Sg
	ShippingType varchar(20),									-- nullable for those bought from Sg
	ShippingDate TIMESTAMP,										-- more like shipping payment date
	POStatus varchar(10), 										-- (Pending, Received, Cancelled, etc.)
	Remarks TEXT,
	CreatedBy VARCHAR(200),
	CreatedDate TIMESTAMP,
	UpdatedBy VARCHAR(200),
	UpdatedDate TIMESTAMP
);

			select * from PurchaseOrderItem;
			select * from itemvariant i ;
-- ITEMS IN THE PURCHASE ORDER
CREATE TABLE PurchaseOrderItem (
	POItemID SERIAL PRIMARY KEY,
	PONumber VARCHAR(100) REFERENCES PurchaseOrder(PONumber),
	SKU VARCHAR(50) REFERENCES ItemVariant(SKU),			-- If Item doesn't have ID, choose "Sample Products" 
	Size VARCHAR(20),
	Color VARCHAR(50),
	SubQuantity INT,
	Remarks TEXT,                                              -- Optional
	CreatedBy VARCHAR(200),
	CreatedDate TIMESTAMP,
	UpdatedBy VARCHAR(200),
	UpdatedDate TIMESTAMP
);




-- MiscExpense
CREATE TABLE MiscExpense (
  ExpenseID SERIAL PRIMARY KEY,
  ExpenseDate DATE NOT NULL DEFAULT CURRENT_DATE,
  SupplierID INT REFERENCES Supplier(SupplierID),                                        
  PlatformID INT REFERENCES Platform(PlatformID), 
  Category VARCHAR(100),                   -- e.g., Clothes, Misc, Shop
  SubCategory VARCHAR(100),				   -- e.g., Subscriptions, Packaging, Coin, Ads 
  Description TEXT,                        -- e.g., "Shopee Ads June", "Freebie Pouch"
  Amount NUMERIC(10,2) NOT NULL,
  Unit VARCHAR(50),                        -- Optional: e.g., "month", "piece", "box"
  Quantity INT DEFAULT 1,                 
  UnitCost NUMERIC(10,2),                  -- Optional: derived if needed
  Shipping_fee NUMERIC(10,2),
  Remarks TEXT
);




























===============> 
-- INVENTORY TRACKING
--> Current available stock levels per SKU > ⚙️ Optional (may store latest cost for convenience)	 > A summary or live snapshot view
CREATE TABLE Inventory (
	InventoryID SERIAL PRIMARY KEY,
	SKU VARCHAR(50) REFERENCES ItemVariant(SKU),
	Qty INT DEFAULT 0,
	CreatedBy VARCHAR(200),
	CreatedDate TIMESTAMP,
	UpdatedBy VARCHAR(200),
	UpdatedDate TIMESTAMP
);






















==================> Other tables



select * from ItemListing;

CREATE TABLE ItemListing (
	ItemListingID SERIAL PRIMARY KEY,
	PlatformID INT REFERENCES Platform(PlatformID), 
	IListingDate TIMESTAMP,
	IListingStatus VARCHAR(20), 
	-- {"Shopee": "2025-07-01", "TikTok": "2025-07-10"} Platform, DateListed, DateRemoved, ReListed, etc.
);





--
--select * from ItemSupplier; 
---- Some items maybe have multiple supplier
--CREATE TABLE ItemSupplier (
--	ItemCode VARCHAR REFERENCES Item(ItemCode),
--	SupplierId INT REFERENCES Supplier(SupplierId),
--	Remarks VARCHAR(500),
--	PRIMARY KEY (ItemCode, SupplierId)
--);


------------------------------- Items ----------------------------------




-- SHIPPING TABLE
CREATE TABLE Shipping (
  Shipping_ID SERIAL PRIMARY KEY,
  ShippingDate DATE,
  Type VARCHAR(50),                                         -- e.g., Direct / Consolidated
  Mode VARCHAR(50),                                         -- e.g., Sea / Air / Land
  ShippingCost NUMERIC(10, 2)
);


-- LINK BETWEEN PO AND SHIPPING
CREATE TABLE PurchaseOrderShipping (
  ID SERIAL PRIMARY KEY,
  PO_ID INT REFERENCES PurchaseOrder(PO_ID),
  Shipping_ID INT REFERENCES Shipping(Shipping_ID)
);



